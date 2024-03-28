import '../../App.css';
import { useRef, useState } from 'react';
import NavBar from '../../components/NavBar/index';
import Sobre from '../../components/Sobre/index';
import Footer from '../../components/Footer/index';
import Projetos from '../../components/Projetos/index';

function Main() {
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
      {/* <Contato forwardedRef={contatoRef}/> */}
      <Footer/>
    </div>
  );
}

export default Main;
