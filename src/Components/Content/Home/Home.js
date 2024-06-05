import dummyProfilePhoto from '../../../images/dummy_profile_photo.webp'
import { useFadeInLeft } from "../../../animations";
import { animated } from '@react-spring/web';

const Home = ({t}) => {
  
  const { ref, styles } = useFadeInLeft();

  return (
    <div className='home'>
        <div className="home_inner_wrapper">
          <animated.div ref={ref} style={{...styles}} className="text_content">
            <h2 id='hero_heading'>{t('hero_heading')}</h2>
            <h2 id='hero_subheading'>{t('hero_subheading')}</h2>
            <p id='hero_text'>{t('hero_text')}</p>
          </animated.div>

          <animated.div ref={ref} style={{...styles}} className="me">
            <div className="photo_wrapper">
              <img src={dummyProfilePhoto} alt=''/>
            </div>
          </animated.div>

          <animated.button ref={ref} style={{...styles}} id='portfolio_btn'><span>Portfolio</span></animated.button>
        </div>

    </div>
  )
}

export default Home