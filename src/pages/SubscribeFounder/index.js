import React from 'react'

import { useI18n } from '/hooks/i18n'
import Layout from '/layout'

export default function SubscribeFounder() {
  const i18n = useI18n()

  return (
    <Layout>
      <main>
        <h1>{i18n._('SubscribeFounder.title')}</h1>
      </main>
    </Layout>
  )
}
