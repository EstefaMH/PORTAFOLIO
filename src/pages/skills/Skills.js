import './Skills.css'
import icon_react from '../../utils/img/react-icon.svg'
import icon_js from '../../utils/img/js-icon.png'
import icon_html from '../../utils/img/html-icon.webp'
import icon_css from '../../utils/img/css-icon.webp'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer';
import logo_cocoa from '../../utils/img/Logo- COCOA.png'

function Skills() {
    return (
        <div className='main-container-skills'>
            <Navbar />

            <section className="container-skills">
                <article className='skill'>
                    <img src={icon_react} />
                    <p className='skill-name'>React</p>
                </article>

                <article className='skill'>
                    <img src={icon_js} />
                    <p className='skill-name'>JavaScript</p>
                </article>

                <article className='skill'>
                    <img src={icon_html} />
                    <p className='skill-name'>HTML</p>
                </article>

                <article className='skill'>
                    <img src={icon_css} />
                    <p className='skill-name'>CSS</p>
                </article>

            </section>

            <h1 className='title' >PROYECTOS</h1>
            <p className='line-projects'>_________</p>

            <section className="container-projects">
                <article className='project'>
                    <div className='project-logo'>
                        <img src={logo_cocoa} />
                    </div>
                    <div className='container-info-project'>
                        <h3 className='title-project'>COCOA BAKERY</h3>
                        <p className='linee'>______________</p>
                        <div className='project-tech'>
                            <img src={icon_html}></img>
                            <img src={icon_css}></img>
                            <img src={icon_js}></img>
                            <img src={icon_react}></img>
                        </div>
                        <button className='btn btn-one'>Ver más</button>
                    </div>
                </article>

            </section>

            <Footer />
        </div>

    );
}

export default Skills;