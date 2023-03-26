import React from 'react';
import Page from '../../components/Page/Page';
import Text from '../../constants/Text/Text';

const Home = () => {
  return (
    <Page text={Text.home} layout='layout'
    imgContainerStyle='image-container' imgStyle='image' button={<BookADemoButtom />}/>
  )
}


const BookADemoButtom = () => (
  <button className='orange-button'>Book a Demo</button>
)
export default Home;