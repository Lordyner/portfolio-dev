import React, { useContext, useRef } from 'react';
import Image from 'next/image';
import classes from './Navbar.module.css'
import GlobalContext from '@/Store/GlobalContext';
import Link from 'next/link';
import logo from '@/public/images/global/logo.png';
import tiktokLogo from '@/public/images/global/logo_tiktok.png';
import instaLogo from '@/public/images/global/logo_instagram.png';
import linkedinLogo from '@/public/images/global/logo_linkedin.png';

const Navbar = () => {

    const burger = useRef();

    const { isMobileResolution } = useContext(GlobalContext);
    const { isMenuOpen, setIsMenuOpen } = useContext(GlobalContext);
    const { toggleMenu } = useContext(GlobalContext);

    const variants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 }
            }
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000 }
            }
        }
    };

    return (
        <header className={`${classes.header}`}>
            <nav className={`${classes.navbar} max-width`}>
                <div className={`${classes.navWrapper} `}>
                    <div className={classes.logo}>
                        <Link href="/">
                            <Image src={logo} alt='logo thomas andré-lubin' className={classes.logoImg} />
                        </Link>
                    </div>
                    {/* Classic links */}
                    <div className={`${isMobileResolution ? "display-none" : classes.navLink}`}>
                        <Link href="/#projects-section" className={classes.link}>Projets</Link>
                        <Link href="/#projects-section" className={classes.link}>Services</Link>
                        <Link href="/#projects-section" className={classes.link}>A propos</Link>
                    </div>

                    {/* Burger menu */}
                    <div ref={burger} className={`${isMobileResolution ? classes.hamburger : classes.hamburger + " display-none"}`}
                        onClick={() => {
                            toggleMenu();
                            burger.current.classList.toggle(classes.isActive);

                        }}>
                        <span className={classes.bar} />
                    </div>

                    {/* Mobile menu */}
                    <div className={`${classes.mobileNav} ${isMenuOpen ? classes.active : ""}`}>
                        <div className={classes.mobileLinks}>

                            <Link href="/#projects-section" className={classes.mobileLink} onClick={() => {
                                toggleMenu();
                                burger.current.classList.toggle(classes.isActive);
                            }}>Accueil</Link>
                            <Link href="/#projects-section" className={classes.mobileLink} onClick={() => {
                                toggleMenu();
                                burger.current.classList.toggle(classes.isActive);
                            }}>Services</Link>
                            <Link href="/#projects-section" className={classes.mobileLink} onClick={() => {
                                toggleMenu();
                                burger.current.classList.toggle(classes.isActive);
                            }}>Projets</Link>
                            <Link href="/#projects-section" className={classes.mobileLink} onClick={() => {
                                toggleMenu();
                                burger.current.classList.toggle(classes.isActive);
                            }}>A propos</Link>
                            <div className={classes.buttonWrapper}>

                                <Link href="/book-a-call" className='primary-button'>Me contacter</Link>
                            </div>
                        </div>
                        <div className={classes.socials}>
                            <Image src={tiktokLogo} alt='logo tiktok' className={classes.socialLogo} />
                            <Image src={instaLogo} alt='logo instagram' className={classes.socialLogo} />
                            <Image src={linkedinLogo} alt='logo linkedin' className={classes.socialLogo} />
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    );
};

export default Navbar;