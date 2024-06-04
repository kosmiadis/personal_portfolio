const Navbar = ({t}) => {

    const homeContainer = document.querySelector('.home')
    const projectsContainer = document.querySelector('.projects')
    const technologiesContainer = document.querySelector('.technologies')
    const aboutContainer = document.querySelector('.about')

    window.addEventListener('resize', e => {
        const curtain_menu = document.querySelector('.curtain_menu')
        if (window.innerWidth > 769) {
            curtain_menu.style.display = 'flex';
            curtain_menu.style.opacity = '1'
        }
        else {
            curtain_menu.style.display = 'none'
            curtain_menu.style.opacity = '0'
            
        }
    })

    const handleHamburger = () => {
        const menu = document.querySelector('.curtain_menu')
        menu.style.display = 'grid'
        setTimeout(() => {
            menu.style.opacity = '1'
        }, 200)
    }

    const handleCloseHamburger = () => {
        const menu = document.querySelector('.curtain_menu')
        menu.style.opacity = '0'
        setTimeout(() => {
            menu.style.display = 'none'
        }, 200)
    }

    const handleMenuOptionClick = (e) => {
        let location = null
        if (e.target.id === 'home') {
            location = homeContainer
        }
        else if (e.target.id === 'projects') {
            location = projectsContainer
        }
        else if (e.target.id === 'technologies') {
            location = technologiesContainer
        }
        else {
            location = aboutContainer
        }
        if (window.innerWidth < 769) {
            handleCloseHamburger()
        }
        location.scrollIntoView({behavior: 'smooth'})
    }

  return (
    <div className='navbar'>
        <div className="navbar_brand_wrapper">
            <div id='brand'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{fill: 'rgb(255,255,255)'}}><path d="M8.293 6.293 2.586 12l5.707 5.707 1.414-1.414L5.414 12l4.293-4.293zm7.414 11.414L21.414 12l-5.707-5.707-1.414 1.414L18.586 12l-4.293 4.293z"></path></svg>
                <span>VagelisKosmiadis</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{fill: 'rgb(255,255,255)'}}><path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path></svg>
            </div>
        </div>
        <div className='hamburger' onClick={handleHamburger}>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
        </div>

        <div className='curtain_menu'>
            <div className="close_hamburger" onClick={handleCloseHamburger}>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            <div className="navbar_actions_wrapper">
                <ul>
                    <li id='home' onClick={(e) => handleMenuOptionClick(e)}>{t('home')}</li>
                    <li id='projects' onClick={(e) => handleMenuOptionClick(e)}>{t('portfolio')}</li>
                    <li id='technologies' onClick={(e) => handleMenuOptionClick(e)}>{t('technologies')}</li>
                    <li id='about' onClick={(e) => handleMenuOptionClick(e)}>{t('about')}</li>
                </ul>
            </div>

            <div className="navbar_contact_wrapper">
                <button>{t('Contact')}</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar