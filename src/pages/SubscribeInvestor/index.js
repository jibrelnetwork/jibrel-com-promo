import React, { useState } from 'react'
import cc from 'classcat'
import { Form, Field } from 'react-final-form'
import { useI18n } from '/hooks/i18n'

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
  const [typeOfAccount, setTypeOfAccount] = useState('individual')
  const [resultOfSending, setResultOfSending] = useState(null)
  function handleFormSubmit(values) {
    setResultOfSending('success')
    console.log(values)
  }

  return (
    <Layout>
      <div className={container.container}>
        {!resultOfSending && (
          <>
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
                    <h2 className={form.title}>{i18n._('SubscribeInvestor.input.typeOfAccount.titleGroup')}</h2>
                    <label className={form.radio}>
                      <Field
                        name='account'
                        component='input'
                        type='radio'
                        value='individual'
                        required
                        className={form.radioBox}
                        disabled={submitting}
                        checked={typeOfAccount === 'individual'}
                        onChange={() => setTypeOfAccount('individual')}
                      />
                      <div className={form.radioBox}>
                        <p className={form.radioTitle}>{i18n._('SubscribeInvestor.input.typeOfAccount.option.individual.title')}</p>
                        <p className={form.radioDescription}>{i18n._('SubscribeInvestor.input.typeOfAccount.option.individual.info')}</p>
                      </div>
                    </label>            
                    <label className={form.radio}>
                      <Field
                        name='account'
                        component='input'
                        type='radio'
                        value='organization'
                        required
                        className={form.radioBox}
                        disabled={submitting}
                        checked={typeOfAccount === 'organization'}
                        onChange={() => setTypeOfAccount('organization')}
                      />
                      <div className={form.radioBox}>
                        <p className={form.radioTitle}>{i18n._('SubscribeInvestor.input.typeOfAccount.option.organization.title')}</p>
                        <p className={form.radioDescription}>{i18n._('SubscribeInvestor.input.typeOfAccount.option.organization.info')}</p>
                      </div>
                    </label>
                  </div>
                  {typeOfAccount !== 'organization' ? (
                      <>
                        <label className={form.box}>
                          <h2 className={form.title}>{i18n._('SubscribeInvestor.input.fullName.title')}</h2>
                          <Field
                            name='fullName'
                            component='input'
                            required
                            className={form.input}
                            disabled={submitting}
                            placeholder={i18n._('SubscribeInvestor.input.fullName.placeholder')}
                          />
                        </label>
                        <label className={form.box}>
                          <h2 className={form.title}>{i18n._('SubscribeInvestor.input.countryOfResidence.title')}</h2>
                          <Field
                            name='countryOfResidence'
                            component='select'
                            required
                            disabled={submitting}
                            className={form.input}
                          >
                            <option>{i18n._('SubscribeInvestor.input.countryOfResidence.empty')}</option>
                            <option value='Moskow'>Moskow</option>
                            <option value='St. Petersburg'>St. Petersburg</option>
                          </Field>
                        </label>
                      </>
                  ) : (
                      <>
                      <label className={form.box}>
                        <h2 className={form.title}>{i18n._('SubscribeInvestor.input.fullNameOrganization.title')}</h2>
                        <Field
                          name='fullNameOrganization'
                          component='input'
                          required
                          disabled={submitting}
                          className={form.input}
                        />
                      </label>
                      <label className={form.box}>
                        <h2 className={form.title}>{i18n._('SubscribeInvestor.input.contactNameOrganization.title')}</h2>
                        <Field
                          name='contactNameOrganization'
                          component='input'
                          required
                          disabled={submitting}
                          className={form.input}
                          placeholder={i18n._('SubscribeInvestor.input.fullName.placeholder')}
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
                      placeholder={i18n._('SubscribeInvestor.input.email.placeholder')}
                    />
                  </label>
                  <button className={cc([button.button, button.blue, button.normal, form.submit])} disabled={submitting}>{i18n._('SubscribeInvestor.form.action.continue')}</button>
                </form>
              )}
              onSubmit={handleFormSubmit}
            />
          </>
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
