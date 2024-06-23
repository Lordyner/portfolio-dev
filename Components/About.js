import React from 'react';
import classes from './About.module.css';
import Image from 'next/image';
import aboutImage from '@/public/images/about/consultant_pic.png';
import meInFrontOfComputer from '@/public/images/about/in_front_of_laptop_with_blue_bg.png';

const About = () => {
    return (
        <main className={classes.aboutContainer}>
            <h1 className={classes.title}>A <span className='accentuedWord'>propos</span></h1>
            <div className={`${classes.content} max-width`}>
                <div className={classes.expertise}>
                    <div className={classes.textWrapper}>
                        <h2>
                            <span className='accentuedWord'>Expertise</span> dans le développement web
                        </h2>
                        <p>
                            <b>Développeur web</b> depuis 6 ans, j'ai été amené à travailler sur de nombreux projets pour des entreprises comme le Crédit Agricole, Orange ou bien Rothschild Martin Maurel.<br /><br />
                            Vous pouvez télécharger mon curriculum vitae <a href="/CV-andrelubin-thomas.pdf" className={classes.link} download="CV-andrelubin-thomas">ici</a>.<br /><br />
                            Ces expériences m'ont fait gagner en compétences techniques mais également en analyse du besoin client et en communication avec le client.
                        </p>
                    </div>
                    <Image
                        src={aboutImage}
                        alt="Image de Thomas André-Lubin en chemise, souriant et regardant l'objectif, bras croisé"
                        className={classes.consultantImg}
                        quality={100}
                        priority={true} />
                </div>
                <div className={classes.passion}>
                    <Image
                        src={meInFrontOfComputer}
                        alt="Image de Thomas André-Lubin en train de travailler sur son ordinateur"
                        className={classes.workingImg}
                        quality={90}
                    />
                    <div className={classes.textWrapper}>

                        <h2>
                            Passion et <span className='accentuedWord'>développement web</span>
                        </h2>
                        <p>
                            Si j'ai commencé mon activité de freelance c'est pour une seule raison : faire plus de ce que j'aime.<br /><br />
                            Comprendre le besoin du client, son activité, son marché, sa marque, le conseiller, lui apporter des solutions qui réponde à ses besoins et l'accompagner tout le long.
                        </p>
                    </div>
                </div>

            </div>
        </main >
    );
};

export default About;