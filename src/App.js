import './App.css';
import { useRef, useState } from 'react';
import NavBar from './components/NavBar';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';
import Footer from './components/Footer';
import Tecnologias from './components/Tecnologias';
import Contato from './components/Contato';

function App() {
  const sobreRef = useRef(null);
  const projetosRef = useRef(null);
  const contatoRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='bg-custom-blue'>
      <NavBar scrollToSection={scrollToSection} sobreRef={sobreRef} projetosRef={projetosRef} contatoRef={contatoRef}/>
      <Sobre forwardedRef={sobreRef}/>
      {/* <Tecnologias/> */}
      <Projetos forwardedRef={projetosRef}/>
      <Contato forwardedRef={contatoRef}/>
      <Footer/>
    </div>
  );
}

export default App;
