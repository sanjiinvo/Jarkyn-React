import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { MenuButton, List, Instagram, Telephone, Whatsapp, ArrowBarRight, XLg } from "react-bootstrap-icons";
import Logo from '../images/Logo.svg';
import Footer from './Footer';
import './Scss/Header.scss';
import LocalJob from './LocalJob';
import { Link } from "react-router-dom";

function Header() {
  const [activeLink, setActiveLink] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  const handleAnchorClick = (event) => {
    const targetId = event.target.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      event.preventDefault();
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(targetId);
    }
  };
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const ShowMob = () => {
    const MobButton = document.querySelector('.Mob-Menu-Trig');
    const MobMenu = document.querySelector('.Mob-Menu-Box');
    MobMenu.classList.toggle('show-mob-menu');
    setShowMenu(!showMenu);
  }
  const CloseMob = () => {
   
    const MobMenu = document.querySelector('.Mob-Menu-Box');
    MobMenu.classList.toggle('show-mob-menu');
    setShowMenu(!showMenu);
  }
  // useEffect(() => {
  //   const MobMenu = document.querySelector('.Mob-Menu-Box');

  //   document.addEventListener('click', (event) => {
  //     const isMenuClick = MobMenu.contains(event.target);
  //     if (!isMenuClick && MobMenu.classList.contains('show-mob-menu')) {
  //       MobMenu.classList.remove('show-mob-menu');
  //     }
  //   });
  // },[])




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
          <a
            className={`link ${activeLink === 'localjob' ? 'underlined-link' : ''}`}
            href="#localjob"
            onClick={handleAnchorClick}
          >
            Доп.Работы
          </a>


            {/* <Link className={`link ${activeLink === 'Main-Calculator' ? 'underlined-link' : ''}`} onClick={handleAnchorClick} href='localwork' to='localwork'>Частные работы</Link> */}
            

        </div>
        <div className='Mob-menu'>
          <div className='Mob-Titles'>
              <p className="title-aboutUs">
                JarkynUI - Ремонт 
            </p>
            <p className="title-aboutUs">
                квартир под ключ
            </p>
            <p className="description-aboutUs">
                У нас есть 4 пакета услуг и работ по договору
            </p>
          </div>
          <div className='Mob-Menu-Button'> 
            <List className='Mob-Menu-Trig' onClick={ShowMob}/>
          </div>
          <div className='Mob-Menu-Box'>
          <XLg className='Close-Mob' onClick={CloseMob}/>
              <div className='Mob-Menu-Top'>
              <img src={Logo} />
              <p className='Mob-Menu-Title'>JarkynUI - Ремонт<br/>квартир под ключ</p>
              </div>
              <div className='Mob-Menu-Mid'>
              <div className='Mob-Menu-Links'>
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
                      <p className={`link ${activeLink === 'Main-Calculator' ? 'underlined-link' : ''}`}>Частные работы</p>
              </div>
              </div>

              <div className='Mob-Menu-Footer'>
                  <a href="#" className="Footer-left-item">
                    <Instagram /> JarkynUI.astana
                  </a>
                  <a href="#" className="Footer-left-item">
                    <Telephone /> +7 701 089 2022
                  </a>
                  <a href="https://wa.me/77010892022?text=Меня%20интересует%20ремонт%20квартиры" className="Footer-left-item">
                    <Whatsapp /> "JarkynUI"
                  </a>
              </div>

            </div>
        </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Header;
