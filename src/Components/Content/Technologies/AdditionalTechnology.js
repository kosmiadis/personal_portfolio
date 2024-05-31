const AdditionalTechnology = ({add_technology}) => {
  return (
    <div className="additional_tech">
        <div className="add_tech_inner_wrapper">
            <div className="circle"></div>
            <div className="add_tech_name">
                <p id='add_tech_name'>{add_technology.name}</p>
            </div>
        </div>
    </div>
  )
}

export default AdditionalTechnology