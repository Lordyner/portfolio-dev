import React, { useContext, useRef } from 'react';
import avatarOfMe from '@/public/images/avatarOfMe.png';
import iconMenuClose from '@/public/images/icon_menu_close.svg';
import Image from 'next/image';
import classes from './Navbar.module.css'
import GlobalContext from '@/Store/GlobalContext';
import Link from 'next/link';
const Navbar = () => {

    const burger = useRef();

    const { isMobileResolution } = useContext(GlobalContext);
    const { isMenuOpen, setIsMenuOpen } = useContext(GlobalContext);
    const { toggleMenu } = useContext(GlobalContext);

    return (
        <nav className={classes.navbar}>
            <div className={classes.navWrapper}>
                <div className={classes.logo}>
                    <Link href="/">
                        <Image src={avatarOfMe} alt='avatar du développeur web freelance Thomas André-Lubin' className={classes.logoImg} width={50} height={50} />
                    </Link>
                </div>
                {/* Classic links */}
                <div className={`${isMobileResolution ? "display-none" : classes.navLink}`}>
                    <a href="/CV-andrelubin-thomas.pdf" className={classes.link} download="CV-andrelubin-thomas">Curriculum Vitae</a>
                    <Link href="/#projects-section" className={classes.link}>Projets</Link>
                </div>

                {/* Burger menu */}
                <div ref={burger} className={`${isMobileResolution ? classes.hamburger : classes.hamburger + " display-none"}`}
                    onClick={() => {
                        toggleMenu();
                        burger.current.classList.toggle(classes.isActive);

                    }}>
                    <div className={classes.bar} />
                </div>

                {/* Mobile menu */}
                <div className={`${classes.mobileNav} ${isMenuOpen ? classes.active : ""}`}>
                    <Link href="/#projects-section" className={classes.mobileLink} onClick={() => {
                        toggleMenu();
                        burger.current.classList.toggle(classes.isActive);
                    }}>Projets</Link>
                    <a href="/CV-andrelubin-thomas.pdf" className={classes.mobileLink} download="CV-andrelubin-thomas" onClick={() => {
                        toggleMenu();
                        burger.current.classList.toggle(classes.isActive);
                    }}>Curriculum Vitae</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;