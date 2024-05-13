import "./style.css";

interface props {
    title?: string,
    subtitle?: string,
    icon?: string,
}

export const Info:React.FC<props> = ({title, subtitle, icon}) =>{
    return(
        <div className="aboutBox">
            <i className={`bx bx-${icon} aboutIcon`}></i>
            <h3 className="aboutTitle">{title}</h3>
            <span className="aboutSubTitle">{subtitle}</span>
        </div>
    )
}