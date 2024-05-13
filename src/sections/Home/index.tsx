import { Social } from "../../components/Social";
import { Data } from "../../components/Data";
import scroll from "../../assets/scroll.svg";
import "./style.css";

export const Home = () => {
    return(
        <section className="home section" id="home">
            <div className="homeContainer container grid">
                <div className="homeContent grid">
                    <div className="homeSocial">
                        <Social title="Instagram" link="https://www.instagram.com/7_douglassilva" name="instagram" key="instagam"/>
                        <Social title="Github" link="https://github.com/7-Dodi" name="github-alt" key="github-alt"/>
                        <Social title="Linkedin" link="https://www.linkedin.com/in/douglas-silva-araújo-ba3336204/" name="linkedin-alt" key="linkedin-alt"/>
                    </div>

                    <div className="homeImg"></div>

                    <Data/>       
                </div>

                <div className="home-scroll">
                    <a href="#about" className="home__scroll-button button--flex">
                        <img src={scroll} alt="svg" />
                        <span className="home__scroll-name">Scroll Down</span>
                        <i className="uil uil-arrow-down home__scroll-arrow"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}