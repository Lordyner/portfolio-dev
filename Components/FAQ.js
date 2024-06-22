import React from 'react';
import classes from './FAQ.module.css';
import Link from 'next/link';
import { Question } from './Question';
const FAQ = () => {

    return (
        <section className={classes.container}>
            <div className={`${classes.content} max-width`}>
                <h2 className={classes.sectionTitle}>Foire aux <span className='accentuedWord'>questions</span></h2>
                <Question title="Pourquoi travaillé avec un freelance ?" defaultOpen>

                    Moins cher qu'une agence, plus de flexibilité, un interlocuteur unique, une communication claire et des délais respectés.

                </Question>
                <Question title="Quel est le prix d'un site internet ?">

                    Le prix dépend de nombreux facteurs : type de site, fonctionnalités, nombre de pages, complexité du design, etc. <Link href="/contact"> Contactez moi</Link> pour recevoir un devis détaillé.

                </Question>
                <Question title="Combien de temps pour créer un site internet ?">

                    En général, comptez 3 semaines minimum, selon les spécificités du projet

                </Question>
                <Question title="Peut-on demander des retouches une fois le site livré ?">

                    Oui, j'offre 5 retouches mineures pour que vous soyez entièrement satisfait. Vous suivrez également les étapes clés du projet avec un accès privé à votre site en construction.

                </Question>
            </div>
        </section>
    );
};

export default FAQ;