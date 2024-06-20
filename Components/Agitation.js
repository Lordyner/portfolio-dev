import React from 'react';
import classes from './Agitation.module.css';
import credibilityGambled from '@/public/images/mobile/accueil/credibilite_entreprise_en_jeu.png';
import Image from 'next/image';


const Agitation = () => {
    return (
        <section className={classes.container}>
            <div className={`${classes.agitation} max-width`}>
                <div className={classes.content}>
                    <h2>La crédibilité de <span className='accentuedWord'>votre entreprise en jeu</span></h2>
                    <div className={classes.description}>
                        <p>Un site internet mal conçu vous coûte des centaines voire des milliers de prospects chaque mois. Vous ne me croyez pas ?</p>
                        <ul className={classes.stats}>
                            <li>75% des internautes jugent la crédibilité d'une entreprise en fonction du design de leur site</li>
                            <li>0,05 secondes, c'est le temps nécessaire pour que les visiteurs se forment une opinion sur votre site</li>
                            <li>94% de l'opinion sur un site est lié au design</li>
                            <li>38% des visiteurs quittent un site mal structuré</li>
                            <li>47% des utilisateurs s'attendent à un temps de chargement inférieur à 2 secondes</li>
                        </ul>
                    </div>
                </div>
                <Image
                    src={credibilityGambled}
                    alt="Image d'un homme jouant au poker avec son téléphone dans les mains"
                    className={classes.gamblingCredibilityImg}
                    quality={100}
                    priority={true}
                    placeholder="blur"
                />
            </div>
        </section>
    );
};

export default Agitation;