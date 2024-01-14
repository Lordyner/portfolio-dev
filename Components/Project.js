import React from 'react';
import newsHomepageImg from '@/public/images/news-homepage-screenshot.png'
import passwordGeneratorImg from '@/public/images/password-generator-screenshot.png'
import puissance4Img from '@/public/images/puissance4-screenshot.png'
import Image from 'next/image';
import classes from './Project.module.css';
import frontendmentorLogo from '../public/images/frontend_mentor_logo.png';

const Project = () => {
    return (
        <section id='projects-section' className={classes.projectSection}>
            <h2>Derniers projets</h2>
            <div className={classes.container}>
                <div className={classes.card}>
                    <Image src={newsHomepageImg} alt="page d'accueil du site d'information" className={classes.mainImg} />
                    <div className='d-flex gap-05 align-items-center flex-grow-2'>
                        <Image src={frontendmentorLogo} className={classes.logo} alt="logo de l'entreprise frontendmentor.io" />
                        <div className={classes.text}>
                            <p className={classes.title}>Page d'accueil d'informations</p>
                            <p className={classes.description}>Frontend mentor</p>
                        </div>
                    </div>
                    <div className='d-flex w-100'>
                        <a className={classes.button} href="https://lordyner.github.io/news-homepage/" target="blank">
                            Visitez le site
                        </a>
                    </div>
                </div>
                <div className={classes.card}>
                    <Image src={passwordGeneratorImg} alt='prévisualisation du projet de génération de mot de passe' className={classes.mainImg} />
                    <div className='d-flex gap-05 align-items-center flex-grow-2'>
                        <Image src={frontendmentorLogo} className={classes.logo} alt="logo de l'entreprise frontendmentor.io" />
                        <div className={classes.text}>
                            <p className={classes.title}>Générateur de mot de passe</p>
                            <p className={classes.description}>Frontend mentor</p>
                        </div>
                    </div>
                    <div className='d-flex w-100'>
                        <a className={classes.button} href="https://lordyner.github.io/password-generator-app/" target="blank">
                            Visitez le site
                        </a>
                    </div>
                </div>
                <div className={classes.card}>
                    <Image src={puissance4Img} alt='preview of my connect-four game project' className={classes.mainImg} />
                    <div className='d-flex gap-05 align-items-center flex-grow-2'>
                        <Image src={frontendmentorLogo} className={classes.logo} alt="logo de l'entreprise frontendmentor.io" />
                        <div className={classes.text}>
                            <p className={classes.title}>Puissance 4</p>
                            <p className={classes.description}>Frontend mentor</p>
                        </div>
                    </div>
                    <div className='d-flex w-100'>
                        <a className={classes.button} href="https://lordyner.github.io/connect-four-game/" target="blank">
                            Visitez le site
                        </a>
                    </div>
                </div>

            </div>
        </section >
    );
};

export default Project;