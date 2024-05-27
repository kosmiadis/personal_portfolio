import React from 'react'

const Footer = ({t, changeLanguage}) => {
  return (
    <div className='footer'>
        <div className="navbar_lang_wrapper">
                <select onInput={(e) => changeLanguage(e.target.value)}>
                    <option value='en'>{t('navbar_lang_en')}</option>
                    <option value='gr'>{t('navbar_lang_gr')}</option>
                </select>
        </div>
    </div>
  )
}

export default Footer