import React from "react";
import "./style.css";

interface props {
    title?: string,
    link?: string,
    name?: string, 
}

export const Social: React.FC<props> = ({title, link, name}) =>{
    return(
        <div className="homeSocial" title={title}>
            <a href={link} className="homeSocial-Icon" target="_blank">
            <i className={`uil uil-${name}`}></i>
            </a>
        </div>
    )
}