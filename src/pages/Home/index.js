import React from 'react'

import Layout from '/layout'
import Welcome from './Welcome'
import Advantages from './Advantages'
import WhatsForYou from './WhatsForYou'
import Tagline from './Tagline'
import MetaInfo from '/components/MetaInfo'

export default function Home() {
  return (
    <Layout>
      <MetaInfo />
      <Welcome />
      <Advantages />
      <WhatsForYou />
      <Tagline />
    </Layout>
  )
}
