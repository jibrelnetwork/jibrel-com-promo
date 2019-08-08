
import React from 'react'
import MetaTags from 'react-meta-tags'


function MetaInfo() {
  return ( 
    <MetaTags>
      <title>Jibrel.com</title>
      <meta name='description' content='Jibrel.com Promo Page' />
      <meta property='og:title' content='Jibrel.com' />
    </MetaTags>
  )
}

export default React.memo(MetaInfo)
