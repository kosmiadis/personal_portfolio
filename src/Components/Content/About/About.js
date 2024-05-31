import Storyline from './Storyline'

const About = ({t, storyLine}) => {
  return (
    <div className="about">
        <div className="about_inner_wrapper">
            <h2>{t('about')}</h2>
            <Storyline t={t} storyLine={storyLine}/>
        </div>
    </div>
  )
}

export default About