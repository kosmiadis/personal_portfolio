import { useFadeInLeft } from "../../../animations";
import { animated } from "@react-spring/web";

const Project = ({t, project}) => {

  const { img_url, title, description, technologies, github_url, live_demo_url } = project;
  const { ref, styles} = useFadeInLeft();

    return (
      <animated.div ref={ref} styles={{...styles}} className='project'>
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