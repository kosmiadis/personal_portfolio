const Section = ({t, story}) => {
  return (
    <div className="section">
        <div className="section_inner_wrapper">
            <div className="year_date">
                <p>{story.year}</p>
            </div>
            <div className="text">
                <p>{story.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Section