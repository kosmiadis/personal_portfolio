import Project from "./Project"
import { useFadeInLeft } from "../../../animations";

const Projects = ({t, projects}) => {

  const { ref, styles, animated } = useFadeInLeft();

  return (
    <div className="projects">
        <animated.h2 ref={ref} style={{...styles}} id="projects_heading">{t("projects")}</animated.h2>
        <div className="projects_wrapper">
          {projects.map(project => (
              <Project t={t} project={project} key={project.id}/>
          ))}
        </div>
    </div>
  )
}

export default Projects