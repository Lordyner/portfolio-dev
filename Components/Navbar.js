import React, { useContext } from 'react';
import avatarOfMe from '@/public/images/avatarOfMe.png';
import iconMenuClose from '@/public/images/icon_menu_close.svg';
import Image from 'next/image';
import classes from './Navbar.module.css'
import GlobalContext from '@/Store/GlobalContext';
const Navbar = () => {

    const { isDesktopResolution } = useContext(GlobalContext);
    const { isMobileResolution } = useContext(GlobalContext);
    const { isMenuOpen, setIsMenuOpen } = useContext(GlobalContext);
    return (
        <nav className={classes.navbar}>
            <div className={classes.logo}>
                <a className={classes.link} href="/">
                    {isMobileResolution && <Image src={avatarOfMe} alt='développeur thomas andré-lubin' className={classes.profilImg} width={50} height={50} />}
                    <span className={`${isMobileResolution ? "display-none" : ""}`}>ANDRE-LUBIN THOMAS</span>
                </a>
            </div>
            {/* Classic links */}
            <div className={`${isMobileResolution ? "display-none" : classes.navLink}`}>
                <a href="/CV-andrelubin-thomas.pdf" className={classes.link} download="CV-andrelubin-thomas">Curriculum Vitae</a>
                <a href="#projects-section" className={classes.link}>Projets</a>
            </div>

            {/* Burger menu */}
            <div className={`${isMobileResolution ? classes.hamburger : classes.hamburger + " display-none"}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <div className={`${classes.burger} burger1`} />
                <div className={`${classes.burger} burger2`} />
                <div className={`${classes.burger} burger3`} />
            </div>
            {/* Side menu */}
            <div id="sideMenu" className={`${classes.sideMenu} ${isMenuOpen ? classes.active : ""}`}>
                <div className='d-flex justify-content-end mb-4'>
                    <Image src={iconMenuClose} alt='close menu icon' id='close-menu-icon' onClick={() => setIsMenuOpen(!isMenuOpen)} />
                </div>
                <a href="#">CURRICULUM VITAE</a>
                <a href="#contact-section" onClick={() => setIsMenuOpen(!isMenuOpen)}>CONTACT</a>
                <a href="#projects-section" onClick={() => setIsMenuOpen(!isMenuOpen)}>PROJETS</a>
            </div>
        </nav >
    );
};

export default Navbar;