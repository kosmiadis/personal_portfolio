import Hero from './Components/Content/Hero';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './i18n';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  
  return (
      <div className="App">
        <Navbar t={t} />
        <Hero t={t} />
        <Footer t={t} changeLanguage={changeLanguage}/>
      </div>
  );
}

export default App;
