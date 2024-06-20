import React, { useContext } from 'react';
import classes from './Mission.module.css';
import Image from 'next/image';
import GlobalContext from '@/Store/GlobalContext';

const Mission = () => {

    const { isDesktopResolution } = useContext(GlobalContext);
    return (
        <section className={`${classes.missionContainer} `}>
            <div className={`${classes.wrapper} max-width`}>
                <h2>Ma mission de<br /> développeur web</h2>
                <div className={classes.content}>
                    <div className={classes.textWrapper}>
                        <p>
                            J'accompagne les entreprises dans la création de leur site internet, de la conception de la maquette en passant par le développement, jusqu'à la livraison.<br /><br />
                            Pour moi un site internet est un investissement et il doit donc avoir un objectif quantifiable (prise de contact, demande de devis ...) qui profitera à votre entreprise et pourra être suivi.<br /><br />
                            C'est pourquoi je mets un point d'honneur à comprendre votre domaine d'activité et vos besoins afin de vous proposer les meilleurs solutions web.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;