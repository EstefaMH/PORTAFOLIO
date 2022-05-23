import './Error404.css'
import img404 from '../../utils/img/404.png'

function Error404() {
    return (
        <div className="container-error" >
            <div className='container-img'>
                <img src={img404}/>
            </div>
            <p>Error404</p>
            <p>Pagina no encontrada</p>

        </div>
    );
}

export default Error404;