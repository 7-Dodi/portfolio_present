import React from "react";
import "./style.css";

interface Props {
    title?: string,
    level?: string,
}


export const SkillData:React.FC<Props> = ({title, level}) => {
    return(
        <div className="skillData">
            <i className="bx bx-badge-check"></i>

            <div>
                <h3 className="skillName">{title}</h3>
                <span className="skillLevel">{level}</span>
            </div>
        </div>
    )
}