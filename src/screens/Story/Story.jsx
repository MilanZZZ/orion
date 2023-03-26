import React from 'react'
import Page from '../../components/Page/Page';
import Text from '../../constants/Text/Text';
const Story = () => {
  return (
   <Page text={Text.story} layout='layout-secondary'
   imgContainerStyle='image-container' imgStyle='image'/>
  )
}

export default Story;