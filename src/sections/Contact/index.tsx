import { Contactcard } from "../../components/ContactCard";
import "./style.css";

export const Contact = () => {
    return(
        <section className="contact section" id="contact">
            <h2 className="sectionTitle">Entre em contato</h2>
            <span className="sectionSubTitle">Me contate</span>
        
            <div className="contactContainer container">
                <div className="contactContent">
                    <h3 className="contactContent-title">Talk to me</h3>

                    <div className="contactContent-info">
                        <Contactcard 
                            key="email" 
                            title="E-mail" 
                            data="Send me an email" 
                            icon="envelope-upload" 
                            link="mailto:douglassilvaaraujo76@gmail.com"
                        />
                        
                        <Contactcard 
                            key="whatsapp" 
                            title="WhatsApp" 
                            data="Message me on WhatsApp" 
                            icon="whatsapp" 
                            link="https://wa.me/5588996409091?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20trabalhos."
                        />

                        <Contactcard 
                            key="discord" 
                            title="Discord" 
                            data="Join my community" 
                            icon="discord" 
                            link="https://discord.gg/cQ4uYGQ6"
                        />

                    </div>
                </div>
            </div>
        </section>
    )
}