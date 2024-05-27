import React from 'react'

const Hero = ({t}) => {
  return (
    <div className='hero'>
        <h2>{t('hero_heading')}</h2>
        <p>{t('hero_text')}</p>
    </div>
  )
}

export default Hero