import React from 'react';
import './Page.css';
import images from '../../constants/Images/images';

const Page = ({line, numbers,button,text, imgStyle, imgContainerStyle, layout, titleProp, textProp, buttonContainerProp, subtitleProp}) => {
  return (
    <div className={`${layout}`}>
       { text.map((text, index) =>
       <>
       <div className={`${textProp} text`}>

        <div className="top-text" key={index}>{text.topTitle}</div>
        <div className={`${titleProp} title`}>{text.title}</div>
        {line}
      <div className={`${subtitleProp} subtitle`}>{text.subtitle}</div>
      {numbers}
      <div className={`${buttonContainerProp} button-layout`}>
        <button className='orange-button'>{text.buttonText}</button>
        {button}
       </div>
      </div>
      <div className={`${imgContainerStyle}`}><img className={`${imgStyle}`} src={text.imgUrL} alt='image'/></div>
       </>
      ) }
    </div>
  )
}

export default Page