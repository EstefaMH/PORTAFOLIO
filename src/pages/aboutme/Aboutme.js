import { SocialMediaModel } from "../../models/SocialMedia";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./Aboutme.css";

function About() {
  return (
    <div className="main-container-about">
      <Navbar />
      <section className="container-about">
        <div className="info-about">
          <h1>PERFIL</h1>
          <hr className="line" />
          <p>
            Desarrolladora front-end con experiencia en el desarrollo de
            aplicaciones desktop. Con conocimientos sólidos en HTML5, CSS3,
            JavaScript, React y Java. Capacidad de análisis crítico para
            interpretar los requerimientos del cliente y adaptar las mejores
            soluciones a través de un desarrollo óptimo de los aplicativos.
          </p>
        </div>
      </section>

      <section className="container-contact">
        <h2>CONTACTO</h2>
        <p className="lc">______________</p>

        <article className="container-contact-icons">
          <a
            target={"_blank"}
            href={SocialMediaModel.Github.link}
            rel="noreferrer"
          >
            <div className="contact-icons">
              <img
                alt="contact-icon"
                className="contact-icon"
                src={SocialMediaModel.Github.icon}
              />
              <p>{SocialMediaModel.Github.link}</p>
            </div>
          </a>

          <div className="contact-icons">
            <img
              alt="contact-icon"
              className="contact-icon"
              src={SocialMediaModel.Gmail.icon}
            />
            <p>{SocialMediaModel.Gmail.link}</p>
          </div>

          <a
            target={"_blank"}
            href={SocialMediaModel.Linkedin.link}
            rel="noreferrer"
          >
            <div className="contact-icons">
              <img
                alt="contact-icon"
                className="contact-icon"
                src={SocialMediaModel.Linkedin.icon}
              />
              <p>{SocialMediaModel.Linkedin.link}</p>
            </div>
          </a>
        </article>
      </section>

      <Footer />
    </div>
  );
}

export default About;
