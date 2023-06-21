import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '../images/Logo.svg';
import Footer from './Footer';
import './Scss/Header.scss';

function Header() {
  const [activeLink, setActiveLink] = useState('');

  const handleAnchorClick = (event) => {
    const targetId = event.target.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      event.preventDefault();
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(targetId);
    }
  };

  return (
    <div>
      <div className='header'>
        <div className='Logo'>
          <img src={Logo} alt={Logo} />
        </div>
        <div className='Des-Menu'>
          <a
            className={`link ${activeLink === 'aboutus' ? 'underlined-link' : ''}`}
            href="#aboutus"
            onClick={handleAnchorClick}
          >
            О нас
          </a>
          <a
            className={`link ${activeLink === 'pockets' ? 'underlined-link' : ''}`}
            href="#pockets"
            onClick={handleAnchorClick}
          >
            Пакеты услуг
          </a>
          <a
            className={`link ${activeLink === 'ourworks' ? 'underlined-link' : ''}`}
            href="#ourworks"
            onClick={handleAnchorClick}
          >
            Галерея
          </a>
          <a
            className={`link ${activeLink === 'Main-Calculator' ? 'underlined-link' : ''}`}
            href="#Main-Calculator"
            onClick={handleAnchorClick}
          >
            Калькулятор
          </a>
        </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Header;
