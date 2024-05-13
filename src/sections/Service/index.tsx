import { ServiceContent } from "../../components/ServiceContent"
import "./style.css";

export const Service = () => {
    return(
        <section className="section service" id="service">
            <h2 className="sectionTitle">Serviços</h2>
            <span className="sectionSubTitle">O que eu ofereço</span>

            <div className="serviceContainer container grid">
                <ServiceContent 
                    key="pagesWeb" 
                    icon="web-grid" 
                    serviceTitle="Web Development" 
                    modalTitle="Web Development" 
                    modalDescription="Development of systems and sites for the Web, using reactive and static technologies." 
                    info={["Use of reactive and static technologies", "More than two year's experience", "UI/UX-based interface development", "Database and API integration"]}
                />
                <ServiceContent 
                    key="Ux/Ui" 
                    icon="arrow" 
                    serviceTitle="Mobile Development" 
                    modalTitle="Mobile Development" 
                    modalDescription="Development of mobile applications with database connection and support for multiple users." 
                    info={["Use of reactive and static technologies", "More than one year's experience", "UI/UX-based interface development"]}
                    />
                <ServiceContent 
                    key="visual designer" 
                    icon="edit" 
                    serviceTitle="API development" 
                    modalTitle="API development" 
                    modalDescription="API development using the REST structure, allowing access to multiple systems and integrating complex web systems." 
                    info={["Use of REST architecture", "More than two year's experience", "Integration with multiple systems", "Authentication and access authorization", "Development of polyglot APIs"]}
                />
            </div>
        </section>
    )
}