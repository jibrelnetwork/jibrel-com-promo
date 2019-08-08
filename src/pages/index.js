import React from 'react'
import { useRouteNode } from 'react-router5'
import { Helmet } from 'react-helmet'
import { useI18n } from '/hooks/i18n'
import map from 'lodash-es/map'

import { LANGUAGES } from '../data/languages'

import Home from './Home'
import SubscribeFounder from './SubscribeFounder'
import SubscribeInvestor from './SubscribeInvestor'

import ogImage from '/favicon/pic_jibrel_master.png'

const pagesAvailable = {
  Home,
  SubscribeFounder,
  SubscribeInvestor,
}

export default function Pages() {
  const i18n = useI18n()
  const { route } = useRouteNode('')

  if (!route) {
    console.error(new Error('NO_PAGE_SPECIFIED_FOR_PATH'))
    return null
  }

  const Page = pagesAvailable[route.name]

  if (!Page) {
    const error = new Error('NO_PAGE_SPECIFIED_FOR_NAME')
    error.props = {
      name: route.name,
    }
    console.error(error)
    return null
  }

  const language = LANGUAGES[route.params.lang]  

  return (
    <>
      <Helmet>
        <html lang={language.tag} dir={language.dir} />

        <meta property='og:locale' content={language.tag} />
        {map(LANGUAGES, (item) => (
          <meta property='og:locale:alternate' key={item.tag} content={item.tag} />
        ))}

        <title>{i18n._('meta.website.title')}</title>
        <meta name='description' content={i18n._('meta.website.description')} />
        <meta property='og:site_name' content='Jibrel.com' />
        <meta property='og:title' content={i18n._('meta.website.title')} />
        <meta property='og:url' content={`https://jibrel.com${route.path}`} />
        <meta property='og:description' content={i18n._('meta.website.description')} />

        <meta property='og:image' content={`https://jibrel.com${ogImage}`} />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='628' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={i18n._('meta.website.title')} />
        <meta name='twitter:description' content={i18n._('meta.website.description')} />
        <meta name='twitter:image' content={`https://jibrel.com${ogImage}`} />
      </Helmet>
      <Page />
    </>
  )
}
