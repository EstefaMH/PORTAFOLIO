import './Home.css'
import Navbar from "../../components/navbar/Navbar";
import Footer from '../../components/footer/Footer';
import tefa from "../../utils/img/tefa_photo.png"


function Home() {
    
    return (
        <div className='main-container'>
            <Navbar />

            <section className='container-home'>
                

                <article className='info-home'>
                    <p className='info-home1'>Hola, soy Estefania Moncaleano</p>
                    <p className='info-home2'>Desarrolladora Web</p>
                    <button className='btn btn-one' onClick={handleClick()}><span>Contactame</span></button>

                </article>

                <article className='photo-home'>
                    <img src={tefa}/>
                </article>

               
            </section>

            <Footer />


        </div>
    );
}

export default Home;