import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import Logo from "./Logo"
import '../estilos/nav/nav.css'

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function menuShow() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <header>
        <nav className="nav-bar">
          <div className="logo">
            <Logo />
          </div>

          <div className="nav-list">
            <ul>
              <li className="nav-item">
                <a href="#" className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">Parques</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Aventura</a>
              </li> 
              <li className="nav-item">
                <a href="#" className="nav-link">Sobre</a>
              </li> 
            </ul>
          </div>

          <div className="login-button">
            <button>
              <a href="#">Login</a>
            </button>
          </div>

          <div className="mobile-menu-icon">
            <button onClick={menuShow}>
              <div className="icon">
                {isMenuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
              </div>
            </button>
          </div>
        </nav>

        <div className={`mobile-menu${isMenuOpen ? ' open' : ''}`}>
        <ul>
              <li className="nav-item">
                <a href="#" className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">Parques</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Aventura</a>
              </li> 
              <li className="nav-item">
                <a href="#" className="nav-link">Sobre</a>
              </li> 
            </ul>

          <div className="login-button">
            <button>
              <a href="#">Login</a>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Nav;
