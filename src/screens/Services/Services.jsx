import React from 'react'
import Page from '../../components/Page/Page';
import Text from '../../constants/Text/Text';
import images from '../../constants/Images/images';
import './Services.css'
const Services = () => {
  return (
    <Page text={Text.services} layout='layout-secondary'
    imgContainerStyle='image-services' imgStyle='image'  
    textProp='text services-text' titleProp='services-title-size'
    buttonContainerProp='button-container-services'
numbers={<PointList />}
   />
  )
}

const PointList = () => (
<div className="bullet-point">
<ul className='bullet-list'>
  <li><img className='bullet-img' src={images.vector} alt="bullet" />Video Tutorial</li>
  <li><img className='bullet-img' src={images.vector} alt="bullet" />Skill Development</li>
  <li><img className='bullet-img' src={images.vector} alt="bullet" />Marketing Analysis</li>
</ul>
</div>
)


export default Services;