import '../../App.css';
import axios from 'axios';
import { useState, useEffect, forwardRef } from 'react';

function Projetos(){
    const [ repos, setRepos ] = useState([]);

    useEffect(() => {
        axios.get('https://api.github.com/users/AlvaroPimente1/repos')
        .then((response) => {
            const reposFiltrados = response.data.filter(repo => {
                return repo.name.includes('Banco-Tijuba') || repo.name.includes('LoveLoveApp') || repo.name.includes('API_LIVROS');
            })
            setRepos(reposFiltrados);
        })
        .catch((error) => console.log('deu erro'))
    }, [])

    return(
        <div className='bg-custom-blue items-center h-screen'>
            <div className='flex flex-row space-x-8 justify-center items-center py-56 text-center'>
                <h1 className='text-white'>Conheça alguns dos meus projetos!</h1>
                {
                    repos.map((repo) => {
                        return(
                            <div className='bg-custom-light-green p-10 rounded-md text-center'>
                                <p className='text-custom-blue text-center'>{repo.name}</p>
                                <p className='text-custom-blue text-center'>{repo.description}</p>
                                <a className='text-sm' href={repo.html_url}target='_blank'>Saiba mais</a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Projetos;