import { SkillData } from "../../components/SkillData";
import { skills } from "../../utils/skillsData";
import "./style.css";

export const Skill = () => {
  return (
    <section className="section skills" id="skills">
      <h2 className="sectionTitle">Skills</h2>
      <span className="sectionSubTitle">Meu nível tecnico</span>

      <div className="skillsContainer container grid">
        {skills.map((group) => (
          <div className="skillContent" key={group.title}>
            <h3 className="skillTitle">{group.title}</h3>

            <div className="skillBox">
              <div className="skillGroup">
                {group.items.map((skill) => (
                  <SkillData
                    key={skill.name}
                    title={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
