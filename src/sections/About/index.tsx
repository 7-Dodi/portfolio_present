import profile from "../../assets/profile.jpg";
import CV from "../../assets/Currículo.pdf";
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
                        I'm a full-stack developer, creating web systems with a UI/UX user interface. I'm a student studying Systems Analysis and Development (ADS), I have a few years' experience and many clients are satisfied with the projects I've completed.
                    </p>

                    <a download="" href={CV} className="button button--flex">
                        Download CV 
                        <img src={file} alt="file" />
                    </a>
                </div>
            </div>
        </section>
    )
}