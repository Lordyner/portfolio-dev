import React, { useContext } from 'react';
import avatarOfMe from '@/public/images/avatarOfMe.png';
import iconMenuClose from '@/public/images/icon_menu_close.svg';
import Image from 'next/image';
import classes from './Navbar.module.css'
import GlobalContext from '@/Store/GlobalContext';
import Link from 'next/link';
const Navbar = () => {

    const { isMobileResolution } = useContext(GlobalContext);
    const { isMenuOpen, setIsMenuOpen } = useContext(GlobalContext);
    return (
        <nav className={classes.navbar}>
            <div className={classes.logo}>
                <Link className={classes.link} href="/">
                    {isMobileResolution && <Image src={avatarOfMe} alt='développeur thomas andré-lubin' className={classes.profilImg} width={50} height={50} />}
                    <span className={`${isMobileResolution ? "display-none" : ""}`}>ANDRE-LUBIN THOMAS</span>
                </Link>
            </div>
            {/* Classic links */}
            <div className={`${isMobileResolution ? "display-none" : classes.navLink}`}>
                <a href="/CV-andrelubin-thomas.pdf" className={classes.link} download="CV-andrelubin-thomas">Curriculum Vitae</a>
                <Link href="/#projects-section" className={classes.link}>Projets</Link>
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
                    <Image src={iconMenuClose} alt='icône de fermeture du menu' id='close-menu-icon' onClick={() => setIsMenuOpen(!isMenuOpen)} />
                </div>
                <Link href="/book-a-call" onClick={() => setIsMenuOpen(!isMenuOpen)}>RESERVER UN APPEL</Link>
                <a href="/CV-andrelubin-thomas.pdf">CURRICULUM VITAE</a>
                <Link href="/#projects-section" onClick={() => setIsMenuOpen(!isMenuOpen)}>PROJETS</Link>
            </div>
        </nav >
    );
};

export default Navbar;