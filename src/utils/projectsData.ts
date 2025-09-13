import guadianEye from "../assets/projects-image/mock-guardian-eye.png";
import asclepius from "../assets/projects-image/mock-api.png";
import space from "../assets/projects-image/mock-space-defendes.png";
import asclepiusApp from "../assets/projects-image/mock-asclepius-APP.png";
import asclepiusWeb from "../assets/projects-image/mock-asclepius-WEB.png";
import bookCollection from "../assets/projects-image/mock-book-colection.png";
import bewear from "../assets/projects-image/mock-bewear.png";
import suitePlace from "../assets/projects-image/mock-suite-place.png";
import dietaIa from "../assets/projects-image/mock-dieta.IA.png";
import novaStudio from "../assets/projects-image/novaStudio.png";

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
        title: "Asclepius",
        description: "Projeto de Programação Web I: Desenvolvimento de uma API Rest, com TypeScript, Node.js e Prisma, trabalhando os conceitos de CRUD, autenticação e upload de arquivos",
        image: asclepius,
        info: ["API REST desenvolvida com Prisma e Typescript", "Gerenciamento de login", "Gerenciamento de autorização e acesso", "Upload de arquivo"],
        category: ["all", "api"],
        link: "https://github.com/7-Dodi/Asclepius.git"
    },
    {
        id: 3,
        title: "Space_Defenders",
        description: "Jogo feito com Java, consiste em um clássico arcade de batalha espacial",
        image: space,
        info: ["Jogo desenvolvido para desktop", "Aplicação desenvolvida com Java", "Uso do Java Swing para gerar o design"],
        category: ["all", "app"],
        link: "https://github.com/7-Dodi/Space_Defenders.git"
    },
    {
        id: 4,
        title: "Asclepius APP",
        description: "Projeto de Programação para Dispositivos Móveis: Desenvolvimento de uma APP, com TypeScript, React-Native, com ligação a uma API previamente desenvolvida no projeto de Programação para Web I.",
        image: asclepiusApp,
        info: ["Aplicação móvel desenvolvida com React-Native", "Uso de API externa", "Uso de TypeScript"],
        category: ["all", "app"],
    },
    {
        id: 5,
        title: "Site Asclepius",
        description: "O Asclepius-WEB é um sistema web desenvolvido como parte da disciplina Programação para Web 2 (PW2). Esse projeto foi criado com TypeScript e React, O objetivo deste sistema é fornecer uma interface web intuitiva para o gerenciamento de vacinação, permitindo aos usuários realizarem agendamentos, acompanharem registros e interagirem com suas informações de saúde de forma eficiente.",
        image: asclepiusWeb,
        info: ["Sistema web desenvolvido com React", "Uso de TypeScript", "Uso de API externa"],
        category: ["all", "web"],
    },
    {
        id: 6,
        title: "Book Collection",
        description: "O sistema Book Collection foi um projeto web desenvolvido para o meu Trabalho de Conclusão de Curso (TCC). O sistema Book Collection é uma rede social voltada para leitores, permitindo interação entre usuários, organização de leituras e descoberta de novas aventuras literárias.",
        image: bookCollection,
        info: ["Sistema web desenvolvido com React", "Uso de TypeScript", "Uso de API externa", "Uso de Inteligência Artificial"],
        category: ["all", "web", "api"],
    },
    {
        id: 7,
        title: "BEWEAR E-commerce",
        description: "Desenvolvi o BEWEAR E-commerce como projeto de aprendizado, criando um sistema completo de e-commerce desde a definição de requisitos até a implementação. O projeto inclui cadastro de produtos, carrinho de compras e integração de pagamentos, utilizando tecnologias modernas para front-end, back-end e banco de dados.",
        image: bewear,
        info: [
            "Sistema web desenvolvido com Next.js",
            "Uso de TypeScript",
            "Integração de pagamentos com Stripe",
            "Gerenciamento de banco de dados com Drizzle e Neon",
            "Estilização com Tailwind CSS"
        ],
        category: ["all", "web"],
        link: "https://github.com/7-Dodi/Bewear.git"
    },

    {
        id: 8,
        title: "Dieta.IA",
        description: "Dieta.AI é um aplicativo móvel para a geração de dietas personalizadas usando a inteligência artificial da Google, Gemini AI. O usuário insere suas informações como nome, idade, altura, peso, sexo, nível de atividade física e objetivos, e o sistema utiliza a IA para gerar uma dieta completa, com detalhes de alimentos, horários de alimentação e suplementos sugeridos.",
        image: dietaIa,
        info: ["Aplicação móvel desenvolvida com React-Native", "Uso de TypeScript", "Uso de API externa", "Uso de Inteligência Artificial"],
        category: ["all", "app"],
        link: "https://github.com/7-Dodi/Dieta.IA.git"
    },
    {
        id: 9,
        title: "Suite Place",
        description: "Participei do desenvolvimento da Suite Place, um ecossistema digital que unia soluções de e-commerce de imóveis (B2C) e sistemas de gestão imobiliária (B2B). Contribuí para a criação de um backend robusto em nuvem com AWS, garantindo escalabilidade e segurança, além de implementar integrações essenciais para o negócio.",
        image: suitePlace,
        info: [
            "Sistema web desenvolvido com Next.js",
            "Uso de TypeScript",
            "Integração de pagamentos com Stripe",
            "Infraestrutura e serviços em AWS",
            "Modelagem de dados com Dynamoose (DynamoDB)"
        ],
        category: ["all", "web", "api"],
        link: "https://suite.place/"
    },
    {
        id: 10,
        title: "Nova Studio",
        description: "A Nova Studio é uma empresa de desenvolvimento de software que fundei com o objetivo de criar soluções inovadoras e personalizadas para nossos clientes. Nossa missão é transformar ideias em realidade, oferecendo serviços de alta qualidade em desenvolvimento web, aplicativos móveis e consultoria tecnológica.",
        image: novaStudio,
        info: ["Empresa de desenvolvimento de software", "Focada em soluções personalizadas", "Serviços de alta qualidade"],
        category: ["all", "web"],
        link: "https://novastudio.dev.br/"
    }
];