import React from 'react'
import { useRouteNode } from 'react-router5'
import { Helmet } from 'react-helmet'

import { LANGUAGES } from '../data/languages'

import Home from './Home'
import SubscribeFounder from './SubscribeFounder'
import SubscribeInvestor from './SubscribeInvestor'

const pagesAvailable = {
  Home,
  SubscribeFounder,
  SubscribeInvestor,
}

export default function Pages() {
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
      </Helmet>
      <Page />
    </>
  )
}
