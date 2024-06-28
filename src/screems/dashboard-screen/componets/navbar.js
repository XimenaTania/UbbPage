import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../../assets/imagenes/LOGO.png'

import { useAuth0 } from '@auth0/auth0-react'

import './navbar.css'
import LoginModal from "../../initial-screen/modals/login-modal";

const NavbarDashboard = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const { loginWithRedirect } = useAuth0();
    const [isLoginModalOpen, setIsLoginModalOpen, nexPage] = useState(false);

    const openLoginModal = () => {
        setIsLoginModalOpen(true);
    };

    const closeLoginModal = () => {
        setIsLoginModalOpen(false);
    };

    const nexPageModal = () => {
        nexPage(false);
    };

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={20} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>INICIO</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>IGLESIA</a>
                    </li>
                </ul>

                <button className='button' onClick={openLoginModal}>USUARIO</button>
                <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} nexPage={nexPageModal}/>
              
            </nav>
        </div>
    )
}


export default NavbarDashboard
