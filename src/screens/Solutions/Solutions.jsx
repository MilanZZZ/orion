import React from 'react';
import './Solutions.css';
import images from '../../constants/Images/images';

const CardValues = [
{
  imgURL: images.headphones,
  title:'Support',
  subtitle:"It is a long established fact that a reader will be distracted by the readable content.",
},
{
  imgURL: images.sale,
  title:'Sale',
  subtitle:"It is a long established fact that a reader will be distracted by the readable content.",
},
{
  imgURL: images.experience,
  title:'Experience',
  subtitle:"It is a long established fact that a reader will be distracted by the readable content.",
}
]

const Solutions = () => {
  return (
    <div className="solutions-container" id='Solutions'>
      <div className="top-text solution-top">service</div>
      <div className="title solution-title">Various kind of service for you</div>
      <div className="cards">
        {CardValues.map((card,index)=>
        <div className="card">
          <div className="card-image"><img className={`image`} src={card.imgURL} alt='image'/></div>
          <div className="card-text">{card.title}</div>
          <div className="card-subtext">{card.subtitle}</div>
        </div>
       ) }
      </div>
    </div>
  )
}

export default Solutions;