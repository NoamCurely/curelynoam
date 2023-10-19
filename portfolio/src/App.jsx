import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Component/Header/Navbar';
import CardProfil from './Component/Profil/CardProfil';
import Skills from './Component/Skills/Skills';
import Footer from './Component/Social/Social';

function App() {
  return (
    <>
      <Navbar/>
      <CardProfil/>
      <Skills/>
      <Footer/>
    </>
  )
}

export default App
