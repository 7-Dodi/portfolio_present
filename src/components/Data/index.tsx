import hand from "../../assets/hand.svg";
import send from "../../assets/send.svg";
import "./style.css";

export const Data = () =>{
    return(
        <div className="homeDate">
            <h1 className="homeTitle">Douglas Silva
                <img className="hand" src={hand} alt="svg" />
            </h1>
            

            <h3 className="homeSubTitle">Programmer full-stack</h3>
            <p className="homeDescription">
                I'm a creative programmer living in Missão Velha, and I'm very passionate and dedicated to my work.
            </p>

            <a href="#contact" className="button button--flex">
                Say Hello
                <img src={send} alt="svg" />
            </a>
        </div>
    )
}