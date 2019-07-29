import React from 'react'

import { useI18n } from '/hooks/i18n'
import Layout from '/layout'

export default function SubscribeInvestor() {
  const i18n = useI18n()

  return (
    <Layout>
      <main>
        <h1>{i18n._('SubscribeInvestor.title')}</h1>
      </main>
    </Layout>
  )
}
