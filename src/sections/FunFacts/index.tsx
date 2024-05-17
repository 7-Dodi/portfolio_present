import "./style.css";
import funfactsProfile from "../../assets/fun-facts.png";
import { FunFactsItem } from "../../components/FunFactsItem";

export const Funfacts = () => {
    return(
        <section className="section funfacts">
            <h2 className="sectionTitle">Fatos divertidos</h2>
            <span className="sectionSubTitle">Um pouco mais sobre mim</span>

            <div className="funfactsContainer container grid">
                <img src={funfactsProfile} alt="profile" className="funFactsImage"/>
            
                <div className="funFactsData">
                    <div className="funFactsInfo  grid">
                        <FunFactsItem key="text-book" details="Sou apaixonado por leitura, amo muito ler livros."/>
                        <FunFactsItem key="text-my-books" details="Escrevi uma saga de ação e romance, com quatro livros, embora nunca a tenha publicado."/>
                        <FunFactsItem key="text-anime" details="Gosto muito de animes e da cultura japonesa em geral. Meu anime favorito é Naruto, mas também gosto de outros."/>
                        <FunFactsItem key="text-soccer" details="Como um bom brasileiro, sou apaixonado por futebol e sou torcedor do Palmeiras."/>
                        <FunFactsItem key="text-art" details="Sou apaixonado por artes e adoro fazer desenhos livres e inspirados em fatos que que gosto."/>
                        <FunFactsItem key="text-car" details="Sou bastante apaixonado por veículos e velocidade, e tenho um sonho de um dia ser colecionador de carros."/>
                    </div>
                </div>
            </div>
        </section>
    )
}