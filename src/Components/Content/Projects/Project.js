import { useSpring, animated } from "@react-spring/web";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


const Project = ({t, project}) => {

    const { img_url, title, description, technologies, github_url, live_demo_url } = project;

  const {ref, inView} = useInView({
    triggerOnce: false,
    threshold: 0.1
  })

  const [fadeIn, api] = useSpring(() => ({
    from: {opacity: 0},
    to: {opacity: 1}
  }))

  useEffect(() => {
    if(inView) {
      api.start({
        from: {opacity: 0},
        to: {opacity: 1}
      })
    }
  }, [inView, api])

    return (
      <animated.div styles={{...fadeIn}} ref={ref} className='project'>
        <div className="project_inner_wrapper">
          
          <div className="img_preview">
            <img src={img_url} alt={"Chalk59 Preview"} width='350px'/>
          </div>

          <div className="project_text">
            <h2>{title}</h2>
            <p id='description'>{description}</p>
            <p id='technologies'>{t('technologies')}: {technologies.join(', ')}</p>  
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