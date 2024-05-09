import React, { useContext } from 'react';
import classes from './Footer.module.css';
import Image from 'next/image';
import GlobalContext from '@/Store/GlobalContext';
import Link from 'next/link';
import logo from '@/public/images/global/logo.png';
import instagramIcon from '@/public/images/global/logo_instagram.png';
import linkedinIcon from '@/public/images/global/logo_linkedin.png';
import tiktokIcon from '@/public/images/global/logo_tiktok.png';
const Footer = () => {

    const { isMobileResolution } = useContext(GlobalContext)
    return (
        <footer className={classes.footer}>
            <div className={`${classes.content} max-width`}>
                <div className={classes.separator}>
                    <div className={classes.circle}></div>
                </div>
                <div className={classes.logoAndLinks}>
                    <Image src={logo} alt="Logo" className={classes.logo} />
                    <div className={classes.footerLinks}>
                        <Link href="#projets" className={classes.link}>Projets</Link>
                        <Link href="#services" className={classes.link}>Services</Link>
                        <Link href="#" className={classes.link}>A propos</Link>
                        <Link href="#contact" className={classes.link}>Contact</Link>
                    </div>
                </div>
                <div className={classes.contactInfo}>
                    <p>06 37 51 43 79</p>
                    <p>dev@thomasandrelubin.fr</p>
                </div>
                <div className={classes.socialLinksAndCopy}>

                    <div className={classes.socials}>
                        <Image src={instagramIcon} alt="Instagram" className={classes.socialIcon} />
                        <Image src={linkedinIcon} alt="Linkedin" className={classes.socialIcon} />
                        <Image src={tiktokIcon} alt="Tiktok" className={classes.socialIcon} />
                    </div>

                    <div className={classes.copy}>
                        <p>© 2024 Thomas André-Lubin</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;