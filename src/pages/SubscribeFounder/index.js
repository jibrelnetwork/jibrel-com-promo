import React from 'react'
import cc from 'classcat'
import { Form, Field } from 'react-final-form'
import { useI18n } from '/hooks/i18n'

import Layout from '/layout'
import LanguageLink from '/components/LanguageLink'

import form from '/theme/form.css'
import button from '/theme/button.css'
import container from '/theme/container.css'
import title from '/theme/title.css'
import link from '/theme/link.css'
import style from './style.css'



export default function SubscribeFounder() {
  const i18n = useI18n()
  function handleFormSubmit(values) {
    console.log(values)
  }
  return (
    <Layout>
      <div className={container.container}>
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
                  name='organizationName' 
                  component='input' 
                  required
                  className={form.input}
                  disabled={submitting}
                />
              </label>
              <label className={form.box}>
                <h2 className={form.title}>{i18n._('SubscribeFounder.input.fullName.title')}</h2>
                <Field
                  name='fullName'
                  component='input'
                  required
                  className={form.input}
                  disabled={submitting}
                  placeholder={i18n._('SubscribeFounder.input.fullName.placeholder')}
                />
              </label>
              <label className={form.box}>
                <h2 className={form.title}>{i18n._('SubscribeFounder.input.countryOfResidence.title')}</h2>
                <Field
                  name='countryOfResidence'
                  component='select'
                  required
                  disabled={submitting}
                  className={form.input}
                >
                  <option>{i18n._('SubscribeFounder.input.countryOfResidence.empty')}</option>
                  <option value='Moskow'>Moskow</option>
                  <option value='St. Petersburg'>St. Petersburg</option>
                </Field>
              </label>
              <label className={form.box}>
                <h2 className={form.title}>{i18n._('SubscribeFounder.input.email.title')}</h2>
                <Field
                  name='email'
                  component='input'
                  required
                  className={form.input}
                  disabled={submitting}
                  placeholder={i18n._('SubscribeFounder.input.email.placeholder')}
                />
              </label>
              <button className={cc([button.button, button.blue, button.normal, form.submit])} disabled={submitting}>{i18n._('SubscribeFounder.form.action.continue')}</button>
            </form>
          )}
          onSubmit={handleFormSubmit}
        />
      </div>
    </Layout>
  )
}
