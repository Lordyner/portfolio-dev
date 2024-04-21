import React from 'react';
import newsHomepageImg from '@/public/images/news-homepage-screenshot.png'
import passwordGeneratorImg from '@/public/images/password-generator-screenshot.png'
import puissance4Img from '@/public/images/puissance4-screenshot.png'
import photoSnapImg from '@/public/images/photosnap-homepage-screenshot.png'
import Image from 'next/image';
import classes from './Project.module.css';
import frontendmentorLogo from '../public/images/frontend_mentor_logo.png';
import payAPIHomepage from '../public/images/payAPI_homepage.png';
import myTeamLandingPage from '@/public/images/myteam_firstPage.png';
import coffeeRoastersLandingPage from '@/public/images/coffee_roasters_homepage.png';
import audiophileScreenshot from '@/public/images/audiophile-screenshot.png';
const Project = () => {
    return (
        <section id='projects-section' className={classes.projectSection}>
            <h2>Derniers projets</h2>
            <div className={classes.container}>
                <div className={classes.card}>
                    <Image src={audiophileScreenshot} alt="page d'accueil d'audiophile" className={classes.mainImg} />
                    <div className='d-flex gap-05 align-items-center flex-grow-2'>
                        <Image src={frontendmentorLogo} className={classes.logo} alt="logo de l'entreprise frontendmentor.io" />
                        <div className={classes.text}>
                            <p className={classes.title}>Audiophile e-commerce</p>
                            <p className={classes.description}>Frontend mentor</p>
                        </div>
                    </div>
                    <div className='d-flex w-100'>
                        <a className={classes.button} href="https://audiophile-indol-nu.vercel.app/" target="blank">
                            Visitez le site
                        </a>
                    </div>
                </div>
                <div className={classes.card}>
                    <Image src={coffeeRoastersLandingPage} alt="page d'accueil de coffee roasters" className={classes.mainImg} />
                    <div className='d-flex gap-05 align-items-center flex-grow-2'>
                        <Image src={frontendmentorLogo} className={classes.logo} alt="logo de l'entreprise frontendmentor.io" />
                        <div className={classes.text}>
                            <p className={classes.title}>Coffee roasters</p>
                            <p className={classes.description}>Frontend mentor</p>
                        </div>
                    </div>
                    <div className='d-flex w-100'>
                        <a className={classes.button} href="https://coffee-roasters-gamma.vercel.app/" target="blank">
                            Visitez le site
                        </a>
                    </div>
                </div>
                <div className={classes.card}>
                    <Image src={photoSnapImg} alt="page d'accueil de photosnap" className={classes.mainImg} />
                    <div className='d-flex gap-05 align-items-center flex-grow-2'>
                        <Image src={frontendmentorLogo} className={classes.logo} alt="logo de l'entreprise frontendmentor.io" />
                        <div className={classes.text}>
                            <p className={classes.title}>Photosnap</p>
                            <p className={classes.description}>Frontend mentor</p>
                        </div>
                    </div>
                    <div className='d-flex w-100'>
                        <a className={classes.button} href="https://photosnap-sigma.vercel.app/" target="blank">
                            Visitez le site
                        </a>
                    </div>
                </div>
                <div className={classes.card}>
                    <Image src={myTeamLandingPage} alt="page d'accueil de myTeam" className={classes.mainImg} />
                    <div className='d-flex gap-05 align-items-center flex-grow-2'>
                        <Image src={frontendmentorLogo} className={classes.logo} alt="logo de l'entreprise frontendmentor.io" />
                        <div className={classes.text}>
                            <p className={classes.title}>Landing page myTeam</p>
                            <p className={classes.description}>Frontend mentor</p>
                        </div>
                    </div>
                    <div className='d-flex w-100'>
                        <a className={classes.button} href="https://my-team-eosin.vercel.app/" target="blank">
                            Visitez le site
                        </a>
                    </div>
                </div>
                <div className={classes.card}>
                    <Image src={payAPIHomepage} alt="page d'accueil de payAPI" className={classes.mainImg} />
                    <div className='d-flex gap-05 align-items-center flex-grow-2'>
                        <Image src={frontendmentorLogo} className={classes.logo} alt="logo de l'entreprise frontendmentor.io" />
                        <div className={classes.text}>
                            <p className={classes.title}>Landing page PayAPI</p>
                            <p className={classes.description}>Frontend mentor</p>
                        </div>
                    </div>
                    <div className='d-flex w-100'>
                        <a className={classes.button} href="https://pay-api-seven.vercel.app/" target="blank">
                            Visitez le site
                        </a>
                    </div>
                </div>
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
            </div>
        </section >
    );
};

export default Project;