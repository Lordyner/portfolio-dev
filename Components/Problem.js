import React from 'react';
import classes from './Problem.module.css';
import Image from 'next/image';
import clientRunning from '@/public/images/mobile/accueil/ne_laisser_plus_vos_clients_filer.png';

const Problem = () => {
    return (
        <section className={classes.container}>
            <div className={`${classes.problem} max-width`}>
                <Image
                    src={clientRunning}
                    alt="Image d'un client s'en allant à cause d'un site internet mal conçu"
                    className={classes.problemImg}
                    quality={100}
                    priority={true}
                    placeholder="blur"
                />
                <div className={classes.content}>
                    <h2 className={classes.title}>Ne laissez plus vos <span className='accentuedWord'>clients filer</span></h2>
                    <div className={classes.description}>
                        <p>
                            <b>Fatigué de votre site internet</b> au design dépassé, aux temps de chargement trop longs et qui ne reflète pas la qualité de votre entreprise ?<br /><br />
                            Ou bien vous n'avez pas encore de site web et <b>vous voudriez en créer un </b> pour ne plus laisser filer vos prospects chez vos concurrents ?<br /><br />
                            Aujourd'hui, un site internet est <b>incontournable</b> pour une entreprise. Malheureusement, trop de sites sont mal conçus : <br /><br />
                        </p>
                        <ul className={classes.badFeatures}>
                            <li>design viellot</li>
                            <li>incompabilité mobile</li>
                            <li>temps de chargement excessif</li>
                            <li>contenu mal structuré</li>
                            <li>proposition de valeur flou</li>
                            <li>appel à l'action caché</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Problem;