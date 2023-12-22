import React from 'react';
import newsHomepageImg from '@/public/images/news-homepage-screenshot.png'
import passwordGeneratorImg from '@/public/images/password-generator-screenshot.png'
import puissance4Img from '@/public/images/puissance4-screenshot.png'
import Image from 'next/image';
import classes from './Project.module.scss';
import frontendmentorLogo from '../public/images/frontendmentor_logo.png';

const Project = () => {
    return (
        <section id='projects-section'>
            <h2>PROJETS</h2>
            <div className={classes.container}>
                <div className={classes.card}>
                    <Image src={newsHomepageImg} alt="page d'accueil du site d'information" className={classes.mainImg} width={341} height={200} />
                    <div className='d-flex gap-05 align-items-center'>
                        <Image src={frontendmentorLogo} alt="logo de l'entreprise frontendmentor.io" width={40} height={40} />
                        <div className={classes.text}>
                            <span className={classes.title}>Page d'accueil d'informations</span>
                            <span className={classes.description}>Frontend mentor</span>
                        </div>
                    </div>
                    <div className='d-flex w-100'>
                        <a className={classes.button} href="https://lordyner.github.io/news-homepage/" target="blank">
                            Visitez le site
                        </a>
                    </div>

                </div>
                <div className={classes.card}>
                    <Image src={passwordGeneratorImg} alt='prévisualisation du projet de génération de mot de passe' className={classes.mainImg} width={341} height={200} />

                    <div className='d-flex gap-05 align-items-center'>
                        <Image src={frontendmentorLogo} alt="logo de l'entreprise frontendmentor.io" width={40} height={40} />
                        <div className={classes.text}>
                            <span className={classes.title}>Générateur de mot de passe</span>
                            <span className={classes.description}>Frontend mentor</span>
                        </div>
                    </div>
                    <div className='d-flex w-100'>
                        <a className={classes.button} href="https://lordyner.github.io/password-generator-app/" target="blank">
                            Visitez le site
                        </a>
                    </div>
                </div>
                <div className={classes.card}>
                    <Image src={puissance4Img} alt='preview of my connect-four game project' className={classes.mainImg} width={341} height={200} />
                    <div className='d-flex gap-05 align-items-center'>
                        <Image src={frontendmentorLogo} alt="logo de l'entreprise frontendmentor.io" width={40} height={40} />
                        <div className={classes.text}>
                            <span className={classes.title}>Puissance 4</span>
                            <span className={classes.description}>Frontend mentor</span>
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