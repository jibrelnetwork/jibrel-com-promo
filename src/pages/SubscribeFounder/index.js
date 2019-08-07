import React, { useState } from 'react'
import cc from 'classcat'
import { Form, Field } from 'react-final-form'
import { useI18n } from '/hooks/i18n'
import { I18nContext } from '/app/i18n-provider'

import { COUNTRIES } from '/constants/countries'

import Layout from '/layout'
import LanguageLink from '/components/LanguageLink'
import Success from '/components/Success'
import Error from '/components/Error'

import form from '/theme/form.css'
import button from '/theme/button.css'
import container from '/theme/container.css'
import title from '/theme/title.css'
import link from '/theme/link.css'
import style from './style.css'

export default function SubscribeFounder() {
  const i18n = useI18n()
  const [resultOfSending, setResultOfSending] = useState(null)
  function handleFormSubmit(values) {
    const data = {
      'email': values.email,
      'name': values.name,
      'fields': {
        'country': values.country,
        'user_type': 'startup',
        'company': values.company,
        'language': values.language,
      }
    }
    
    fetch('http://jibrelcom.localhost/api/subscribe', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => {
        setResultOfSending('success')
      })
      .catch(() => {
        setResultOfSending('error')
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
            <Form
              render={({
                handleSubmit,
                submitting,
              }) => (
                <form className={form.form} onSubmit={handleSubmit}>

                  <label className={form.box}>
                    <h2 className={form.title}>{i18n._('SubscribeFounder.input.organizationName.title')}</h2>
                    <Field 
                      name='company' 
                      component='input' 
                      required
                      className={form.input}
                      disabled={submitting}
                    />
                  </label>
                  <label className={form.box}>
                    <h2 className={form.title}>{i18n._('SubscribeFounder.input.fullName.title')}</h2>
                    <Field
                      name='name'
                      component='input'
                      required
                      className={form.input}
                      disabled={submitting}
                    />
                  </label>
                  <label className={form.box}>
                    <h2 className={form.title}>{i18n._('SubscribeFounder.input.countryOfResidence.title')}</h2>
                    <Field
                      name='country'
                      component='select'
                      required
                      disabled={submitting}
                      className={form.input}
                    >
                      <option>{i18n._('SubscribeFounder.input.countryOfResidence.empty')}</option>
                      {COUNTRIES.map(item => <option value={item.id} key={item.id}>{item.title}</option> )}
                    </Field>
                  </label>
                  <label className={form.box}>
                    <h2 className={form.title}>{i18n._('SubscribeFounder.input.email.title')}</h2>
                    <Field
                      name='email'
                      type='email'
                      component='input'
                      required
                      className={form.input}
                      disabled={submitting}
                    />
                  </label>
                  <I18nContext.Consumer>
                    {({ languageCode }) => (   
                      <Field
                        name='language'
                        component='input'
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
              )}
              onSubmit={handleFormSubmit}
            />
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
