import { useState } from "react";
import { QualificationData } from "../../components/QualificationData";
import "./style.css";

export const Qualifications = () => {
    const [toggleQualification, setToggleQualification] = useState("education");

    const handleQualification = (value:string) => {
        setToggleQualification(value);
    }

    return(
        <section className="qualification section">
            <h2 className="sectionTitle">Qualificação</h2>
            <span className="sectionSubTitle">Minha jornada pessoal</span>

            <div className="qualificationContainer container">
                <div className="qualificationTabs">
                    <div className={toggleQualification === "education" ? "qualificationButton qualificationActive button--flex" : "qualificationButton button--flex"} onClick={()=> handleQualification("education")}>
                        <i className="uil uil-graduation-cap qualificationIcon"></i>Educação
                    </div>
                    
                    <div className={toggleQualification === "experience" ? "qualificationButton qualificationActive button--flex" : "qualificationButton button--flex"} onClick={()=> handleQualification("experience")}>
                        <i className="uil uil-briefcase-alt qualificationIcon"></i>Experiência
                    </div>
                </div>

                <div className="qualificationSections">
                    <div className={toggleQualification === "education" ? "qualificationContent qualificationContent-active" : "qualificationContent"}>
                        <QualificationData key="ADS" title="Análise e Desenvolvimento de Sistemas" subTitle="IFPB - Cajazeiras PB" data="03/2022 - present"/>
                        <QualificationData key="CursoJs" style="right" title="Curso React JS" subTitle="Hora de Codar - You Tube" data="05/2023 - 06/2023"/>
                        <QualificationData key="React" title="Curso Introdutório ao React e React Native" subTitle="IFPB - Cajazeiras PB" data="10/2023 - 10/2023"/>
                        <QualificationData key="Prisma" style="right" title="Curso Introdutório ao Prisma" subTitle="IFPB - Cajazeiras PB" data="10/2023 - 10/2023"/>
                        <QualificationData key="Neo4j" title="Curso Introdutório ao Neo4j" subTitle="IFPB - Cajazeiras PB" data="10/2023 - 10/2023"/>
                        <QualificationData key="Hackaton" style="right" title="1° Hackthon IFPB" subTitle="IFPB - Cajazeiras PB" data="10/2023 - 10/2023"/>
                    </div>

                    <div className={toggleQualification === "experience" ? "qualificationContent qualificationContent-active" : "qualificationContent"}>
                        <QualificationData key="trainne" title="Trainne na Loopis Jr" subTitle="IFPB - Cajazeiras PB" data="08/2023 - 12/2023"/>
                        <QualificationData key="consultor" style="right" title="Consultor na Loopis Jr" subTitle="IFPB - Cajazeiras PB" data="01/2024 - 04/2024"/>
                        <QualificationData key="gerente" title="Gerente de Projetos na Loopis Jr" subTitle="IFPB - Cajazeiras PB" data="03/2024 - present"/>
                    </div>
                </div>
            </div>
        </section>
    )
}