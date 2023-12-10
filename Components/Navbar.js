import React from 'react';
import useData from '../Hooks/useData';
import avatarOfMe from '@/public/images/avatarMe.png';
import iconMenuClose from '@/public/images/icon-menu-close.svg';
import Image from 'next/image';

const Navbar = () => {

    const { isDesktopResolution } = useData();
    const { isMenuOpen, setIsMenuOpen } = useData();
    return (
        <nav className="navbar">
            <div className="logo">
                <a className="site-link" href="/">
                    <Image src={avatarOfMe} alt='développeur thomas andré-lubin' className="profil-img" width={50} height={50} />
                    <span className={`${isDesktopResolution ? "" : "display-none"}`}>ANDRE-LUBIN THOMAS</span>
                </a>
            </div>
            <ul className={`nav-links ${isDesktopResolution ? "" : "display-none"}`}>
                <li><a href="/CV-andrelubin-thomas.pdf" download="CV-andrelubin-thomas">CURRICULUM VITAE</a></li>
                <li><a href="#projects-section" className="secondary-button"> PROJETS</a></li>
            </ul>

            <div className={`${isDesktopResolution ? "hamburger display-none" : "hamburger"}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <div className='burger burger1' />
                <div className='burger burger2' />
                <div className='burger burger3' />
            </div>
            <div id="sideMenu" className={`side-menu ${isMenuOpen ? "active" : ""}`}>
                <div className='d-flex justify-content-end mb-4'>
                    <Image src={iconMenuClose} alt='close menu icon' id='close-menu-icon' onClick={() => setIsMenuOpen(!isMenuOpen)} />
                </div>
                <a href="#">CURRICULUM VITAE</a>
                <a href="#contact-section" onClick={() => setIsMenuOpen(!isMenuOpen)}>CONTACT</a>
                <a href="#projects-section" onClick={() => setIsMenuOpen(!isMenuOpen)}>PROJETS</a>
            </div>
        </nav>
    );
};

export default Navbar;