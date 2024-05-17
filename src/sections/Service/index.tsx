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
                    serviceTitle="Desenvolvimento Web" 
                    modalTitle="Desenvolvimento Web" 
                    modalDescription="Desenvolvimento de sistemas e sites para a Web, usando tecnologias reativas e estáticas" 
                    info={["Uso de tecnologias reativas e estáticas", "Mais de dois anos de experiência", "Desenvolvimento de interface baseada em UI/UX", "Integração de banco de dados e API"]}
                />
                <ServiceContent 
                    key="mobile" 
                    icon="arrow" 
                    serviceTitle="Desenvolvimento Mobile" 
                    modalTitle="Desenvolvimento Mobile" 
                    modalDescription="Desenvolvimento de aplicativos móveis com conexão a banco de dados e suporte a vários usuários" 
                    info={["Uso de tecnologias reativas e estáticas", "Mais de um ano de experiência", "Desenvolvimento de interface baseada em UI/UX"]}
                    />
                <ServiceContent 
                    key="api" 
                    icon="edit" 
                    serviceTitle="Desenvolvimento de APIs" 
                    modalTitle="Desenvolvimento de APIs" 
                    modalDescription="Desenvolvimento de API usando a estrutura REST, permitindo o acesso a vários sistemas e integrando sistemas complexos da Web" 
                    info={["Uso da arquitetura REST", "Mais de dois anos de experiência", "Integração com vários sistemas", "Autenticação e autorização de acesso", "Desenvolvimento de APIs poliglotas"]}
                />
            </div>
        </section>
    )
}