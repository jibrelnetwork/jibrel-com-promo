import React, { useState } from 'react'
import cc from 'classcat'
import { useI18n } from '/hooks/i18n'
import { I18nContext } from '/app/i18n-provider'
import { sendEventGTM } from '/utils/send-gtm'

import Layout from '/layout'
import LanguageLink from '/components/LanguageLink'
import { Success, Error, Input, CountrySelect } from '/components/form'

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
  })

  function changeValue(value, fieldName) {
    return {
      name: fieldName === 'name' ? value : fieldsValue.name,
      email: fieldName === 'email' ? value : fieldsValue.email,
      country: fieldName === 'country' ? value : fieldsValue.country,
      company: fieldName === 'company' ? value : fieldsValue.company,
    }
  }

  function onChangeInput(e) {
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
            <h1 className={title.title}>{i18n._('SubscribeFounder.head.title')}</h1>
            <LanguageLink routeName='SubscribeInvestor' className={link.link}>
              {i18n._('SubscribeFounder.head.goToSignUp')}
            </LanguageLink>
            <div className={style.message}>{i18n._('SubscribeFounder.head.useFounderAccount')}</div>
            <form className={form.form} onSubmit={handleFormSubmit}>
              <h2 className={form.title}>{i18n._('SubscribeFounder.About.title')}</h2>
              <Input
                name='company'
                className={form.box}
                isDisabled={submitting}
                onChange={onChangeInput}
                label={i18n._('SubscribeFounder.input.organizationName.title')}
                isRequired
              />
              <Input
                name='name'
                className={form.box}
                isDisabled={submitting}
                onChange={onChangeInput}
                label={i18n._('SubscribeFounder.input.fullName.title')}
                isRequired
              />
              <CountrySelect 
                isRequired
                label={i18n._('SubscribeFounder.input.countryOfResidence.title')}
                placeholder={i18n._('SubscribeFounder.input.countryOfResidence.empty')}
                className={form.box}
                value={fieldsValue.country}
                onChange={onChangeCountry}
                isDisabled={submitting}
              />
              <Input
                name='email'
                type='email'
                className={form.box}
                isDisabled={submitting}
                onChange={onChangeInput}
                label={i18n._('SubscribeFounder.input.email.title')}
                isRequired
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
