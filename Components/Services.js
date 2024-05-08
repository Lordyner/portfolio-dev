import React from 'react';
import classes from './Services.module.css';
import Link from 'next/link';
const Services = () => {
    return (
        <div className={`${classes.container}`}>
            <div className={`${classes.content} max-width`}>
                <h2>Services</h2>
                <p className={classes.description}>Je vous accompagne en tant que développeur web freelance à travers différents services. De l'audit à la conception de maquette et au développement de site, je mets à disposition mon expertise.</p>
                <div className={`${classes.services} full-width`}>
                    <div className={classes.servicesWrapper}>
                        <div className={`${classes.service} ${classes.audit}`}>
                            <div className={classes.serviceText}>
                                <h3>Audit de site</h3>
                                <p>J'analyse les données Google Analytics de votre site pour déterminer les problème qui nuisent à son taux de conversion et son trafic.</p>
                            </div>
                            <Link href="#" className='secondary-button'>En savoir plus</Link>
                        </div>
                        <div className={`${classes.service} ${classes.website}`}>
                            <div className={classes.serviceText}>
                                <h3>Création de site internet</h3>
                                <p>Je vous crée un site internet au design moderne et avec une bonne expérience utilisateur, qui reflète votre marque. Ensemble nous ...</p>
                            </div>
                            <Link href="#" className='secondary-button'>En savoir plus</Link>

                        </div>
                        <div className={`${classes.service} ${classes.design}`}>
                            <div className={classes.serviceText}>
                                <h3>Conception de maquette</h3>
                                <p>Je conçois les maquettes de votre site internet à partir de vos besoins et l'image que vous souhaitez renvoyer. Ces maquettes peuvent ...</p>
                            </div>
                            <Link href="#" className='secondary-button'>En savoir plus</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;