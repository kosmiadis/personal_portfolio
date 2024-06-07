import { usePopUp } from "../../../animations.js";
import { animated } from "@react-spring/web";
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";


const Project = ({t, project}) => {

  const { img_url, title, description, technologies, github_url, live_demo_url } = project;

  const { popUpStyles, api } = usePopUp();

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1
  })

  useEffect(() => {

    if(inView) {
      api.start({
        from: {
          opacity: 0,
          transform: 'scale(0)'
        },
        to: { 
            opacity: 1,
            transform: 'scale(1)'
        },
      })
    }
  }, [inView, api])

    return (
      <animated.div ref={ref} style={popUpStyles} className='project'>
        <div className="project_inner_wrapper">
          <div className="img_preview">
            <img src={img_url} alt={"Chalk59 Preview"}/>
          </div>

          <div className="project_text">
            <h2 id='title'>{title}</h2>
            <p id='description'>{description}</p>
            <p id='technologies'><b>{t('technologies')}:</b> {technologies.join(', ')}</p>  
          </div>
          
          <div className="project_actions">
              <a href={live_demo_url} target="blank">Live Preview</a>
              <a href={github_url} target="blank">Github Code</a>
          </div>
        </div>
      </animated.div>
    )
}

export default Project