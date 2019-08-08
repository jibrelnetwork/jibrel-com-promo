import React, { useState } from 'react'
import cc from 'classcat'
import { Form, Field } from 'react-final-form'
import { useI18n } from '/hooks/i18n'
import { I18nContext } from '/app/i18n-provider'

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
  const [typeOfAccount, setTypeOfAccount] = useState('investor_individual')
  const [resultOfSending, setResultOfSending] = useState(null)
  function handleFormSubmit(values) {
    const data = {
      'email': values.email,
      'name': values.name,
      'fields': {
        'country': typeOfAccount === 'investor_individual' ? values.country : undefined,
        'user_type': values.user_type,
        'company': values.company,
        'language': values.language,
      }
    }
    fetch('/api/subscribe', {
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
            <h1 className={title.title}>{i18n._('SubscribeInvestor.head.title')}</h1>
            <LanguageLink routeName='SubscribeFounder' className={link.link}>
              {i18n._('SubscribeInvestor.head.goToSignUp')}
            </LanguageLink>
            <Form
              render={({
                handleSubmit,
                submitting,
              }) => (
                <form className={form.form} onSubmit={handleSubmit}>
                  <div className={form.box}>
                    <h2 className={form.title}>{i18n._('SubscribeInvestor.input.typeOfAccount.title')}</h2>
                    <label className={form.radio}>
                      <Field
                        name='user_type'
                        component='input'
                        type='radio'
                        initialValue='investor_individual'
                        required
                        disabled={submitting}
                        checked={typeOfAccount === 'investor_individual'}
                        onChange={() => setTypeOfAccount('investor_individual')}
                      />
                      <div className={form.radioBox}>
                        <p className={form.radioTitle}>{i18n._('SubscribeInvestor.input.typeOfAccount.option.individual.title')}</p>
                        <p className={form.radioDescription}>{i18n._('SubscribeInvestor.input.typeOfAccount.option.individual.info')}</p>
                      </div>
                    </label>            
                    <label className={form.radio}>
                      <Field
                        name='user_type'
                        component='input'
                        type='radio'
                        initialValue='investor_organization'
                        required
                        disabled={submitting}
                        checked={typeOfAccount === 'investor_organization'}
                        onChange={() => setTypeOfAccount('investor_organization')}
                      />
                      <div className={form.radioBox}>
                        <p className={form.radioTitle}>{i18n._('SubscribeInvestor.input.typeOfAccount.option.organization.title')}</p>
                        <p className={form.radioDescription}>{i18n._('SubscribeInvestor.input.typeOfAccount.option.organization.info')}</p>
                      </div>
                    </label>
                  </div>
                  {typeOfAccount === 'investor_individual' ? (
                      <>
                        <label className={form.box}>
                          <h2 className={form.title}>{i18n._('SubscribeInvestor.input.fullName.title')}</h2>
                          <Field
                            name='name'
                            component='input'
                            required
                            className={form.input}
                            disabled={submitting}
                          />
                        </label>
                        <label className={form.box}>
                          <h2 className={form.title}>{i18n._('SubscribeInvestor.input.countryOfResidence.title')}</h2>
                          <Field
                            name='country'
                            component='select'
                            required
                            disabled={submitting}
                            className={form.input}
                          >
                            <option>{i18n._('SubscribeInvestor.input.countryOfResidence.empty')}</option>
                            {COUNTRIES.map(item => <option value={item.id} key={item.id}>{item.title}</option> )}
                          </Field>
                        </label>
                      </>
                  ) : (
                      <>
                      <label className={form.box}>
                        <h2 className={form.title}>{i18n._('SubscribeInvestor.input.fullNameOrganization.title')}</h2>
                        <Field
                          name='company'
                          component='input'
                          required
                          disabled={submitting}
                          className={form.input}
                        />
                      </label>
                      <label className={form.box}>
                        <h2 className={form.title}>{i18n._('SubscribeInvestor.input.contactNameOrganization.title')}</h2>
                        <Field
                          name='name'
                          component='input'
                          required
                          disabled={submitting}
                          className={form.input}
                        />
                      </label>
                      </>
                  )}
                    
                  <label className={form.box}>
                    <h2 className={form.title}>{i18n._('SubscribeInvestor.input.email.title')}</h2>
                    <Field
                      name='email'
                      component='input'
                      required
                      className={form.input}
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
                  <button className={cc([button.button, button.blue, button.normal, form.submit])} disabled={submitting}>{i18n._('SubscribeInvestor.form.action.continue')}</button>
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
