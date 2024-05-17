import "./style.css";

interface Props{
    icon?: string,
    title?: string,
    data?: string,
    link?: string,
}

export const Contactcard:React.FC<Props> = ({icon, title, data, link}) => {
    return(
        <div className="contactContent-card">
        <i className={`uil uil-${icon} contactCard-icon`}></i>

            <h3 className="contactCard-title">{title}</h3>
            <span className="contactCard-data">{data}</span>

            <a href={link} className="contactButton" target="_blank">
                Write me
                <i className="bx bx-right-arrow-alt contactButton-icon"></i>
            </a>
        </div>
    )
}