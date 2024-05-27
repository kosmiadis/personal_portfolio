import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import './i18n';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  

  return (
      <div className="App">
        <Navbar t={t} changeLanguage={changeLanguage}/>
        <Hero t={t} />
      </div>
  );
}

export default App;
