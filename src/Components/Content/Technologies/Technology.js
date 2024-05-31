const Technology = ({technology}) => {

  return (
    <div className="technology">
        <div className="technology_inner_wrapper">
            <div className="technology_text">
                <h2 id="technology_name">{technology.name}</h2>
            </div>
            <div className="technology_visual">
                <p>{technology.experience_level}</p>
                <div className="experience_bar">{technology.experience_perc}</div>
            </div>
        </div>
    </div>
  )
}

export default Technology