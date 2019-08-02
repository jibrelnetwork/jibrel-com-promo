import React from 'react'

import Layout from '/layout'
import Welcome from './Welcome'
import Advantages from './Advantages'
import WhatsForYou from './WhatsForYou'
import Tagline from './Tagline'

export default function Home() {
  return (
    <Layout>
      <Welcome />
      <Advantages />
      <WhatsForYou />
      <Tagline />
    </Layout>
  )
}
