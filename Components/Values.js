import React, { useContext } from 'react';
import classes from './Values.module.css';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import GlobalContext from '@/Store/GlobalContext';
import Link from 'next/link';


const Values = () => {
    const { isMobileResolution } = useContext(GlobalContext);
    const { isTabletResolution } = useContext(GlobalContext);
    const { isDesktopResolution } = useContext(GlobalContext);


    return (
        <section className={classes.valueSection}>
            <div className={`${classes.content} max-width`}>
                <h2>Travaillez avec moi</h2>
                {/* <div className={classes.values}>
                    <div className={classes.value}>
                        <Image src={expertiseTechniqueIcon} alt="expertise technique" className={classes.icon} />
                        <div className={classes.textWrapper}>
                            <h3>Expertise technique</h3>
                            <p>+ 5 d'ans d'expériences dans le développent web à travailler sur différents projets</p>
                        </div>
                    </div>
                    <div className={classes.value}>
                        <Image src={communicationIcon} alt="communication" className={classes.icon} />
                        <div className={classes.textWrapper}>
                            <h3>Communication</h3>
                            <p>Je suis votre unique interlocuteur et vous tient au courant de l'avancé du projet</p>
                        </div>
                    </div>
                    <div className={classes.value}>
                        <Image src={engagementIcon} alt="engagement" className={classes.icon} />
                        <div className={classes.textWrapper}>
                            <h3>Engagement</h3>
                            <p>Je travaille sur un projet à la fois et j'ai à cœur que le résultat dépasse vos attentes </p>
                        </div>
                    </div>
                </div> */}
            </div>

        </section >
    );
};

export default Values;