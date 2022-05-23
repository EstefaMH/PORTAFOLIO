import { Link } from 'react-router-dom';
import './Navbar.css'
import menu from '../../utils/img/bx-menu.svg'


function Navbar() {
    return (
        <nav className='navbar container-name'>
            <div>
                <Link to="/" className="logo"><h1 className='name'>Em</h1></Link>
            </div>

            <input type="checkbox" id="toggler"></input>
            <label for="toggler"><img src={menu} /></label>

            <div className=' menu container-navbar'>

                <ul className='list'>
                    <Link to="/" className='item'>Home</Link>
                    <Link to="/aboutme" className='item'>Perfil</Link>
                    <Link to="/skills" className='item'>Habilidades</Link>
                    <Link to="/studies" className='item'>Estudios</Link>
                </ul>
            </div>

        </nav>
    );
}

export default Navbar;