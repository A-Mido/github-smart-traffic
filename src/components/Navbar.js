import React, {useState} from 'react'
import { Link } from 'react-router-dom';
//import {Button} from './Button';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    //const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);
   /* const showButton = () => {
        if (window.innerWidth <= 960)
            setButton(false);
        else
            setButton(true);
    };*/

    //window.addEventListener('resize', showButton);
    return (
        <>
          <nav className='navbar'>
              <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={handleClick}>
                    SMART TRAFFIC <i className="fas fa-angle-double-up"/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ?  'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className='nav-links' onClick={closeMenu}>
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/documents' className='nav-links' onClick={closeMenu}>
                            Documentation
                        </Link>
                    </li>                    

                </ul>
              </div>

            </nav>  
        </>
    )
}

export default Navbar;
