import React from 'react'
import Page from '../../components/Page/Page';
import Text from '../../constants/Text/Text';
import './Performance.css'
const Performance = () => {
  return (
    <Page text={Text.performance} layout='layout-secondary'
     imgContainerStyle='image-performance' imgStyle='image'/>
  )
}

// const Text1 = () => (
//     <div className="dfs"> </div>
// )
// const Text2 = () => 
//     <div className="dfa"></div>

// const Text3 = () => 
//     <div className="dfa"></div>;

export default Performance;