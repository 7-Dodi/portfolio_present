import profile from "../../assets/profile.jpg";
import CV from "../../assets/pdf/Currículo.pdf";
import file from "../../assets/files.svg";
import { Info } from "../../components/Info";
import "./style.css";

export const About = () => {
    return(
        <section className="section about" id="about">
            <h2 className="sectionTitle">Sobre mim</h2>
            <span className="sectionSubTitle">Minha introdução</span>

            <div className="aboutContainer container grid">
                <img src={profile} alt="profile" className="aboutImage"/>

                <div className="aboutData">
                    <div className="aboutInfo grid">
                        <Info key="experience" title="Experiência" subtitle="3 anos estudando" icon="award"/>
                        <Info key="projects" title="Projetos Concluídos" subtitle="80 + projetos" icon="briefcase-alt"/>
                        <Info key="stage" title="Estágio" subtitle="6 meses numa Empresa Jr." icon="support"/>
                    </div>

                    <p className="aboutDescription">
                        Sou um desenvolvedor full-stack, criando sistemas web com interface de usuário UI/UX. Sou estudante de Análise e Desenvolvimento de Sistemas (ADS), tenho alguns anos de experiência e muitos clientes estão satisfeitos com os projetos que realizei.
                    </p>

                    <a download="" href={CV} className="button button--flex">
                        Baixar Currículo  
                        <img src={file} alt="file" />
                    </a>
                </div>
            </div>
        </section>
    )
}