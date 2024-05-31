import dummyProfilePhoto from '../../../images/dummy_profile_photo.webp'

const Home = ({t}) => {
  return (
    <div className='home'>
        
        <div className="home_inner_wrapper">
        
          <div className="text_content">
            <h2 id='hero_heading'>{t('hero_heading')}</h2>
            <h2 id='hero_subheading'>{t('hero_subheading')}</h2>
            <p id='hero_text'>{t('hero_text')}</p>
          </div>

          <div className="me">
            <div className="photo_wrapper">
              <img src={dummyProfilePhoto} alt=''/>
            </div>
          </div>

          <button id='portfolio_btn'><span>Portfolio</span></button>

        </div>

    </div>
  )
}

export default Home