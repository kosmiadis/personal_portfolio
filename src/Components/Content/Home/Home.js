import { useSpring, animated } from '@react-spring/web'
import { useInView } from 'react-intersection-observer';
import dummyProfilePhoto from '../../../images/dummy_profile_photo.webp'
import { useEffect } from 'react';

const Home = ({t}) => {

  const { ref, inView } = useInView({
    triggerOnce: true, // Set to false to trigger every time it comes into view
    threshold: 0.3, // Adjust as needed, 0.1 means 10% of the element is in view
  });

  const [springs, api] = useSpring(() => ({
    from: { left: -100, opacity: 0 },
    to: { left: 0, opacity: 1 },
    config: { duration: 1200 }, // Adjust the duration as needed
  }));

  useEffect(() => {
    if (inView) {
      api.start({
        from: { left: -100, opacity: 0 },
        to: { left: 0, opacity: 1},
      });
    }
  }, [inView, api]);

  return (
    <div className='home'>
        
        <div className="home_inner_wrapper">
        
          <animated.div ref={ref} style={{...springs}} className="text_content">
            <h2 id='hero_heading'>{t('hero_heading')}</h2>
            <h2 id='hero_subheading'>{t('hero_subheading')}</h2>
            <p id='hero_text'>{t('hero_text')}</p>
          </animated.div>

          <animated.div ref={ref} style={{...springs}} className="me">
            <div className="photo_wrapper">
              <img src={dummyProfilePhoto} alt=''/>
            </div>
          </animated.div>

          <animated.button ref={ref} style={{...springs}} id='portfolio_btn'><span>Portfolio</span></animated.button>

        </div>

    </div>
  )
}

export default Home