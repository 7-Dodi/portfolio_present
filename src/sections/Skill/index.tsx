import { SkillData } from "../../components/SkillData";
import "./style.css";

export const Skill = () => {
    return(
        <section className="section skills" id="skills">
            <h2 className="sectionTitle">Skills</h2>
            <span className="sectionSubTitle">Meu nível tecnico</span>
        
            <div className="skillsContainer container grid">
                <div className="skillContent">
                    <h3 className="skillTitle">Desenvolvimento de Frontend</h3>

                    <div className="skillBox">
                        <div className="skillGroup">
                            <SkillData key="HTML" title="HTML" level="Avançado"/>
                            <SkillData key="CSS" title="CSS" level="Avançado"/>
                            <SkillData key="JavaScript" title="JavaScript" level="Avançado"/>
                            <SkillData key="React" title="React" level="Intermediário"/>
                            <SkillData key="ReactNative" title="React Native" level="Intermediário"/>
                            <SkillData key="Angular" title="Angular" level="Básico"/>
                            <SkillData key="Vue" title="Vue" level="Básico"/>
                            <SkillData key="Tawilwind" title="Tailwind" level="Básico"/>
                            <SkillData key="Next" title="Next js" level="Básico"/>
                            <SkillData key="Sass" title="Sass" level="Básico"/>
                            <SkillData key="JSP" title="JSP" level="Básico"/>
                            <SkillData key="Lua" title="Lua" level="Básico"/>
                            <SkillData key="Git" title="Git" level="Intermediário"/>
                        </div>
                    </div>
                </div>
                
                <div className="skillContent">
                    <h3 className="skillTitle">Desenvolvimento de Backend</h3>

                    <div className="skillBox">
                        <div className="skillGroup">
                            <SkillData key="C" title="C/C++" level="Intermediário"/>
                            <SkillData key="Java" title="Java" level="Intermediário"/>
                            <SkillData key="TypeScript" title="TypeScript" level="Intermediário"/>
                            <SkillData key="NodeJs" title="Node Js" level="Intermediário"/>
                            <SkillData key="Docker" title="Docker" level="Intermediário"/>
                            <SkillData key="Prisma ORM" title="Prisma ORM" level="Intermediário"/>
                            <SkillData key="ExpressJs" title="ExpressJs" level="Intermediário"/>
                            <SkillData key="Sequelize ORM" title="Sequelize ORM" level="Intermediário"/>
                            <SkillData key="Festify" title="Festify" level="Intermediário"/>
                            <SkillData key="Nest JS" title="Nest JS" level="Básico"/>
                            <SkillData key="Python" title="Python" level="Básico"/>
                            <SkillData key="PHP" title="PHP" level="Básico"/>
                            <SkillData key="AWS" title="AWS" level="Básico"/>
                        </div>
                    </div>
                </div>

                <div className="skillContent">
                    <h3 className="skillTitle">Banco de dados</h3>

                    <div className="skillBox">
                        <div className="skillGroup">
                            <SkillData key="MongoDB" title="MongoDB" level="Intermediário"/>
                            <SkillData key="MySql" title="MySql" level="Intermediário"/>
                            <SkillData key="PostgreSql" title="PostgreSql" level="Intermediário"/>
                            <SkillData key="Sql" title="Sql" level="Intermediário"/>
                            <SkillData key="GraphQL" title="GraphQL" level="Básico"/>
                            <SkillData key="Redis" title="Redis" level="Básico"/>
                            <SkillData key="Neo4j" title="Neo4j" level="Básico"/>
                            <SkillData key="Firabase" title="Firabase" level="Básico"/>
                            <SkillData key="DynamoDB" title="DynamoDB" level="Básico"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}