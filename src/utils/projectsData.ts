import guadianEye from "../assets/projects-image/mock-guardian-eye.png";
import pokeLoopis from "../assets/projects-image/mock-pokeloopis.png";
import garageMaster from "../assets/projects-image/mock-garage.png";
import chat from "../assets/projects-image/mock-chat.png";
import oneBitCoin from "../assets/projects-image/mock-oneBitCoin.png";
import asclepius from "../assets/projects-image/mock-api.png";
import apiRest from "../assets/projects-image/mock-api.png";
import book from "../assets/projects-image/mock-book-collection.png";
import space from "../assets/projects-image/mock-space-defendes.png";
import rick from "../assets/projects-image/mock-rick-morty.png";
import sonic from "../assets/projects-image/mock-sonic.png";
import asclepiusApp from "../assets/projects-image/mock-asclepius-APP.png";
import asclepiusWeb from "../assets/projects-image/mock-asclepius-WEB.png";
import bookCollection from "../assets/projects-image/mock-book-colection.png";
import bookCollectionAPP from "../assets/projects-image/mock-book-collection-APP.png";
import dietaIa from "../assets/projects-image/mock-dieta.IA.png";
import jumpFesta from "../assets/projects-image/mock-jump-festa.png";

interface Project {
    id?: number,
    image?: string,
    title?: string,
    description?: string,
    info?: string[],
    link?: string,
    category?: string[],
}

export const projectsData: Project[] = [
    {
        id: 1,
        title: "GuardianEye",
        description: "Projeto da disciplina de Banco de Dados II: Criação de um aplicativo frontend e banckend, com Node.js, Express, Mongoose, MongoDB Atlas e AuraDB",
        image: guadianEye,
        info: ["Sistema Web com front-end e back-end", "Frontend: HTML, CSS and JavaScript", "Backend: Express, JavaScript, Mongo and Neo4j", "Consumo de APIs externas (Leaflet e Mongo Charts)", "Consumo da API do próprio sistema", "Sistema poliglota (MongoDB e Neo4j)"],
        category: ["all", "web", "api"],
        link: "https://github.com/7-Dodi/GuardianEye.git"
    },
    {
        id: 2,
        title: "PokeLoopis",
        description: "Projeto que consiste em um jogo de acertos, o usuário irá receber uma dica de qual o tipo de pokémon (ou outra a sua escolha) e terá que adivinhar qual pokémon está oculto.",
        image: pokeLoopis,
        info: ["Sistema Web", "Frontend: HTML, CSS and JavaScript", "Consumo de uma API externa (Poke API)", "Sistema com gerenciamento de status"],
        category: ["all", "web"],
        link: "https://github.com/7-Dodi/PokeLoopis.git"
    },
    {
        id: 3,
        title: "GarageMaster",
        description: "Desenvolvimento de um aplicativo da Web usando Java EE, com JSP, e persistência de dados usando JDBC",
        image: garageMaster,
        info: ["Sistema Web com front-end e back-end", "Frontend: HTML, JSP, CSS and JavaScript", "Backend: Java Web, Java, PostegreSQL", "Sistema com gerenciamento de login"],
        category: ["all", "web"],
        link: "https://github.com/7-Dodi/GarageMaster.git"
    },
    {
        id: 4,
        title: "Chat_Message_App",
        description: "Desenvolvimento de um aplicativo da web com Google Authentication, React.JS e Firabase",
        image: chat,
        info: ["Sistema Web com front-end e back-end", "Frontend: React Js", "Backend: Firabase", "Sistema com gerenciamento de login com e-mail"],
        category: ["all", "web"],
        link: "https://github.com/7-Dodi/Chat_Message_App.git"
    },
    {
        id: 5,
        title: "OneBitCoin",
        description: "Sistema front-end desenvolvido com React Native",
        image: oneBitCoin,
        info: ["Aplicativo móvel", "Uso de API externa", "Codifique com o React-Native"],
        category: ["all", "app"],
        link: "https://github.com/7-Dodi/OneBitCoin.git"
    },
    {
        id: 6,
        title: "Asclepius",
        description: "Projeto de Programação Web I: Desenvolvimento de uma API Rest, com TypeScript, Node.js e Prisma, trabalhando os conceitos de CRUD, autenticação e upload de arquivos",
        image: asclepius,
        info: ["API REST desenvolvida com Prisma e Typescript", "Gerenciamento de login", "Gerenciamento de autorização e acesso", "Upload de arquivo"],
        category: ["all", "api"],
        link: "https://github.com/7-Dodi/Asclepius.git"
    },
    {
        id: 7,
        title: "Api-Rest-Sqlite",
        description: "Segunda atividade do curso de Programação Web: O projeto consiste em desenvolver uma API com Express, TypeScript, Node, Prisma e usar Sqlite como banco de dados",
        image: apiRest,
        info: ["API REST desenvolvida com Prisma e Typescript", "Gerenciamento de autorização e acesso"],
        category: ["all", "api"],
        link: "https://github.com/7-Dodi/Api-Rest-Sqlite.git"
    },
    {
        id: 8,
        title: "Book-Collection-Java",
        description: "Aplicativo de desktop feito em Java e conectado a um banco de dados relacional",
        image: book,
        info: ["Aplicação desktop desenvolvida com Java", "Uso de Java Swing para criar telas", "Uso de banco de dados para armazenar dados"],
        category: ["all", "app"],
        link: "https://github.com/7-Dodi/Book-Collection.git"
    },
    {
        id: 9,
        title: "Space_Defenders",
        description: "Jogo feito com Java, consiste em um clássico arcade de batalha espacial",
        image: space,
        info: ["Jogo desenvolvido para desktop", "Aplicação desenvolvida com Java", "Uso do Java Swing para gerar o design"],
        category: ["all", "app"],
        link: "https://github.com/7-Dodi/Space_Defenders.git"
    },
    {
        id: 10,
        title: "Rick end Morry",
        description: "Projeto realizado com o auxílio do API do Rick and Mory, além de bases estruturais em Html, Css e JavaScript.",
        image: rick,
        info: ["Jogo da web com lista de personagens", "Uso de HTML, CSS e JavaScript", "Uso de uma API externa (Rick and Mory API)"],
        category: ["all", "web"],
        link: "https://github.com/7-Dodi/Rick_and_Mory_API.git"
    },
    {
        id: 11,
        title: "Jogo-Sonic",
        description: "Jogo simples feito com HTML, CSS e Java Script. Jogo se baseia na estrutura do Jogo do Dinossauro do Google, porém apresenta o Sonic com personagem principal.",
        image: sonic,
        info: ["Jogo da web de desvio de obstáculos", "Uso de HTML, CSS e JavaScript"],
        category: ["all", "web"],
        link: "https://github.com/7-Dodi/Jogo_Sonic.git"
    },
    {
        id: 12,
        title: "Asclepius APP",
        description: "Projeto de Programação para Dispositivos Móveis: Desenvolvimento de uma APP, com TypeScript, React-Native, com ligação a uma API previamente desenvolvida no projeto de Programação para Web I.",
        image: asclepiusApp,
        info: ["Aplicação móvel desenvolvida com React-Native", "Uso de API externa", "Uso de TypeScript"],
        category: ["all", "app"],
    },
    {
        id: 13,
        title: "Site Asclepius",
        description: "O Asclepius-WEB é um sistema web desenvolvido como parte da disciplina Programação para Web 2 (PW2). Esse projeto foi criado com TypeScript e React, O objetivo deste sistema é fornecer uma interface web intuitiva para o gerenciamento de vacinação, permitindo aos usuários realizarem agendamentos, acompanharem registros e interagirem com suas informações de saúde de forma eficiente.",
        image: asclepiusWeb,
        info: ["Sistema web desenvolvido com React", "Uso de TypeScript", "Uso de API externa"],
        category: ["all", "web"],
    },
    {
        id: 14,
        title: "Book Collection",
        description: "O sistema Book Collection foi um projeto web desenvolvido para o meu Trabalho de Conclusão de Curso (TCC). O sistema Book Collection é uma rede social voltada para leitores, permitindo interação entre usuários, organização de leituras e descoberta de novas aventuras literárias.",
        image: bookCollection,
        info: ["Sistema web desenvolvido com React", "Uso de TypeScript", "Uso de API externa", "Uso de Inteligência Artificial"],
        category: ["all", "web"],
    },
    {
        id: 15,
        title: "Book Collection APP",
        description: "O sistema Book Collection foi um projeto web desenvolvido para o meu Trabalho de Conclusão de Curso (TCC). O sistema Book Collection é uma rede social voltada para leitores, permitindo interação entre usuários, organização de leituras e descoberta de novas aventuras literárias.",
        image: bookCollectionAPP,
        info: ["Aplicação móvel desenvolvida com React-Native", "Uso de TypeScript", "Uso de API externa", "Uso de Inteligência Artificial"],
        category: ["all", "app"],
    },
    {
        id: 16,
        title: "Api de Tempo Real (Book Collection)",
        description: "O sistema Book Collection foi um projeto web desenvolvido para o meu Trabalho de Conclusão de Curso (TCC). O sistema Book Collection é uma rede social voltada para leitores, permitindo interação entre usuários, organização de leituras e descoberta de novas aventuras literárias.",
        image: apiRest,
        info: ["API desenvolvida com Node.js", "Uso de TypeScript", "Uso de API externa", "Uso de Inteligência Artificial", "Uso de Web Sockets"],
        category: ["all", "api"],
    },
    {
        id: 17,
        title: "Dieta.IA",
        description: "Dieta.AI é um aplicativo móvel para a geração de dietas personalizadas usando a inteligência artificial da Google, Gemini AI. O usuário insere suas informações como nome, idade, altura, peso, sexo, nível de atividade física e objetivos, e o sistema utiliza a IA para gerar uma dieta completa, com detalhes de alimentos, horários de alimentação e suplementos sugeridos.",
        image: dietaIa,
        info: ["Aplicação móvel desenvolvida com React-Native", "Uso de TypeScript", "Uso de API externa", "Uso de Inteligência Artificial"],
        category: ["all", "app"],
        link: "https://github.com/7-Dodi/Dieta.IA.git"
    },
    {
        id: 18,
        title: "Jump Festa",
        description: "JumpFesta é um aplicativo móvel que desenvolvi para a gestão de aluguéis de brinquedos infláveis, como pula-pulas e camas elásticas, para eventos e festas. O sistema foi utilizado pelo meu tio para otimizar o gerenciamento dos seus recursos, facilitando o controle de locações e tornando o processo mais eficiente.",
        image: jumpFesta,
        info: ["Aplicação móvel desenvolvida com React-Native", "Uso de TypeScript", "Uso de API externa", "Uso de Inteligência Artificial"],
        category: ["all", "app"],
    }
];