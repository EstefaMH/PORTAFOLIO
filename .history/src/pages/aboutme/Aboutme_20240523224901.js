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
                         <br/>¡Mi pasión ... crear interfaces de usuario intuitivas y atractivas que brinden una experiencia de usuario excepcional!
                    </p>
                </div>
            </section>

            <section className='container-contact'>
                <h2>CONTACTO</h2>
                <p className='lc'>______________</p>


                <article className='container-contact-icons'>


                    <div className='contact-icons'>
                        <a target={'_blank'} href='https://github.com/EstefaMH'>
                            <img className='contact-icon' src={github} />
                        </a>
                        <p>https://github.com/EstefaMH</p>
                    </div>

                    <div className='contact-icons'>
                        <img className='contact-icon' src={gmail} />
                        <p>estefymoncaleano@gmail.com</p>
                    </div>

                    <div className='contact-icons'>
                        <a target={'_blank'} href='www.linkedin.com/in/estefanía-moncaleano-828570238'>
                            <img className='contact-icon' src={linkedin} />
                        </a>
                        <p>www.linkedin.com/in/estefanía-moncaleano</p>
                    </div>
                </article>
            </section>




            <Footer />

        </div>
    );
}

export default About;