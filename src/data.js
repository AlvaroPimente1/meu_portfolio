import logoBancoTijuba from './assets/images/BanCotijuba_3.png'
import logoLoveLove from './assets/images/lovetwin.png'
import logoKanye from './assets/images/logoKanye.jpeg'
import logoiot from './assets/images/logoIot.png'
import logoBook from '../src/assets/images/logo.webp'

const projetos = [
    {
        logo: logoBancoTijuba,
        nome: 'Banco-Tijuba',
        descricao: 'Um aplicativo mobile desenvolvido para o MMIB que funciona como um sistema de gestão e rede social para projetos sociais na ilha de Cotijuba feito em utilizando React Native e Firebase.',
        url:  'https://github.com/AlvaroPimente1/Banco-Tijuba'
    },

    {
        logo: logoLoveLove,
        nome: 'LoveLove',
        descricao: 'Um aplicativo mobile de rede social voltada apenas para casais onde cada casal tem sua area própria de interação. Com calendario colaborativo, gameficação de mensagens diárias e casais amigos. Feito com React Native e Firebase.',
        url:  'https://github.com/AlvaroPimente1/LoveLoveApp'
    },
    
    {
        logo: logoBook,
        nome: 'Book-Buddy',
        descricao: 'Sitema de gerenciamento de leituras, conectado na API de livros do Google que permite fazer anotações e nota para livros, em breve com gráficos de métricas do usuário. Feito com ReactJS, Tailwind e Firebase.',
        url: 'https://bookbuddy.com.br'
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

/*     {
        logo: logoKanye,
        nome: 'API Kanye',
        descricao: 'Com o intuito de treinar minhas habilidades com a biblioteca axios, uma interface que consome API de frases do Kanye West e gera diversas frases aleatórias do rapper',
        url:  'https://github.com/AlvaroPimente1/frases_kanye'
    }, */

]

export default projetos;