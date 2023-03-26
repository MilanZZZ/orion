import React from 'react'
import Page from '../../components/Page/Page';
import Text from '../../constants/Text/Text';
const Newsletter = () => {
  return (
    <Page text={Text.newsletter} layout='layout-reverse'
    imgContainerStyle='image-container' imgStyle='image'/>
  )
}

export default Newsletter;