import '../../App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import logoBancoTijuba from '../../assets/images/BanCotijuba_3.png'
import logoLoveLove from '../../assets/images/lovetwin.png'
import logoKanye from '../../assets/images/logoKanye.jpeg'
import logoiot from '../../assets/images/logoIot.png'

function Projetos({ forwardedRef }) {
    const projetos = [
        {
            logo: logoBancoTijuba,
            nome: 'Banco-Tijuba',
            descricao: 'Um aplicativo mobile desenvolvido para o MMIB que funciona como um sistema de gestão e rede social para projetos sociais na ilha de Cotijuba feito em utilizando React Native e serviços Firebase.',
            url:  'https://github.com/AlvaroPimente1/Banco-Tijuba'
        },

        {
            logo: logoLoveLove,
            nome: 'LoveLove',
            descricao: 'Um aplicativo mobile de rede social voltada apenas para casais onde cada casal tem sua area própria de interação. Com calendario colaborativo, gameficação de mensagens diárias e casais amigos. Feito com React Native e serviços Firebase',
            url:  'https://github.com/AlvaroPimente1/LoveLoveApp'
        },

        {
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
            nome: 'API de livros',
            descricao: 'API CRUD de livros criada com C# com auxilio de entity framework conectada a banco de dados PostgreSQL',
            url:  'https://github.com/AlvaroPimente1/API_LIVROS'
        },

        {
            logo: logoiot,
            nome: 'Iot mocado',
            descricao: 'Um aplicativo mobile de simulação de gerenciar Iot (dados mocados). Feito com React Native e Firebase.',
            url:  'https://github.com/AlvaroPimente1/Ativ_Iot'
        },

        {
            logo: logoKanye,
            nome: 'API Kanye',
            descricao: 'Com o intuito de treinar minhas habilidades com a biblioteca axios, uma interface que consome API de frases do Kanye West e gera diversas frases aleatórias do rapper',
            url:  'https://github.com/AlvaroPimente1/frases_kanye'
        },

/*         {
            logo: logoKanye,
            nome: 'API Kanye',
            descricao: 'Com o intuito de treinar minhas habilidades com a biblioteca axios, uma interface que consome API de frases do Kanye West e gera diversas frases aleatórias do rapper',
            url:  'https://github.com/AlvaroPimente1/IndicadorMusica_DaftPunk'
        }, */

    ]

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
                        <p className='text-xl text-white'>{repo.nome.replace('-', ' ')}</p>
                        <p className='text-white'>{repo.descricao}</p>
                        <a className='text-sm text-custom-light-green' href={repo.url} target='_blank' rel="noopener noreferrer">Saiba mais</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projetos;
