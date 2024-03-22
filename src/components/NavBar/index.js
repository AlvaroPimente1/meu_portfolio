import '../../App.css';
import { FaCode } from 'react-icons/fa';

function NavBar({ scrollToSection, sobreRef, projetosRef, contatoRef }) {
    return (
        <div className='bg-custom-blue border-b-1 fixed'>
            <header className="bg-custom-blue text-white p-8">
                <div className='flex flex-row justify-around items-center'> 
                    <div className='flex items-center'>
                        <FaCode size={20} className="text-white m-2" /> 
                        <p className='text-xl'>Alvaro Pimentel</p>
                    </div>
                    <div></div>
                    <div className='flex space-x-8'> 
                        <p className='nav-item hover:text-custom-light-green cursor-pointer text-white' onClick={() => scrollToSection(sobreRef)}>Sobre</p>
                        {/* <p className='nav-item hover:text-custom-light-green cursor-pointer text-white' onClick={() => scrollToSection(sobreRef)}>Conhecimentos</p> */}
                        <p className='nav-item hover:text-custom-light-green cursor-pointer text-white' onClick={() => scrollToSection(projetosRef)}>Projetos</p>
                        <p className='nav-item hover:text-custom-light-green cursor-pointer text-white' onClick={() => scrollToSection(contatoRef)}>Contato</p>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default NavBar;
