import Project from "./Project"
import { useFadeInLeft } from "../../../animations";
import { animated } from '@react-spring/web'

const Projects = ({t, projects}) => {

  const { ref, styles} = useFadeInLeft();

  return (
    <div className="projects">
        <animated.h2 ref={ref} style={{...styles}} id="projects_heading">
          {t("projects")}
        </animated.h2>
        <animated.div ref={ref} style={{...styles}} className="projects_wrapper">
          {projects.map(project => (
              <Project t={t} project={project} key={project.id}/>
          ))}
        </animated.div>
    </div>
  )
}

export default Projects