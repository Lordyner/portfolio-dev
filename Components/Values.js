import React, { useContext } from 'react';
import classes from './Values.module.css';
import Image from 'next/image';
import GlobalContext from '@/Store/GlobalContext';
import Link from 'next/link';
import professionnalismeGif from '@/public/images/mobile/about/professionnalisme.gif';
import communicationGif from '@/public/images/mobile/about/communication.gif';
import satisfactionClientGif from '@/public/images/mobile/about/satisfaction_client.gif';

const Values = () => {
    const { isMobileResolution } = useContext(GlobalContext);
    const { isTabletResolution } = useContext(GlobalContext);
    const { isDesktopResolution } = useContext(GlobalContext);


    return (
        <section className={classes.valueSection}>
            <div className={`${classes.content} max-width`}>
                <h2>Mes <span className="accentuedWord">valeurs</span></h2>
                <div className={classes.values}>
                    <div className={classes.value}>
                        <Image src={professionnalismeGif} alt="expertise technique" className={classes.icon} />
                        <div className={classes.textWrapper}>
                            <h3>Professionnalisme</h3>
                            <p>Respect des délais, ponctualité et respect des engagements</p>
                        </div>
                    </div>
                    <div className={classes.value}>
                        <Image src={communicationGif} alt="communication" className={classes.icon} />
                        <div className={classes.textWrapper}>
                            <h3>Communication</h3>
                            <p>Facilement joignable, mise à jour fréquente sur l'avancement du projet</p>
                        </div>
                    </div>
                    <div className={classes.value}>
                        <Image src={satisfactionClientGif} alt="engagement" className={classes.icon} />
                        <div className={classes.textWrapper}>
                            <h3>Satisfaction client</h3>
                            <p>Accompagnement, retouches et maintenance</p>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    );
};

export default Values;