import React, { useContext } from 'react';
import classes from './Services.module.css';
import Link from 'next/link';
import ServiceItem from './ServiceItem';
import GlobalContext from '@/Store/GlobalContext';

const Services = () => {

    const { servicesData } = useContext(GlobalContext);

    return (
        <section className={`${classes.container}`}>
            <div className={`${classes.content} max-width`}>
                <h2>Services</h2>
                <p className={classes.description}>Je vous accompagne en tant que développeur web freelance à travers différents services. De l'audit à la conception de maquette et au développement de site, je mets à disposition mon expertise.</p>
                <div className={`${classes.services} full-width`}>
                    <div className={classes.servicesWrapper}>
                        {servicesData.map((service, index) => (
                            <ServiceItem key={index} title={service.title} description={service.description} link={service.link} className={service.className} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;