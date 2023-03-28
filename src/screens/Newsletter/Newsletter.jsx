import React from 'react'
import Page from '../../components/Page/Page';
import Text from '../../constants/Text/Text';
import './Newsletter.css'
const Newsletter = () => {
  return (
    <Page text={Text.newsletter} layout='layout-reverse'
    imgContainerStyle='image-news' imgStyle='image'/>
  )
}

export default Newsletter;