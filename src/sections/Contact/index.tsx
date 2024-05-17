import { Contactcard } from "../../components/ContactCard";
import "./style.css";

export const Contact = () => {
    return(
        <section className="contact section" id="contact">
            <h2 className="sectionTitle">Entre em contato</h2>
            <span className="sectionSubTitle">Me contate</span>
        
            <div className="contactContainer">
                    <h3 className="contactContent-title">Fale comigo</h3>

                    <div className="contactContent-info grid">
                        <Contactcard 
                            key="email" 
                            title="E-mail" 
                            data="Envie-me um e-mail" 
                            icon="envelope-upload" 
                            link="mailto:douglassilvaaraujo76@gmail.com"
                        />
                        
                        <Contactcard 
                            key="whatsapp" 
                            title="WhatsApp" 
                            data="Envie-me uma mensagem no WhatsApp" 
                            icon="whatsapp" 
                            link="https://wa.me/5588996409091?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20trabalhos."
                        />

                        <Contactcard 
                            key="discord" 
                            title="Discord" 
                            data="Junte-se à minha comunidade" 
                            icon="discord" 
                            link="https://discord.gg/cQ4uYGQ6"
                        />

                    </div>
            </div>
        </section>
    )
}