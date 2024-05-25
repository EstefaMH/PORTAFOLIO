import { Link } from 'react-router-dom';
import './Navbar.css'
import menu from '../../utils/img/bx-menu.svg'


function Navbar() {
    return (
        <nav className="navbar container-name">
            <div>
                <Link to="/" className="logo">
                    <h1 className="name">Em</h1>
                </Link>
            </div>

            <input type="checkbox" id="toggler"></input>
            <label for="toggler">
                <img alt="hamburguer-menu" src={menu} />
            </label>

            <div className=" menu container-navbar">
                <ul className="list">
                    <li>
                        <Link to="/" className="item">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/aboutme" className="item">
                            Perfil
                        </Link>
                    </li>
                    <li>
                        <Link to="/skills" className="item">
                            Habilidades
                        </Link>
                    </li>
                    <li>
                        <Link to="/studies" className="item">
                            Estudios
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;