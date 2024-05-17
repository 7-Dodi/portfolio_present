import React, { useState, useEffect } from "react";
import "./style.css";

export const Header: React.FC = () => {
    const [activeLink, setActiveLink] = useState('home'); // Inicializa o estado com o primeiro item

    const handleNavLinkClick = (link: string) => {
        setActiveLink(link);
    };

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const header = document.querySelector("header");
        if (header) {
            if (scrollY >= 80) {
                header.classList.add("scrollHeader");
            } else {
                header.classList.remove("scrollHeader");
            }
        }

        // Verifica a posição das seções na página
        const sections = document.querySelectorAll("section");
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (scrollY >= sectionTop - 50 && scrollY < sectionTop + sectionHeight - 50) {
                if (sectionId) {
                    setActiveLink(sectionId);
                }
            }
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="navLogo">Douglas Silva<span>.</span></a>

                <div className="navMenu">
                    <ul className="navList">
                        <li className="navItem">
                            <a href="#home" className={`navLink ${activeLink === 'home' ? 'activeLink' : ''}`} onClick={() => handleNavLinkClick("home")}>
                                <i className="uil uil-estate navIcon"></i>Home
                            </a>
                        </li>
                        <li className="navItem">
                            <a href="#about" className={`navLink ${activeLink === 'about' ? 'activeLink' : ''}`} onClick={() => handleNavLinkClick("about")}>
                                <i className="uil uil-user navIcon"></i>Sobre
                            </a>
                        </li>
                        <li className="navItem">
                            <a href="#skills" className={`navLink ${activeLink === 'skills' ? 'activeLink' : ''}`} onClick={() => handleNavLinkClick("skill")}>
                                <i className="uil uil-file-alt navIcon"></i>Skills
                            </a>
                        </li>
                        <li className="navItem">
                            <a href="#service" className={`navLink ${activeLink === 'service' ? 'activeLink' : ''}`} onClick={() => handleNavLinkClick("service")}>
                                <i className="uil uil-briefcase-alt navIcon"></i>Serviços
                            </a>
                        </li>
                        <li className="navItem">
                            <a href="#portfolio" className={`navLink ${activeLink === 'portfolio' ? 'activeLink' : ''}`} onClick={() => handleNavLinkClick("portfolio")}>
                                <i className="uil uil-scenery navIcon"></i>Portfólio
                            </a>
                        </li>
                        <li className="navItem">
                            <a href="#contact" className={`navLink ${activeLink === 'contact' ? 'activeLink' : ''}`} onClick={() => handleNavLinkClick("contact")}>
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
    );
};

export default Header;
