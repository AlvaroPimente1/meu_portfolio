import '../../App.css';
import perfil from '../../assets/images/fotoPerfil.jpeg';
import ilustracao from '../../assets/images/IlustracaoDev.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Sobre() {
    return (
        <div className=' items-center h-screen flex'>
            <div className='hidden md:flex bg-custom-light-green h-screen items-center justify-center w-2/5'> 
                <img src={ilustracao} className='w-80 h-80'/>
            </div>
            <div className='flex flex-1 bg-custom-blue justify-center items-center py-48'> 
                <div className='text-center flex flex-col items-center'>
                    <img src={perfil} className='w-60 h-60 rounded-full p-6'/>
                    <div className="max-w-xl text-left">
                        <h4 className='text-custom-light-green text-base'>Olá! Sou Alvaro Pimentel, tenho 21 anos e sou um entusiasta de programação Front-End e Mobile. Formado em Ciencia da Computaçao pelo CESUPA. Tenho uma paixão particular pelo desenvolvimento mobile e adoro explorar novas formas de criar experiências digitais inovadoras.</h4>
                        <h4 className='text-custom-light-green text-base'>Além do código, sou apaixonado por música, filosofia e corrida. A música me inspira, a filosofia amplia minha mente e a corrida mantém meu corpo em movimento e minha mente clara.</h4>
                        <div className='flex flex-row mt-2'>
                            <FaLinkedin size={20} className="text-white hover:text-custom-light-green cursor-pointer"/>
                            <FaGithub size={20} className="text-white ml-2 hover:text-custom-light-green cursor-pointer"/>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default Sobre;
