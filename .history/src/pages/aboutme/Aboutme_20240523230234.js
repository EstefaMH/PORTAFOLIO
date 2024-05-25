import './Aboutme.css'
import Navbar from "../../components/navbar/Navbar";
import Footer from '../../components/footer/Footer';

import github from "../../utils/img/github-icon.png";
import gmail from "../../utils/img/gmail-logo.png";
import linkedin from "../../utils/img/ln-icon.png"


function About() {
    return (
        <div className='main-container-about'>
            <Navbar />
            <section className="container-about">

                <div className='info-about'>

                    <h1 >PERFIL</h1>
                    <p className='line'></p>
                    <p>
                        Desarrolladora front-end apasionada por crear experiencias web intuitivas y atractivas.
                        Con más de 2 años de experiencia, tengo conocimiento en las tecnologías front-end más populares, incluyendo HTML5, CSS3, JavaScript, React.js
                        <br />¡Mi pasión es crear interfaces de usuario intuitivas y atractivas que brinden una experiencia de usuario excepcional!
                    </p>
                </div>
            </section>

            <section className='container-contact'>
                <h2>CONTACTO</h2>
                <p className='lc'>______________</p>


                <article className='container-contact-icons'>

                    <a target={'_blank'} href='https://github.com/EstefaMH' rel="noreferrer">
                        <div className='contact-icons'>
                            <img alt='github-icon' className='contact-icon' src={github} />
                            <p>https://github.com/EstefaMH</p>
                        </div>
                    </a>
                    <a href="mailto:estefymoncaleano@gmail.com">
                        <div className='contact-icons'>
                            <img alt='mail-icon' className='contact-icon' src={gmail} />
                            <p>estefymoncaleano@gmail.com</p>
                        </div>
                    </a>
                    <a target={'_blank'} href='www.linkedin.com/in/estefamh'>
                        <div className='contact-icons'>
                            <img alt='contact-icon' className='contact-icon' src={linkedin} />
                            <p>www.linkedin.com/in/estefamh</p>
                        </div>
                    </a>
                </article>
            </section>




            <Footer />

        </div>
    );
}

export default About;