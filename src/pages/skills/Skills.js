import { LanguagesModel } from "../../models/Languages";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Project from "../../components/project/project";
import imgProject from "../../utils/img/Logo- COCOA.png";

import "./Skills.css";

function Skills() {
  return (
    <div className="main-container-skills">
      <Navbar />

      <section className="container-skills">
        <article className="skill">
          <img src={LanguagesModel.React} alt="react" />
          <p className="skill-name">React</p>
        </article>

        <article className="skill">
          <img src={LanguagesModel.JavaScript} alt="javaScript" />
          <p className="skill-name">JavaScript</p>
        </article>

        <article className="skill">
          <img src={LanguagesModel.HTML} alt="HTML" />
          <p className="skill-name">HTML</p>
        </article>

        <article className="skill">
          <img src={LanguagesModel.CSS} alt="CSS" />
          <p className="skill-name">CSS</p>
        </article>
      </section>

      <h1 className="title">PROYECTOS</h1>
      <p className="line-projects">_________</p>
      <Project
        languages={[
          LanguagesModel.CSS,
          LanguagesModel.HTML,
          LanguagesModel.JavaScript,
          LanguagesModel.React,
        ]}
        urlProject="https://arabesco-627.web.app/"
        srcLogo={imgProject}
      />

      <Footer />
    </div>
  );
}

export default Skills;
