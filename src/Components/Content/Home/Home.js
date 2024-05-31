import Hero from "./Hero"

const Home = ({t}) => {
  return (
    <div className='home'>
        <Hero t={t}/>
        <button>Portfolio</button>
    </div>
  )
}

export default Home