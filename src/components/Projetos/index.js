import '../../App.css';
import projetos from '../../data';

function Projetos({ forwardedRef }) {

    return(
        <div ref={forwardedRef} className='bg-custom-blue h-max'>
            <div className='text-center pt-12'>
                <h1 className='text-white text-2xl md:text-3xl lg:text-4xl my-4'>Conheça alguns dos meus projetos!</h1>
                <div class='line'></div> 
            </div>
            <div className='flex flex-wrap justify-center items-center text-center gap-4 p-4'>
                {projetos.map(repo => (
                    <div key={repo.name} className='flex flex-col items-center space-y-2 p-4 h-96 w-full md:w-1/2 lg:w-1/3 bg-white/10 backdrop-blur-lg rounded-lg border border-custom-light-green shadow-lg transition-all duration-300 ease-in-out'>
                        <img src={repo.logo} className='w-32 h-32 md:w-40 md:h-40 rounded-xl'/>
                        <p className='text-xl text-white'>{repo.nome}</p>
                        <p className='text-white'>{repo.descricao}</p>
                        <a className='text-sm text-custom-light-green' href={repo.url} target='_blank' rel="noopener noreferrer">Saiba mais</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projetos;
