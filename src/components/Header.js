import { Link } from 'react-router-dom'
import Logo from '../images/Logo.svg'


function Header () {
    return(
        <div className='header'>
            <div className='Logo'>
                <img src={Logo} alt={Logo}/>
            </div>
            <div className='Des-Menu'>
                {/* <Link className='link' to='#aboutus'>О нас </Link>
                <Link className='link' to='#bundles'>Пакеты услуг </Link>
                <Link className='link' to='#galery'>Галерея </Link>
                <Link className='link' to='#repair'>Точечный ремонт</Link>
                <Link className='link' to='#calculator'>Калькулятор</Link> */}
            </div>

            </div>
    )
}

export default Header