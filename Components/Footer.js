import React, { useContext } from 'react';
import classes from './Footer.module.css';
import Image from 'next/image';
import GlobalContext from '@/Store/GlobalContext';
import Link from 'next/link';
import logo from '@/public/images/mobile/global/logo_thomas_andre-lubin.svg';
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
                        <Link href="#realisations" className={classes.link}>Projets</Link>
                        <Link href="#services" className={classes.link}>Services</Link>
                        <Link href="#" className={classes.link}>A propos</Link>
                        <Link href="#contact" className={classes.link}>Contact</Link>
                    </div>
                </div>
                <div className={classes.contactInfo}>
                    <p>dev@thomasandrelubin.fr</p>
                </div>
                <div className={classes.socialLinksAndCopy}>

                    <div className={classes.socials}>
                        {/* <Image src={instagramIcon} alt="Instagram" className={classes.socialIcon} />
                        <Image src={linkedinIcon} alt="Linkedin" className={classes.socialIcon} />
                        <Image src={tiktokIcon} alt="Tiktok" className={classes.socialIcon} /> */}
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