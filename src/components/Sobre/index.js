import React from 'react';
import '../../App.css';
import perfil from '../../assets/images/fotoPerfil.jpeg';
import perfil2 from '../../assets/images/perfil2.jpeg';
import perfil3 from '../../assets/images/perfil3.jpeg';
import perfil4 from '../../assets/images/perfil4.jpeg';
import curriculo from '../../assets/pdf/Curriculo_Alvaro.pdf';
import ilustracao from '../../assets/images/IlustracaoDev.png';
import { FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa'; 
import Carousel from '../Carrosel';

function Sobre({ forwardedRef }) {
    const images = [
        perfil4,
        perfil,
        perfil2,
        perfil3,
    ];

    return (
        <div ref={forwardedRef} className='items-center h-screen flex'>
            <div className='hidden md:flex bg-custom-light-green h-screen items-center justify-center w-2/5'> 
                <img src={ilustracao} className='w-80 h-80 animate-scaleUpDown px-4'/>
            </div>
            <div className='flex flex-1 bg-custom-blue justify-center items-center py-48 '> 
                <div className='text-center flex flex-col items-center'>
                    <div className='mt-3 p-6 flex flex-row items-center space-x-2'>
                        <Carousel images={images}/>
                    </div>
                    <div className="max-w-xl text-left m-3">
                        <h1 className='text-white overflow-hidden border-r-2 border-white whitespace-nowrap typewriter text-2xl'>
                            Olá, Sou Alvaro Pimentel
                        </h1>
                        <h4 className='text-custom-light-green text-base'>Desenvolvedor Web e Mobile formado em Ciência da Computação pelo CESUPA e Pós-Graduando em Desenvolvimento Full-Stack pela PUCRS Online. Sou apaixonado por tecnologia e por criar. No meu tempo livre gosto de ouvir <a className='nav-item' href='https://open.spotify.com/playlist/7DPzKH6I9Q4hOXdBHK1H07?si=e33a9afb44354b61' target='blank'>música</a> e me exercitar.</h4>
                        <div className='flex flex-row mt-3 gap-3'>
                                <a href='https://www.linkedin.com/in/alvaro-augusto-pimentel-567b571a3/' target='_blank'><FaLinkedin size={20} className="text-white hover:text-custom-light-green cursor-pointer"/></a>
                                <a href='https://github.com/AlvaroPimente1' target='_blank'><FaGithub size={20} className="text-white hover:text-custom-light-green cursor-pointer"/></a>
                                <a href={curriculo} className='text-white hover:text-custom-light-green text-xs nav-item' download>Baixar currículo</a>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default Sobre;
