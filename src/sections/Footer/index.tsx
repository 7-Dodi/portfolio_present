import "./style.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="conatinerFooter container">
        <h1 className="footerTitle">Douglas Silva.</h1>

        <ul className="footerList">
          <li>
            <a href="#about" className="footerLink">
              Sobre mim
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footerLink">
              Projetos
            </a>
          </li>
          <li>
            <a href="#certificate" className="footerLink">
              Certificados
            </a>
          </li>
        </ul>

        <div className="footerSocial">
          <div title="Instagram">
            <a
              href="https://www.instagram.com/7_dood.dev"
              className="homeSocial-Icon"
              target="_blank"
            >
              <i className="uil uil-instagram-alt footerSocial-icon"></i>
            </a>
          </div>

          <div title="Github">
            <a
              href="https://github.com/7-Dodi"
              className="homeSocial-Icon"
              target="_blank"
            >
              <i className="uil uil-github footerSocial-icon"></i>
            </a>
          </div>

          <div title="Linkedin">
            <a
              href="https://www.linkedin.com/in/douglas-silva-araújo-ba3336204/"
              className="homeSocial-Icon"
              target="_blank"
            >
              <i className="uil uil-linkedin footerSocial-icon"></i>
            </a>
          </div>
        </div>

        <span className="footer-copy">
          &#169; Douglas Silva. All rigths reserved.
        </span>
      </div>
    </footer>
  );
};
