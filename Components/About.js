import React from 'react';
import classes from './About.module.css';
import crazyGuyMeme from '@/public/images/global/crazy_guy_meme.PNG';
import meOutddor from '@/public/images/global/me_outdoor.jpg';
import montpellierFeatBxl from '@/public/images/global/mtp_bx.png';
import Image from 'next/image';

const About = () => {
    return (
        <main className={classes.aboutContainer}>
            <div className={`${classes.content} max-width`}>
                <h2 className={classes.title}>A propos</h2>
                <div className={classes.lifePart}>
                    <div className={classes.textWrapper}>
                        <h3>Il était une fois</h3>
                        <p>J'ai commencé à m'intéresser à l'informatique à 11 ans lorsque je suis tombé sur un cours du langage de programmation C.</p>
                        <p>Les murs de ma chambre étaient remplis des notes que j'avais prisent. Autant vous dire que ma famille était pas rassuré..</p>
                    </div>
                    <Image src={crazyGuyMeme} alt="Crazy guy meme" className={classes.aboutImg} />
                </div>
                <div className={`${classes.lifePart} ${classes.reversed}`}>
                    <Image src={montpellierFeatBxl} alt="Montpellier et Bruxelles" className={classes.aboutImg} />

                    <div className={classes.textWrapper}>
                        <h3>Avance rapide</h3>
                        <p>Plusieurs années après, je valide ma licence professionnel MiAR (Métiers de l'informatique : Applications Réparties).</p>
                        <p>Je réalise ensuite un contrat VIE (Volontariat International en Entreprise) à Brussels pendant 2ans en tant que développeur fullstack pour une entreprise spécialisé dans le domaine bancaire. J'ai l'opportunité de travailler sur plusieurs applications web de différentes banques Belges et Françaises.</p>
                        <p>Mon contrat fini, je décide de revenir en France où je m'installe dans le sud pour 3 années.Je travaille en tant que développeur fullstack pour Orange sur une application de passage de commande. </p>
                        <p>Puis pour le Crédit Agricole où je travaille sur différents produits de l'application web utilisé par les conseillés en agence. </p>
                    </div>
                </div>
                <div className={classes.lifePart}>
                    <div className={classes.textWrapper}>
                        <h3>Nouvelle aventure</h3>
                        <p>Après 5 années à travailler en entreprises et développer mon expertise,  j'ai décidé de lancer mon activité de développeur web freelance en parallèle.</p>
                        <p>Si je suis devenu développeur c'est pour pouvoir résoudre des problèmes et aider les gens avec mes compétences.</p>
                        <p>Loin de la rigidité des grandes entreprises, au plus proche de mes clients, l'aventure freelance apparait comme le choix idéal. </p>
                    </div>
                    <Image src={meOutddor} alt="Me outdoor" className={`${classes.aboutImg} ${classes.photoOfMe}`} />
                </div>
            </div>
        </main>
    );
};

export default About;