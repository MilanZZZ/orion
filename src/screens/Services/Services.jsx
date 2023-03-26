import React from 'react'
import Page from '../../components/Page/Page';
import Text from '../../constants/Text/Text';
const Services = () => {
  return (
    <Page text={Text.services} layout='layout-secondary'
    imgContainerStyle='image-container' imgStyle='image'/>
  )
}

export default Services;