import Section from "./Section"

const Storyline = ({t, storyLine}) => {
  return (
    <div className="storyline">
        {storyLine.map(story => (
            <Section t={t} story={story} key={story.id}/>            
        ))}
    </div>
  )
}

export default Storyline