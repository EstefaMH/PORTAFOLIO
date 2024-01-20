import './Studies.css'
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

function Studies() {
    return (
        <div className="main-container-studies">
            <Navbar />
            <section>
                <h1 className='title'>ESTUDIOS</h1>
                <p className='line-studies'></p>
            </section>
            <section className='container-studies'>
                <article className='studies'>
                    <h4>Tecnico en sistemas de información </h4>
                    <h6>con profundizacion en desarrollo front-end </h6>
                    <p className='line'></p>
                    <p className='title-info-studies'><strong>INSTITUCIÓN </strong> </p>
                    <p className='info-studies'>Kuepa Edutech</p>
                    <p className='title-info-studies'><strong>720hrs virtuales </strong> </p>
                </article>

                <article className='studies'>
                     <h3>Ingeniería de software </h3>
                     <p className='line'></p>
                     <p className='title-info-studies'><strong>INSTITUCIÓN  </strong> </p>
                     <p className='info-studies'>Intitución universitaria UCompensar</p>
                    
                </article>

            </section>
            
            <Footer />
        </div>
    );
}

export default Studies;