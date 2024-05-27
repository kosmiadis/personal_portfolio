const Navbar = ({t, changeLanguage}) => {

    window.addEventListener('resize', e => {
        const curtain_menu = document.querySelector('.curtain_menu')
        if (window.innerWidth > 769) {
            curtain_menu.style.display = 'flex';
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

  return (
    <div className='navbar'>
        <div className="navbar_brand_wrapper">
            <div id='brand'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{fill: 'rgb(0,0,0)'}}><path d="M8.293 6.293 2.586 12l5.707 5.707 1.414-1.414L5.414 12l4.293-4.293zm7.414 11.414L21.414 12l-5.707-5.707-1.414 1.414L18.586 12l-4.293 4.293z"></path></svg>
                <span>VagelisKosmiadis</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{fill: 'rgb(0,0,0)'}}><path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path></svg>
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
                    <li href='#home'>{t('Home')}</li>
                    <li href='#about'>{t('About')}</li>
                    <li href='#services'>{t('Services')}</li>
                    <li href='#portfolio'>{t('Portfolio')}</li>
                </ul>
            </div>

            <div className="navbar_contact_wrapper">
                <button>{t('Contact')}</button>
            </div>

            
        </div>

        <div className="navbar_lang_wrapper">
                <button className="change_lang_button"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" style={{fill: 'rgb(0,0,0)'}}><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z"></path></svg></button>
                
                <select onInput={(e) => changeLanguage(e.target.value)}>
                    <option value='en'>{t('navbar_lang_en')}</option>
                    <option value='gr'>{t('navbar_lang_gr')}</option>
                </select>
            </div>
    </div>
  )
}

export default Navbar