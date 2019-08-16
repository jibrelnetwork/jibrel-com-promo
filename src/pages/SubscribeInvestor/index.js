import React, { useState } from 'react'
import cc from 'classcat'
import { useI18n } from '/hooks/i18n'
import { I18nContext } from '/app/i18n-provider'
import { sendEventGTM, sendEventGTMAccountType } from '/utils/send-gtm'

import Layout from '/layout'
import LanguageLink from '/components/LanguageLink'
import { Success, Error, UserType, Input, CountrySelect } from '/components/form'

const i_case = <svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' clipRule='evenodd' d='M11 5a3 3 0 0 0-3 3v1H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-2V8a3 3 0 0 0-3-3h-2zm3 4V8a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1h4z' /></svg>
const i_human = <svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'><path d='M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 17.667C6 14.75 8.686 13 12 13s6 1.75 6 4.667V18a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-.333z' /></svg>

import style from './style.css'
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
    user_type: ''
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

  function onChangeInput(e) {
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
    e.preventDefault()

    const data = {
      'email': fieldsValue.email,
      'name': fieldsValue.name,
      'fields': {
        'country': fieldsValue.user_type === 'investor_individual' ? fieldsValue.country : undefined,
        'user_type': fieldsValue.user_type,
        'company': fieldsValue.company,
        'language': e.target.language.value,
      }
    }
    setSubmitting(true)
    fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw new Error()
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
              <div className={form.boxd}>
                <h2 className={form.title}>{i18n._('SubscribeInvestor.input.typeOfAccount.title')}</h2>
                <div className={style.userTypeWrap}>
                  <UserType
                    onChange={onChangeTypeOfAccount}
                    value='investor_individual'
                    title={i18n._('SubscribeInvestor.input.typeOfAccount.option.individual.title')}
                    description={i18n._('SubscribeInvestor.input.typeOfAccount.option.individual.info')}
                    className={style.userType}
                    img={i_human}
                    isChecked={fieldsValue.user_type === 'investor_individual'}
                    isDisabled={submitting}
                  />
                  <UserType
                    onChange={onChangeTypeOfAccount}
                    value='investor_organization'
                    title={i18n._('SubscribeInvestor.input.typeOfAccount.option.organization.title')}
                    description={i18n._('SubscribeInvestor.input.typeOfAccount.option.organization.info')}
                    className={style.userType}
                    img={i_case}
                    isChecked={fieldsValue.user_type === 'investor_organization'}
                    isDisabled={submitting}
                  />
                </div>
              </div>
              {fieldsValue.user_type && (
                <>
                  {fieldsValue.user_type === 'investor_individual' ? (
                    <>
                      <h2 className={form.title}>{i18n._('SubscribeInvestor.AboutIndividual.title')}</h2>
                      <Input
                        name='name'
                        className={form.box}
                        isDisabled={submitting}
                        onChange={onChangeInput}
                        label={i18n._('SubscribeInvestor.input.fullName.title')}
                        required
                      />
                      <CountrySelect
                        required
                        label={i18n._('SubscribeFounder.input.countryOfResidence.title')}
                        placeholder={i18n._('SubscribeFounder.input.countryOfResidence.empty')}
                        className={form.box}
                        value={fieldsValue.country}
                        onChange={onChangeCountry}
                        isDisabled={submitting}
                      />
                    </>
                  ) : (
                    <>
                    <h2 className={form.title}>{i18n._('SubscribeInvestor.AboutOrganization.title')}</h2>
                    <Input
                      name='company'
                      className={form.box}
                      isDisabled={submitting}
                      onChange={onChangeInput}
                      label={i18n._('SubscribeInvestor.input.fullNameOrganization.title')}
                      required
                    />
                    <Input
                      name='name'
                      className={form.box}
                      isDisabled={submitting}
                      onChange={onChangeInput}
                      label={i18n._('SubscribeInvestor.input.contactNameOrganization.title')}
                      required
                    />
                    </>
                  )}
                  <Input
                    name='email'
                    type='email'
                    className={form.box}
                    isDisabled={submitting}
                    onChange={onChangeInput}
                    label={i18n._('SubscribeInvestor.input.email.title')}
                    required
                  />

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
                </>
              )}
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
