
import React from 'react'
import { Helmet } from 'react-helmet'


function MetaInfo() {
  return ( 
    <Helmet>
      <title>Jibrel.com</title>
      <meta name='description' content='Jibrel.com Promo Page' />
      <meta property='og:title' content='Jibrel.com' />
    </Helmet>
  )
}

export default React.memo(MetaInfo)
