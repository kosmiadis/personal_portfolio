import Project from "./Project"

const Projects = ({t, projects}) => {
    
  return (
    <div className="projects">
        <h2>{t("projects")}</h2>
        {projects.map(project => (
            <Project t={t} project={project} key={project.id}/>
        ))}
    </div>
  )
}

export default Projects