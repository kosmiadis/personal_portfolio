import { animated } from '@react-spring/web';
import { useLoadDivWidth } from "../../../animations"

const Technology = ({technology}) => {

  const givenWidth = technology.experience_perc + '%';
  const {ref, styles} = useLoadDivWidth(givenWidth)

  return (
    <div className="technology">
        <div className="technology_inner_wrapper">
            <div className="technology_text">
                <h2 id="technology_name">{technology.name}</h2>
                <p>{technology.experience_level}</p>
            </div>
            <div className="technology_visual">
                <animated.div ref={ref} style={styles} className="experience_bar"></animated.div>            
            </div>
        </div>
    </div>
  )
}

export default Technology