import React, { useContext } from 'react';
import classes from './Services.module.css';
import Link from 'next/link';
import ServiceItem from './ServiceItem';
import GlobalContext from '@/Store/GlobalContext';

const Services = () => {

    const { servicesData } = useContext(GlobalContext);

    return (
        <section id='services' className={`${classes.container}`}>
            <div className={`${classes.content} max-width`}>
                <h2>Services</h2>
                <p className={classes.description}>Je vous accompagne en tant que développeur web freelance à travers différents services. De l'audit à la conception de maquette et au développement de site, je mets à disposition mon expertise.</p>
                <div className={`${classes.services} full-width`}>
                    <div className={classes.servicesWrapper}>
                        <div className={`${classes.service} audit`}>
                            <div className={classes.serviceText}>
                                <h3>Audit de site</h3>
                                <p>J'analyse les données Google Analytics de votre site pour déterminer les problèmes qui nuisent à son taux de conversion et trafic.</p>
                            </div>
                            <Link href="/services/audit-de-site-internet" className='secondary-button'>En savoir plus</Link>
                        </div>
                        <div className={`${classes.service} website`}>
                            <div className={classes.serviceText}>
                                <h3>Création de site internet</h3>
                                <p>Je vous crée un site internet moderne, reflétant l'image de marque de votre entreprise et en mettant l'accent sur l'expérience utilisateur.</p>
                            </div>
                            <Link href="/services/creation-site-internet" className='secondary-button'>En savoir plus</Link>
                        </div>
                        <div className={`${classes.service} design`}>
                            <div className={classes.serviceText}>
                                <h3>Conception de maquette</h3>
                                <p>Je conçois les maquettes de votre site internet à partir de vos besoins et l'image que vous souhaitez renvoyer.</p>
                            </div>
                            <Link href="services/conception-maquette" className='secondary-button'>En savoir plus</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;