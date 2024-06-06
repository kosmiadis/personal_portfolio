import Project from "./Project"
import { useFadeInLeft } from "../../../animations";
import { animated } from '@react-spring/web'
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Projects = ({t, projects}) => {

  const { useFadeInLeftStyles, api} = useFadeInLeft();

  const {ref, inView} = useInView({
    triggerOnce: false,
    threshold: 0.1
  })

  useEffect(() => {
    if (inView) {
      api.start({
        from: { 
          x: -30, 
          opacity: 0
        },
        to: { 
          x: 0, 
          opacity: 1
        },
      })
    }
  }, [inView, api])


  return (
    <div className="projects">

        <animated.h2 ref={ref} style={{...useFadeInLeftStyles}} id="projects_heading">
          {t("projects")}
        </animated.h2>

        <div ref={ref} style={{...useFadeInLeftStyles}} className="projects_wrapper">
          {projects.map(project => (
              <Project t={t} project={project} key={project.id}/>
          ))}
        </div>

    </div>
  )
}

export default Projects