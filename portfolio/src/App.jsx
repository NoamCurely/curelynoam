import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Component/Header/Navbar';
import CardProfil from './Component/Profil/CardProfil';
import Skills from './Component/Skills/Skills';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Social/Social';

function App() {
  return (
    <>
      <Navbar/>
      <CardProfil/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
