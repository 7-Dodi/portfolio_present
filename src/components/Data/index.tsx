import hand from "../../assets/hand.svg";
import send from "../../assets/send.svg";
import "./style.css";

export const Data = () =>{
    return(
        <div className="homeDate">
            <h1 className="homeTitle">Douglas Silva
                <img className="hand" src={hand} alt="svg" />
            </h1>
            

            <h3 className="homeSubTitle">Programador full-stack</h3>
            <p className="homeDescription">
            Sou um programador criativo que mora em Missão Velha, e sou muito apaixonado e dedicado ao meu trabalho.
            </p>

            <a href="#contact" className="button button--flex">
                Diga olá
                <img src={send} alt="svg" />
            </a>
        </div>
    )
}