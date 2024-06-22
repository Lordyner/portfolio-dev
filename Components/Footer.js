import React, { useContext } from 'react';
import classes from './Footer.module.css';
import Image from 'next/image';
import GlobalContext from '@/Store/GlobalContext';
import Link from 'next/link';
import logo from '@/public/images/mobile/global/logo_thomas_andre-lubin.svg';
import logoLinkedin from '@/public/images/mobile/global/logo_linkedin.png';

const Footer = () => {

    const { isMobileResolution } = useContext(GlobalContext)
    return (
        <footer className={classes.footer}>
            <div className={`${classes.content} max-width`}>
                <Image src={logo} alt="Logo" className={classes.logo} />
                <div className={classes.footerLinks}>
                    <Link href="#realisations" className={classes.link}>Réalisations</Link>
                    <Link href="#" className={classes.link}>A propos</Link>
                    <Link href="#contact" className={classes.link}>Contact</Link>
                    <Link href="#" className={classes.link}>Mentions Légales</Link>
                </div>

                <div className={classes.contactInfo}>
                    <p className={classes.info}>dev@thomasandrelubin.fr</p>
                    <p className={classes.info}>06 37 51 43 79</p>
                </div>

                <div className={classes.socials}>
                    <Image src={logoLinkedin} alt="Linkedin" className={classes.socialIcon} />
                </div>

                <div className={classes.copy}>
                    <p className={classes.copyright}>© 2024 Thomas André-Lubin</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;