import { SkillData } from "../../components/SkillData";
import "./style.css";

export const Skill = () => {
    return(
        <section className="section skills" id="skills">
            <h2 className="sectionTitle">Skills</h2>
            <span className="sectionSubTitle">Meu nível tecnico</span>
        
            <div className="skillsContainer container grid">
                <div className="skillContent">
                    <h3 className="skillTitle">Frontend Developer</h3>

                    <div className="skillBox">
                        <div className="skillGroup">
                            <SkillData key="HTML" title="HTML" level="Advanced"/>
                            <SkillData key="CSS" title="CSS" level="Advanced"/>
                            <SkillData key="JavaScript" title="JavaScript" level="Advanced"/>
                            <SkillData key="React" title="React" level="Intermidiate"/>
                            <SkillData key="ReactNative" title="React Native" level="Intermidiate"/>
                            <SkillData key="Next" title="Next js" level="Basic"/>
                            <SkillData key="Sass" title="Sass" level="Basic"/>
                            <SkillData key="JSP" title="JSP" level="Basic"/>
                            <SkillData key="Lua" title="Lua" level="Basic"/>
                            <SkillData key="Git" title="Git" level="Intermidiate"/>
                        </div>
                    </div>
                </div>
                
                <div className="skillContent">
                    <h3 className="skillTitle">Backend Developer</h3>

                    <div className="skillBox">
                        <div className="skillGroup">
                            <SkillData key="C" title="C/C++" level="Intermidiate"/>
                            <SkillData key="Java" title="Java" level="Intermidiate"/>
                            <SkillData key="TypeScript" title="TypeScript" level="Intermidiate"/>
                            <SkillData key="NodeJs" title="Node Js" level="Intermidiate"/>
                            <SkillData key="Python" title="Python" level="Basic"/>
                            <SkillData key="MySql" title="MySql" level="Intermidiate"/>
                            <SkillData key="PostgreSql" title="PostgreSql" level="Intermidiate"/>
                            <SkillData key="Sql" title="Sql" level="Intermidiate"/>
                            <SkillData key="Redis" title="Redis" level="Basic"/>
                            <SkillData key="Firabase" title="Firabase" level="Basic"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}