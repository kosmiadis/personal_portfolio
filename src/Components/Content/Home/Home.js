import dummyProfilePhoto from '../../../images/dummy_profile_photo.webp'
import { useFadeInLeft, useFadeInRight } from "../../../animations";
import { useInView } from 'react-intersection-observer';
import { animated } from '@react-spring/web';
import { useEffect } from 'react';

const Home = ({t}) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })
  
  const { useFadeInLeftStyles, api } = useFadeInLeft();

  const { useFadeInRightStyles, right_api } = useFadeInRight();

  useEffect(() => {
    if(inView) {
      api.start({
        from: { 
          x: -30, 
          opacity: 0
        },
        to: { 
          x: 0,
          opacity: 1,
        },
      })
    }
  }, [inView, api])

  useEffect(() => {
    if (inView) {
      right_api.start({
        from: { 
          x: 100, 
          opacity: 0
        },
        to: {
          x: 0,
          opacity: 1,
        }
      })
    }
  })
  return (
    <div className='home'>
        <div className="home_inner_wrapper">
          <animated.div ref={ref} style={useFadeInLeftStyles} className="text_content">
            <h2 id='hero_heading'>{t('hero_heading')}</h2>
            <h2 id='hero_subheading'>{t('hero_subheading')}</h2>
            <p id='hero_text'>{t('hero_text')}</p>
          </animated.div>

          <animated.div ref={ref} style={useFadeInRightStyles} className="me">
            <div className="photo_wrapper">
              <img src={dummyProfilePhoto} alt=''/>
            </div>
          </animated.div>

          <animated.button ref={ref} style={useFadeInLeftStyles} id='portfolio_btn'><span>Portfolio</span></animated.button>
        </div>

    </div>
  )
}

export default Home