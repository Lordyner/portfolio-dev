import React from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const Footer = () => {
    return (
        <footer>
            <div>
                <h4>ANDRE-LUBIN THOMAS</h4>
                <span>Développeur Fullstack avec 5 ans d'expériences dans de multiples secteurs.</span>
            </div>
            <div className='social-links'>
                <a href="https://github.com/Lordyner" target='_blank'>
                    <SiGithub />
                </a>
                <a href="https://www.linkedin.com/in/thomas-andre-lubin-988760111/" target='_blank'>
                    <SiLinkedin />
                </a>
            </div>
        </footer>
    );
};

export default Footer;