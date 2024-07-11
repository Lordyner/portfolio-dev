import React, { useContext, useRef } from 'react';
import Image from 'next/image';
import classes from './Navbar.module.css'
import GlobalContext from '@/Store/GlobalContext';
import Link from 'next/link';
import logo from '@/public/images/global/logo_thomas_andre-lubin.svg';

import { motion } from "framer-motion";
const Navbar = ({ theme, maxWidth }) => {

    const burger = useRef();

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
            width: "65%",
            padding: "6rem 1.5rem",
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

    const themeColor = theme === 'white' ? classes.white : '';

    return (
        <header className={`${classes.header} ${themeColor}`}>
            <nav className={`${classes.navbar} max-width`} style={{ maxWidth: maxWidth }}>
                <div className={`${classes.navWrapper} `}>
                    <Link href="/" className={classes.logo}>
                        <Image src={logo} alt="logo de l'entrepreneur Thomas André-Lubin" className={classes.logoImg} />
                    </Link>
                    {/* Classic links */}
                    <div className={classes.navLinks}>
                        <Link href="/a-propos" className={classes.link}>À Propos</Link>
                        <Link href="/blog" className={classes.link}>Blog</Link>
                        <Link href="/#realisations" className={classes.link}>Réalisations</Link>
                    </div>

                    {/* Burger menu */}
                    <div ref={burger} className={classes.hamburger}
                        onClick={() => {
                            toggleMenu();
                            burger.current.classList.toggle(classes.isActive);

                        }}>
                        <span className={classes.bar} />
                    </div>

                    {/* Mobile menu */}
                    <motion.div className={`${classes.mobileNav} `}
                        initial="closed" animate={isMenuOpen ? "open" : "closed"} variants={sideBar} >
                        <motion.div className={classes.mobileLinks}
                            initial="closed"
                            animate={isMenuOpen ? "open" : "closed"}
                            variants={sideVariants}>
                            <motion.div variants={variantsItem}>
                                <Link href="/" className={classes.mobileLink} onClick={() => {
                                    toggleMenu();
                                    burger.current.classList.toggle(classes.isActive);
                                }}>Accueil</Link>
                            </motion.div>
                            <motion.div variants={variantsItem}>
                                <Link href="/#realisations" className={classes.mobileLink} onClick={() => {
                                    toggleMenu();
                                    burger.current.classList.toggle(classes.isActive);
                                }}>Réalisations</Link>
                            </motion.div>
                            <motion.div variants={variantsItem}>
                                <Link href="/a-propos" className={classes.mobileLink} onClick={() => {
                                    toggleMenu();
                                    burger.current.classList.toggle(classes.isActive);
                                }}>A propos</Link>
                            </motion.div>
                            <motion.div variants={variantsItem}>
                                <Link href="/blog" className={classes.mobileLink} onClick={() => {
                                    toggleMenu();
                                    burger.current.classList.toggle(classes.isActive);
                                }}>Blog</Link>
                            </motion.div>
                            <motion.div className={classes.buttonWrapper} variants={variantsItem}>
                                <Link href="/contact" className='primary-button'>Me contacter</Link>
                            </motion.div>
                        </motion.div>
                        <motion.div className={classes.socials} variants={sideVariantsSocials}>
                            <motion.div variants={variantsItem}>
                                {/* <Image src={tiktokLogo} alt='logo tiktok' className={classes.socialLogo} /> */}
                            </motion.div>
                            <motion.div variants={variantsItem}>

                                {/* <Image src={instaLogo} alt='logo instagram' className={classes.socialLogo} /> */}
                            </motion.div>
                            <motion.div variants={variantsItem}>
                                {/* <Image src={linkedinLogo} alt='logo linkedin' className={classes.socialLogo} /> */}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </nav>
        </header>

    );
};

export default Navbar;