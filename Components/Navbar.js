import React, { useContext, useRef } from 'react';
import Image from 'next/image';
import classes from './Navbar.module.css'
import GlobalContext from '@/Store/GlobalContext';
import Link from 'next/link';
import logo from '@/public/images/global/logo.png';
import tiktokLogo from '@/public/images/global/logo_tiktok.png';
import instaLogo from '@/public/images/global/logo_instagram.png';
import linkedinLogo from '@/public/images/global/logo_linkedin.png';
import { animations, delay, motion, spring } from "framer-motion";
const Navbar = () => {

    const burger = useRef();

    const { isMobileResolution } = useContext(GlobalContext);
    const { isMenuOpen, setIsMenuOpen } = useContext(GlobalContext);
    const { toggleMenu } = useContext(GlobalContext);
    const sideBar = {
        closed: {
            width: 0,
            padding: 0,
            transition: {
                // delay: 0.25,
                duration: 0.55,
            },
        },
        open: {
            width: "55%",
            padding: "6rem 3rem",
            transition: {
                // delay: 0.25,
                duration: 0.55,

            },
        },
    }

    const sideVariants = {
        closed: {
            transition: {
                // staggerChildren: 0.2,
                // staggerDirection: 1,
            },
        },
        open: {
            transition: {
                staggerChildren: 0.2,
                staggerDirection: 1,
            },
        },
    };
    const sideVariantsSocials = {
        closed: {
            transition: {
                // staggerChildren: 0.2,
                // staggerDirection: 1,
            },
        },
        open: {
            transition: {
                delayChildren: 0.25,
                staggerChildren: 0.2,
                staggerDirection: 1,
            },
        },
    };

    const variantsItem = {

        open: {
            y: 50,
            opacity: 1,

        },
        closed: {
            opacity: 0,
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
                    <motion.div className={`${classes.mobileNav} `}
                        initial="closed" animate={isMenuOpen ? "open" : "closed"} variants={sideBar} >
                        {/* ${isMenuOpen ? classes.active : ""} */}
                        <motion.div className={classes.mobileLinks}
                            initial="closed"
                            animate={isMenuOpen ? "open" : "closed"}
                            variants={sideVariants}>
                            <motion.div variants={variantsItem}>
                                <Link href="/#projects-section" className={classes.mobileLink} onClick={() => {
                                    toggleMenu();
                                    burger.current.classList.toggle(classes.isActive);
                                }}>Accueil</Link>
                            </motion.div>
                            <motion.div variants={variantsItem}>
                                <Link href="/#projects-section" className={classes.mobileLink} onClick={() => {
                                    toggleMenu();
                                    burger.current.classList.toggle(classes.isActive);
                                }}>Services</Link>
                            </motion.div>
                            <motion.div variants={variantsItem}>
                                <Link href="/#projects-section" className={classes.mobileLink} onClick={() => {
                                    toggleMenu();
                                    burger.current.classList.toggle(classes.isActive);
                                }}>Projets</Link>
                            </motion.div>
                            <motion.div variants={variantsItem}>
                                <Link href="/#projects-section" className={classes.mobileLink} onClick={() => {
                                    toggleMenu();
                                    burger.current.classList.toggle(classes.isActive);
                                }}>A propos</Link>
                            </motion.div>
                            <motion.div className={classes.buttonWrapper} variants={variantsItem}>

                                <Link href="/book-a-call" className='primary-button'>Me contacter</Link>
                            </motion.div>
                        </motion.div>
                        <motion.div className={classes.socials} variants={sideVariantsSocials}>
                            <motion.div variants={variantsItem}>
                                <Image src={tiktokLogo} alt='logo tiktok' className={classes.socialLogo} />
                            </motion.div>
                            <motion.div variants={variantsItem}>

                                <Image src={instaLogo} alt='logo instagram' className={classes.socialLogo} />
                            </motion.div>
                            <motion.div variants={variantsItem}>
                                <Image src={linkedinLogo} alt='logo linkedin' className={classes.socialLogo} />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </nav>
        </header>

    );
};

export default Navbar;