import { useState } from "react";
import "./style.css";

interface Props {
    image?: string,
    title?: string,
    description?: string,
    info?: string[],
    link?: string
}

export const Project:React.FC<Props> = ({image, title, description, link, info}) => {
    const [toggleStateProject, setToggleStateProject] = useState(false);

    const handleSetStateProject = (value: boolean) => {
        setToggleStateProject(value);
    }
    
    return(
        <div className="portifolioProjeto">
            <img className="projetoImage" src={image} alt="Imagem do projeto"/>
            <h3 className="projetoTitle">{title}</h3>

            <span className="projetoButton" onClick={()=>handleSetStateProject(true)}>Ver mais
                <i className="uil uil-arrow-right projeto__button-icon"></i>
            </span>

            <div className={toggleStateProject === true ? "projetoModal projetoModal-active" : "projetoModal"}>
                <div className="projetoModal-content">
                    <i className="uil uil-times projetoModal-close" onClick={()=>handleSetStateProject(false)}></i>
                    <h3 className="projetoModal-title">{title}</h3>
                    <p className="projetoModel-description">{description}</p>

                    <ul className="projetoModal-projetos grid">
                        {info && info.map((infoItem, index) => (
                            <li key={index} className="projetoModal-projeto">
                                <i className="uil uil-check-circle projetoModal-icon"></i>
                                <p className="projetoModal-info">{infoItem}</p>
                            </li>
                        ))}
                        {link && (
                            <li className="projetoModal-projeto">
                                    <i className="uil uil-github-alt projetoModal-icon"></i>
                                    <p className="projetoModal-info projetoModal-link">Link do projeto:  <a href={link} target="_blank">{link}</a></p>
                            </li>
                        )}
                    </ul>
                </div>
            </div>

        </div>
    )
}