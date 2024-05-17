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
];