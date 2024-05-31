const Hero = ({t}) => {
  return (
    <div className="hero">
      <div className="hero_inner_wrapper">
        <div className="text_content">
          <h2>{t('hero_heading')}</h2>
          <h2>{t('hero_subheading')}</h2>
          <p>{t('hero_text')}</p>
        </div>
        <div className="me">
          <div className="photo_wrapper">
            <img src='' alt=''/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero