import '../../App.css';
import { useNavigate } from 'react-router';

function Footer(){
    const navigate = useNavigate();

    return(
        <footer className='Footer text-center bg-custom-blue py-8'>  
            <h4 className='text-custom-light-green'>Desenvolvido com ❤️ por Alvaro Pimentel</h4>
            {/* <p className='text-custom-light-green text-xs cursor-pointer underline mt-2' onClick={() => navigate('/politica_privacidade')}>Politica de privacidade</p> */}
        </footer>
    )
}

export default Footer;