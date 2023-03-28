import React from 'react'
import Page from '../../components/Page/Page';
import Text from '../../constants/Text/Text';
import './Story.css'
const Story = () => {
  return (
   <Page text={Text.story} layout='layout'
   imgContainerStyle='image-story' imgStyle='image'/>
  )
}

export default Story;