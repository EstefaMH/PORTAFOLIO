import PropTypes from "prop-types";

function Project({ languages = [] , urlProject, srcLogo }) {

  return (
    <section className="container-projects">
      <article className="project">
        <div className="project-logo">
          <img alt="logoCocoa" src={srcLogo} />
        </div>
        <div className="container-info-project">
          <h3 className="title-project">COCOA BAKERY</h3>
          <p className="linee">______________</p>
          <div className="project-tech">
            {languages.map((icon, i) => (
              <img key={i} alt="icon" src={icon} />
            ))}
          </div>
          <a href={urlProject}>
            <button className="btn btn-one">Ver más</button>
          </a>
        </div>
      </article>
    </section>
  );
}

Project.propTypes = {
  languages: PropTypes.object,
  urlProject: PropTypes.string,
  srcLogo: PropTypes.string,
};

export default Project;
