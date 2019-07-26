import React from 'react'
import { useI18n } from './hooks/i18n'
import Layout from './layout/layout'

const App = () => {
  const i18n = useI18n()

  return (
    <Layout>
      <h1>{i18n._('Main.title')}</h1>
    </Layout>
  )
}

export default App
