import { useState } from "react";
import "./style.css";

export const Header = () => {
    const [activeLink, setActiveLink] = useState('home'); // Inicializa o estado com o primeiro item

    const handleNavLinkClick = (link:string) => {
        setActiveLink(link);
    };

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="navLogo">Douglas Silva<span>.</span></a>

                <div className="navMenu">
                    <ul className="navList">
                    <li className="navItem">
                        <a href="#home" className={`navLink ${activeLink === 'home' ? 'activeLink' : ''}`} onClick={()=> handleNavLinkClick("home")}>
                                <i className="uil uil-estate navIcon"></i>Home
                            </a>
                        </li>
                        <li className="navItem">
                            <a href="#about" className={`navLink ${activeLink === 'about' ? 'activeLink' : ''}`} onClick={()=> handleNavLinkClick("about")}>
                                <i className="uil uil-user navIcon"></i>Sobre
                            </a>
                        </li>
                        <li className="navItem">
                            <a href="#skills" className={`navLink ${activeLink === 'skill' ? 'activeLink' : ''}`} onClick={()=> handleNavLinkClick("skill")}>
                                <i className="uil uil-file-alt navIcon"></i>Skills
                            </a>
                        </li>
                        <li className="navItem">
                            <a href="#service" className={`navLink ${activeLink === 'service' ? 'activeLink' : ''}`} onClick={()=> handleNavLinkClick("service")}>
                                <i className="uil uil-briefcase-alt navIcon"></i>Serviços
                            </a>
                        </li>
                        <li className="navItem">
                            <a href="#portfolio" className={`navLink ${activeLink === 'portfolio' ? 'activeLink' : ''}`} onClick={()=> handleNavLinkClick("portfolio")}>
                                <i className="uil uil-scenery navIcon"></i>PortFólio
                            </a>
                        </li>
                        <li className="navItem">
                            <a href="#contact" className={`navLink ${activeLink === 'contact' ? 'activeLink' : ''}`} onClick={()=> handleNavLinkClick("contact")}>
                                <i className="uil uil-message navIcon"></i>Contatos
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times navClose"></i>
                    <div className="navToggle">
                        <i className="uil uil-apps"></i>
                    </div>
                </div>
            </nav>
        </header>
    )
}