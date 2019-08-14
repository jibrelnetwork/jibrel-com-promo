import React, { useState } from 'react'
import cc from 'classcat'
import { useI18n } from '/hooks/i18n'
import { I18nContext } from '/app/i18n-provider'
import { sendEventGTM } from '/utils/send-gtm'

import COUNTRIES from '/constants/countries.json'

import Layout from '/layout'
import LanguageLink from '/components/LanguageLink'
import Success from '/components/form/Success'
import Error from '/components/form/Error'

import form from '/theme/form.css'
import button from '/theme/button.css'
import container from '/theme/container.css'
import title from '/theme/title.css'
import link from '/theme/link.css'
import style from './style.css'

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

  function onChangeCountry(e) {    
    setFieldsValue(changeValue(e.target.value, 'country'))
    sendEventGTM('lead', 'completeForm', 'chooseCountry')
  }
  function handleFormSubmit(e) {
    e.preventDefault()
    const data = {
      'email': fieldsValue.email,
      'name': fieldsValue.name,
      'fields': {
        'country': fieldsValue.country,
        'user_type': 'startup',
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
            <h1 className={title.title}>{i18n._('SubscribeFounder.head.title')}</h1>
            <LanguageLink routeName='SubscribeInvestor' className={link.link}>
              {i18n._('SubscribeFounder.head.goToSignUp')}
            </LanguageLink>
            <div className={style.message}>{i18n._('SubscribeFounder.head.useFounderAccount')}</div>
    
            <form className={form.form} onSubmit={handleFormSubmit}>

              <label className={form.box}>
                <h2 className={form.title}>{i18n._('SubscribeFounder.input.organizationName.title')}</h2>
                <input 
                  name='company' 
                  required
                  className={form.input}
                  disabled={submitting}
                  onChange={onChageInput}
                />
              </label>
              <label className={form.box}>
                <h2 className={form.title}>{i18n._('SubscribeFounder.input.fullName.title')}</h2>
                <input
                  name='name'
                  required
                  className={form.input}
                  disabled={submitting}
                  onChange={onChageInput}
                />
              </label>
              <label className={form.box}>
                <h2 className={form.title}>{i18n._('SubscribeFounder.input.countryOfResidence.title')}</h2>
                <select
                  name='country'
                  required
                  disabled={submitting}
                  className={form.input}
                  onChange={onChangeCountry}
                >
                  <option value=''>{i18n._('SubscribeFounder.input.countryOfResidence.empty')}</option>
                  {COUNTRIES.map(item => <option value={item.id} key={item.id}>{item.title}</option> )}
                </select>                    
              </label>
              <label className={form.box}>
                <h2 className={form.title}>{i18n._('SubscribeFounder.input.email.title')}</h2>
                <input
                  name='email'
                  type='email'
                  required
                  className={form.input}
                  disabled={submitting}
                  onChange={onChageInput}
                />
              </label>
              <I18nContext.Consumer>
                {({ languageCode }) => (   
                  <input
                    name='language'
                    type='hidden'
                    required
                    initialValue={languageCode}
                    className={form.input}
                    disabled
                  />
                )}
              </I18nContext.Consumer>
              <button className={cc([button.button, button.blue, button.normal, form.submit])} disabled={submitting}>{i18n._('SubscribeFounder.form.action.continue')}</button>
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
