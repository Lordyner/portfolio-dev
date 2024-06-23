import React from 'react';
import classes from './WhyMyServices.module.css';
import Link from 'next/link';

const WhyMyServices = () => {
    return (
        <section className={classes.container}>
            <div className={`${classes.whyMyServices} max-width`}>
                <div className={`${classes.textWrapper}`}>
                    <h2>Pourquoi choisir mes services de <span className="accentuedWord">développement web</span></h2>
                    <p className={classes.description}>
                        En tant que développeur web freelance spécialisé dans la création de sites vitrines et e-commerce, je mets à votre disposition mon expertise et ma passion pour le développement web.<br /><br />
                        Chaque projet est unique, et je m'engage à vous offrir une solution sur mesure, adaptée à vos besoins spécifiques.
                    </p>
                </div>
                <div className={classes.buttonWrapper}>

                    <Link href="/a-propos" className="secondary-button">En savoirs plus</Link>
                </div>
            </div>
        </section>
    );
};

export default WhyMyServices;