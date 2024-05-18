import React from 'react';
import classes from './ServicePresentation.module.css';
import Link from 'next/link';
import Features from './Features';
const ServicePresentation = ({ service }) => {
    return (
        <>

            {service &&
                <>
                    <main className={classes.serviceContainer}>
                        <div className={classes.content}>

                            <h1 className={classes.serviceTitle}>{service?.title}</h1>
                            <p className={classes.description}>{service?.description}</p>
                            <div className={classes.buttonWrapper}>
                                <Link href="/contact" className='primary-button'>Discutons de votre projet</Link>
                            </div>
                        </div>
                    </main>
                    <Features features={service.features} />
                </>
            }
            {!service && <h1 className={classes.serviceTitle}>Service non trouvée</h1>}
        </>
    );
};

export default ServicePresentation;