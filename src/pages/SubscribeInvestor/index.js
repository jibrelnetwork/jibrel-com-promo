import React, { useState } from 'react'
import cc from 'classcat'
import { useI18n } from '/hooks/i18n'
import { I18nContext } from '/app/i18n-provider'
import { sendEventGTM, sendEventGTMAccountType } from '/utils/send-gtm'

import COUNTRIES from '/constants/countries.json'

import Layout from '/layout'
import LanguageLink from '/components/LanguageLink'
import Success from '/components/Success'
import Error from '/components/Error'

import button from '/theme/button.css'
import form from '/theme/form.css'
import container from '/theme/container.css'
import title from '/theme/title.css'
import link from '/theme/link.css'

export default function SubscribeFounder() {
  const i18n = useI18n()
  const [resultOfSending, setResultOfSending] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [fieldsValue, setFieldsValue] = useState({
    name: '',
    email: '',
    country: '',
    company: '',
    user_type: 'investor_individual'
  })

  function changeValue(value, fieldName) {
    return {
      name: fieldName === 'name' ? value : fieldsValue.name,
      email: fieldName === 'email' ? value : fieldsValue.email,
      country: fieldName === 'country' ? value : fieldsValue.country,
      company: fieldName === 'company' ? value : fieldsValue.company,
      user_type: fieldName === 'user_type' ? value : fieldsValue.user_type,
    }
  }

  function onChageInput(e) {
    const fieldName = e.target.getAttribute('name')    
    setFieldsValue(changeValue(e.target.value, fieldName))
    if (e.target.value.length > 3) {
      sendEventGTM('lead', 'completeForm', fieldName)
    }
  }

  function onChangeTypeOfAccount(e) {    
    setFieldsValue(changeValue(e.target.value, 'user_type'))
    sendEventGTMAccountType('lead', 'completeForm', 'chooseType', fieldsValue.user_type)
  }
  
  function onChangeCountry(e) {    
    setFieldsValue(changeValue(e.target.value, 'country'))
    sendEventGTM('lead', 'completeForm', 'chooseCountry')
  }

  function handleFormSubmit(e) {
    console.log(e)
    
    e.preventDefault()
    const data = {
      'email': fieldsValue.email,
      'name': fieldsValue.name,
      'fields': {
        'country': fieldsValue.user_type === 'investor_individual' ? fieldsValue.country : undefined,
        'user_type': fieldsValue.user_type,
        'company': fieldsValue.company,
        'language': fieldsValue.language,
      }
    }
    setSubmitting(true)
    fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => {
        setResultOfSending('success')
        sendEventGTM('lead', 'sendSuccess', 'mainForm')
        setSubmitting(false)
      })
      .catch(() => {
        setResultOfSending('error')
        sendEventGTM('lead', 'sendDenied', 'mainForm')
        setSubmitting(false)
      })
  }  

  return (
    <Layout>
      <div className={container.container}>
        {resultOfSending !== 'success' && (
          <div className={resultOfSending === 'error' ? form.hideForm : ''}>
            <h1 className={title.title}>{i18n._('SubscribeInvestor.head.title')}</h1>
            <LanguageLink routeName='SubscribeFounder' className={link.link}>
              {i18n._('SubscribeInvestor.head.goToSignUp')}
            </LanguageLink>
            <form className={form.form} onSubmit={handleFormSubmit}>
              <div className={form.box}>
                <h2 className={form.title}>{i18n._('SubscribeInvestor.input.typeOfAccount.title')}</h2>
                <label className={form.radio}>
                  <input
                    name='user_type'
                    type='radio'
                    value='investor_individual'
                    required
                    disabled={submitting}
                    checked={fieldsValue.user_type === 'investor_individual'}
                    onChange={ onChangeTypeOfAccount }
                  />
                  <div className={form.radioBox}>
                    <p className={form.radioTitle}>{i18n._('SubscribeInvestor.input.typeOfAccount.option.individual.title')}</p>
                    <p className={form.radioDescription}>{i18n._('SubscribeInvestor.input.typeOfAccount.option.individual.info')}</p>
                  </div>
                </label>            
                <label className={form.radio}>
                  <input
                    name='user_type'
                    type='radio'
                    value='investor_organization'
                    required
                    disabled={submitting}
                    checked={fieldsValue.user_type === 'investor_organization'}
                    onChange={ onChangeTypeOfAccount }
                  />
                  <div className={form.radioBox}>
                    <p className={form.radioTitle}>{i18n._('SubscribeInvestor.input.typeOfAccount.option.organization.title')}</p>
                    <p className={form.radioDescription}>{i18n._('SubscribeInvestor.input.typeOfAccount.option.organization.info')}</p>
                  </div>
                </label>
              </div>
              {fieldsValue.user_type === 'investor_individual' ? (
                <>
                  <label className={form.box}>
                    <h2 className={form.title}>{i18n._('SubscribeInvestor.input.fullName.title')}</h2>
                    <input
                      name='name'
                      required
                      className={form.input}
                      disabled={submitting}
                      onChange={onChageInput}
                    />
                  </label>
                  <label className={form.box}>
                    <h2 className={form.title}>{i18n._('SubscribeInvestor.input.countryOfResidence.title')}</h2>
                    <select
                      name='country'
                      required
                      disabled={submitting}
                      className={form.input}
                      onChange={onChangeCountry}
                    >
                      <option value=''>{i18n._('SubscribeInvestor.input.countryOfResidence.empty')}</option>
                      {COUNTRIES.map(item => <option value={item.id} key={item.id}>{item.title}</option> )}
                    </select>
                  </label>
                </>
              ) : (
                <>
                <label className={form.box}>
                  <h2 className={form.title}>{i18n._('SubscribeInvestor.input.fullNameOrganization.title')}</h2>
                  <input
                    name='company'
                    required
                    disabled={submitting}
                    className={form.input}
                    onChange={onChageInput}
                  />
                </label>
                <label className={form.box}>
                  <h2 className={form.title}>{i18n._('SubscribeInvestor.input.contactNameOrganization.title')}</h2>
                  <input
                    name='name'
                    required
                    disabled={submitting}
                    className={form.input}
                    onChange={onChageInput}
                  />
                </label>
                </>
              )}
                    
              <label className={form.box}>
                <h2 className={form.title}>{i18n._('SubscribeInvestor.input.email.title')}</h2>
                <input
                  name='email'
                  required
                  className={form.input}
                  onChange={onChageInput}
                />
              </label>
              <I18nContext.Consumer>
                {({ languageCode }) => (   
                  <input
                    name='language'
                    type='hidden'
                    required
                    value={languageCode}
                    className={form.input}
                    disabled
                  />
                )}
              </I18nContext.Consumer>
              <button className={cc([button.button, button.blue, button.normal, form.submit])} disabled={submitting}>{i18n._('SubscribeInvestor.form.action.continue')}</button>
            </form>
          </div>
        )}
        {resultOfSending === 'success' && (
          <Success />
        )}
        {resultOfSending === 'error' && (
          <Error onClick={() => setResultOfSending(null)} />
        )}
      </div>
    </Layout>
  )
}
