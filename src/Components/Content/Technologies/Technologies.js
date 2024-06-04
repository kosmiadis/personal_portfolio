import Technology from "./Technology"
import AdditionalTechnology from './AdditionalTechnology';

const Technologies = ({t, technologies, additionalTechnologies}) => {

    return (
    <div className="technologies">
        
        <div className="technologies_inner_wrapper">
            <div className="technologies_heading">
                <h2>{t('technologies')}</h2>
            </div>

            <div className='technologies_container'>
                {technologies.map(technology => (
                    <Technology technology={technology} key={technology.name}/>
                ))}
            </div>
        </div>

        <div className="additional_technologies_wrapper">
            <div className="additional_technologies_heading">
                <h2>{t('additional_technologies')}</h2>
            </div>

            <div className="additional_technologies_container">
                {additionalTechnologies.map(add_tech => (
                    <AdditionalTechnology add_technology={add_tech} key={add_tech.id}/>
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default Technologies