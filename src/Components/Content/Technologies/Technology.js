import { animated } from '@react-spring/web';
import { useLoadDivWidth } from "../../../animations"
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Technology = ({technology}) => {

  const givenWidth = technology.experience_perc + '%';
  
  const {useLoadDivWidthStyles, api} = useLoadDivWidth(givenWidth)

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.8
  })
  

  useEffect(() => {
    if (inView) {
      api.start({ from: { 
        width: '0%'
        },
        to: {
          width: givenWidth 
        },
    })
    }
  }, [inView, api, givenWidth])

  return (
    <div className="technology">
        <div className="technology_inner_wrapper">
            <div className="technology_text">
                <h2 id="technology_name">{technology.name}</h2>
                <p>{technology.experience_level}</p>
            </div>
            <div className="technology_visual">
                <animated.div ref={ref} style={useLoadDivWidthStyles} className="experience_bar"></animated.div>            
            </div>
        </div>
    </div>
  )
}

export default Technology