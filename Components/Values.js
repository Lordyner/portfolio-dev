import React from 'react';
import classes from './Values.module.scss';
import Image from 'next/image';
import happyClient from '../public/images/happy_client.svg'
import communication from '../public/images/communication.svg'
import quality from '../public/images/value_quality.svg'
import time from '../public/images/value_time.svg'

const Values = () => {
    return (
        <section id="values-section">
            <h2>VALEURS</h2>
            <div className={classes.values}>
                <div id={classes.topLeft} className={classes.value}>
                    <Image src={communication} alt='illustration de deux personnes se serrant la main, assise à une table face à face' />
                    <div className={classes.valueText}>
                        <h3 className={classes.title}>Ecoute</h3>
                        <span className={classes.description}>Répondre à vos besoins avec une solution adaptée est la raison pour laquelle je fais ce métier.<br />Pour cela, une bonne écoute est nécessaire.</span>
                    </div>
                </div>
                <div id={classes.topRight} className={classes.value}>
                    <Image src={time} alt="illustration d'une femme assise à côté d'un énorme réveil, la main sur l'aiguille des minutes." />
                    <div className={classes.valueText}>
                        <h3 className={classes.title}>Respect de votre temps</h3>
                        <span className={classes.description}>Le temps est une précieuse ressource, c'est pourquoi je m'engage à vous répondre dans les meilleurs délais et respecter les échéances.</span>
                    </div>
                </div>
                <div id={classes.bottomLeft} className={classes.value}>
                    <Image src={happyClient} alt="illustration d'un homme et d'une femme de couleur, tenant un document dans la main. La femme saute de joie." />
                    <div className={classes.valueText}>
                        <h3 className={classes.title}>Satisfaction client</h3>
                        <span className={classes.description}>Mes prestations comprennent plusieurs révisions, offerte, afin d'incorporer vos retours d'expérience et que vous soyez pleinement satisfait de votre produit.</span>
                    </div>
                </div>
                <div id={classes.bottomRight} className={classes.value}>
                    <Image src={quality} alt='illustration homme debout, les jambes croisées, devant une interface web' />
                    <div className={classes.valueText}>
                        <h3 className={classes.title}>Qualité</h3>
                        <span className={classes.description}>Je m'engage à développer des solutions webs de qualitées, qui pourront facilement être maintenues et évoluées.</span>
                    </div>
                </div>

            </div>
        </section >
    );
};

export default Values;