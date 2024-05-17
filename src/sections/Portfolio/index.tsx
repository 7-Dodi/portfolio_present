import { Project } from "../../components/Project";
import "./style.css";
import { projectsData } from "../../utils/projectsData";
import { useState } from "react";

export const Portfolio = () => {
    const [selectCategory, setSelectCategory] = useState("all");

    const handleSelectCategory = (value: string) => {
        setSelectCategory(value);
    }

    const filteredProjects = projectsData.filter(project => 
        selectCategory === "all" || project.category?.includes(selectCategory)
    );

    return(
        <section className="section porfolio" id="portfolio">
            <h2 className="sectionTitle">Portfólio</h2>
            <span className="sectionSubTitle">Alguns dos meus trabalhos</span>
        
            <div className="portfolioContainer container">
                <div className="portfolioButtons">
                    <span className={selectCategory === "all" ? "portfolioButton portfolioButton-active" : "portfolioButton"} onClick={()=> handleSelectCategory("all")}>Todos</span>
                    <span className={selectCategory === "web" ? "portfolioButton portfolioButton-active" : "portfolioButton"} onClick={()=> handleSelectCategory("web")}>Web</span>
                    <span className={selectCategory === "app" ? "portfolioButton portfolioButton-active" : "portfolioButton"} onClick={()=> handleSelectCategory("app")}>App</span>
                    <span className={selectCategory === "api" ? "portfolioButton portfolioButton-active" : "portfolioButton"} onClick={()=> handleSelectCategory("api")}>Api</span>
                </div>

                <div className="porfolioProjetos grid">
                    {filteredProjects.map((project)=>(
                        <Project 
                            key={project.id}
                            image={project.image} 
                            title={project.title}
                            description={project.description}
                            info={project.info}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}