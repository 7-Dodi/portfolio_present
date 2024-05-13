import { useState } from "react";
import "./style.css";

interface Props {
    icon?: string,
    serviceTitle?: string,
    modalTitle?: string,
    modalDescription?: string,
    info?:string[]
}

export const ServiceContent:React.FC<Props> = ({icon, serviceTitle, modalTitle, modalDescription, info}) => {
    const [toggleState, setToggleState] = useState(false);

    const handleSetToggle = (value: boolean) => {
        setToggleState(value);
    }
    
    return(
        <div className="serviceContent">
            <div>
            <i className={`uil uil-${icon} serviceIcon`}></i>
                <h3 className="serviceTitle">{serviceTitle}</h3>
            </div>

            <span className="servicesButton" onClick={()=>handleSetToggle(true)}>View More
                <i className="uil uil-arrow-right service__button-icon"></i>
            </span>

            <div className={toggleState === true ? "serviceModal active-modal" : "serviceModal"} >
                <div className="serviceModal-content">
                    <i className="uil uil-times serviceModal-close" onClick={()=>handleSetToggle(false)}></i>
                        <h3 className="serviceModal-title">{modalTitle}</h3>
                    <p className="serviceModel-description">{modalDescription}</p>

                    <ul className="serviceModal-services grid">
                        {info && info.map((infoItem, index) => (
                            <li key={index} className="serviceModal-service">
                                <i className="uil uil-check-circle serviceModal-icon"></i>
                                <p className="serviceModal-info">{infoItem}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}