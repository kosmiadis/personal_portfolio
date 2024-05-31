const Project = ({t, project}) => {

    const { img_url, title, description, technologies, github_url, live_demo_url } = project;

    return (
      <div className='project'>
        <div className="project_inner_wrapper">
          
          <div className="img_preview">
            <img src={img_url} alt={"Chalk59 Preview"} width='350px'/>
          </div>

          <div className="project_text">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{t('technologies')}: {technologies.join(', ')}</p>  
          </div>
          
          <div className="project_actions">
              <a href={live_demo_url} target="blank">Live Preview</a>
              <a href={github_url} target="blank">Github Code</a>
          </div>
        </div>
      </div>
    )
}

export default Project