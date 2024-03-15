import '../../App.css';
import perfil from '../../assets/images/fotoPerfil.jpeg';

function Sobre() {
    return (
        <div className='bg-custom-blue items-center h-screen'>
            <div className='flex  flex-row space-x-8 justify-center py-48 items-center'>
                <div className='text-center flex flex-row items-center justify-between'>
                    <img src={perfil} className='w-60 h-60 rounded-full p-6'/>
                    <div className="max-w-xl text-left">
                        <h4 className='text-custom-light-green text-base'>Olá! Sou Alvaro Pimentel, tenho 21 anos e sou um entusiasta de programação Front-End e Mobile. Formado em Ciencia da Computaçao pelo CESUPA. Tenho uma paixão particular pelo desenvolvimento mobile e adoro explorar novas formas de criar experiências digitais inovadoras.</h4>
                        <h4 className='text-custom-light-green text-base'>Além do código, sou apaixonado por música, filosofia e corrida. A música me inspira, a filosofia amplia minha mente e a corrida mantém meu corpo em movimento e minha mente clara.</h4>
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default Sobre;
