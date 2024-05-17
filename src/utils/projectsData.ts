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
        description: "Database II discipline project: Creation of a frontend and banckend application, with Node.js, Express, Mongoose, MongoDB Atlas and AuraDB.",
        image: guadianEye,
        info: ["Web system with Frontend and Backend", "Frontend: HTML, CSS and JavaScript", "Backend: Express, JavaScript, Mongo and Neo4j", "Consumption of external APIs (Leaflet end Mongo Charts)", "Consumption of the system's own API", "Polyglot system (MongoDB and Neo4j)"],
        category: ["all", "web", "api"],
        link: "https://github.com/7-Dodi/GuardianEye.git"
    },
    {
        id: 2,
        title: "PokeLoopis",
        description: "Projeto que consiste em um jogo de acertos, o usuário irá receber uma dica de qual o tipo de pokémon (ou outra a sua escolha) e terá que adivinhar qual pokémon está oculto.",
        image: pokeLoopis,
        info: ["Web system", "Frontend: HTML, CSS and JavaScript", "Consumption of external APIs (Poke API)", "System with status management"],
        category: ["all", "web"],
        link: "https://github.com/7-Dodi/PokeLoopis.git"
    },
    {
        id: 3,
        title: "GarageMaster",
        description: "Development of a web application using Java EE, with JSP, and data persistence using JDBC.",
        image: garageMaster,
        info: ["Web system with Frontend and Backend", "Frontend: HTML, JSP, CSS and JavaScript", "Backend: Java Web, Java, PostegreSQL", "System with login management"],
        category: ["all", "web"],
        link: "https://github.com/7-Dodi/GarageMaster.git"
    },
    {
        id: 4,
        title: "Chat_Message_App",
        description: "Development of a web application with Google Authentication, React.JS and Firabase",
        image: chat,
        info: ["Web system with Frontend and Backend", "Frontend: React Js", "Backend: Firabase", "System with login management with email"],
        category: ["all", "web"],
        link: "https://github.com/7-Dodi/Chat_Message_App.git"
    },
    {
        id: 5,
        title: "OneBitCoin",
        description: "Front-end system developed with React Native",
        image: oneBitCoin,
        info: ["Mobile application", "Use of external API", "Code with React-Native"],
        category: ["all", "app"],
        link: "https://github.com/7-Dodi/OneBitCoin.git"
    },
    {
        id: 6,
        title: "Asclepius",
        description: "Web Programming I project: Development of a Rest API, with TypeScript, Node.js and Prisma, working on the concepts of CRUD, Authentication and File Upload.",
        image: asclepius,
        info: ["REST API developed with Prisma and Typescript", "Login management", "Authorization and access management", "File upload"],
        category: ["all", "api"],
        link: "https://github.com/7-Dodi/Asclepius.git"
    },
    {
        id: 7,
        title: "Api-Rest-Sqlite",
        description: "Second activity in the Web Programming course: The project consists of developing an API with Express, TypeScript, Node, Prisma and using Sqlite as the database.",
        image: apiRest,
        info: ["REST API developed with Prisma and Typescript", "Authorization and access management"],
        category: ["all", "api"],
        link: "https://github.com/7-Dodi/Api-Rest-Sqlite.git"
    },
    {
        id: 8,
        title: "Book-Collection-Java",
        description: "Desktop application made in Java and connected to a relational database",
        image: book,
        info: ["Desktop application developed with Java", "Uso de Java Swing para criar telas", "Uso de banco de dados para armazenar dados"],
        category: ["all", "app"],
        link: "https://github.com/7-Dodi/Book-Collection.git"
    },
    {
        id: 9,
        title: "Space_Defenders",
        description: "Game made with Java, consists of classic space battle arcade",
        image: space,
        info: ["Game developed for desktop", "Application developed with Java", "Use of Java Swing to generate the design"],
        category: ["all", "app"],
        link: "https://github.com/7-Dodi/Space_Defenders.git"
    },
    {
        id: 10,
        title: "Rick end Morry",
        description: "Projeto realizado com o auxílio do API do Rick and Mory, além de bases estruturais em Html, Css e JavaScript.",
        image: rick,
        info: ["Character list web game", "Use of HTML, CSS and JavaScript", "Use of external API (Rick and Mory API)"],
        category: ["all", "web"],
        link: "https://github.com/7-Dodi/Rick_and_Mory_API.git"
    },
    {
        id: 11,
        title: "Jogo-Sonic",
        description: "Jogo simples feito com HTML, CSS e Java Script. Jogo se baseia na estrutura do Jogo do Dinossauro do Google, porém apresenta o Sonic com personagem principal.",
        image: sonic,
        info: ["Obstacle Deviation web game", "Use of HTML, CSS and JavaScript"],
        category: ["all", "web"],
        link: "https://github.com/7-Dodi/Jogo_Sonic.git"
    },
];