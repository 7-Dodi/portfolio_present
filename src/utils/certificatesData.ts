import reactCertificate from "../assets/pdf/certificado-React.pdf";
import prismaCerticate from "../assets/pdf/Certificado-prisma.pdf";
import neoCertificate from "../assets/pdf/certificado-neo4j.pdf";
import imageReact from "../assets/pdf/certificado-react.png";
import imagePrisma from "../assets/pdf/certificado-prisma.png";
import imageNeo from "../assets/pdf/certificado-neo4j.png";

interface Itens {
    id?: number,
    title?: string,
    certificate?: string,
    image?:string
}

export const Certificates: Itens [] = [
    {
        id: 1,
        title: "React Descomplicado: Da teoria à prática do mundo real",
        certificate: reactCertificate,
        image: imageReact,
    },
    {
        id: 2,
        title: "Introdução ao Prisma ORM (Objet Relational Mapping)",
        certificate: prismaCerticate,
        image: imagePrisma,
    },
    {
        id: 3,
        title: "Conhecendo o Neo4j e Graph Academy",
        certificate: neoCertificate,
        image: imageNeo,
    },
]