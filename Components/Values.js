import React, { useContext } from 'react';
import classes from './Values.module.css';
import Image from 'next/image';
import happyClient from '../public/images/happy_client.svg'
import communication from '../public/images/communication.svg'
import quality from '../public/images/value_quality.svg'
import time from '../public/images/value_time.svg'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import clock from '@/public/images/clock.png';
import GlobalContext from '@/Store/GlobalContext';

const Values = () => {
    const { isMobileResolution } = useContext(GlobalContext);
    const { isTabletResolution } = useContext(GlobalContext);
    const { isLaptopResolution } = useContext(GlobalContext);
    const { isDesktopResolution } = useContext(GlobalContext);


    return (
        <section className={classes.valueSection}>
            <h2>Proposition de valeur</h2>
            <div className={classes.valueProposition}>
                <p>Description de ma proposition de valeur. A qui ? Quoi ? Comment ? Pourquoi ?</p>
                <p>Lorepsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna augue, sagittis id lectus </p>
            </div>

            {/* For laptop and desktop, we display values on the same row */}
            {(isLaptopResolution || isDesktopResolution) && <div className={classes.cardContainer}>
                <div className={classes.card}>
                    <div className={classes.imageWrapper}>
                        <div className={classes.imageBg}></div>
                        <Image src={clock} alt="Icône d'horloge" />
                    </div>
                    <h3>Respect des deadlines</h3>
                    <p className={classes.valueDescription}>Description de ma proposition de valeur. A qui ? Quoi ? Comment ? Pourquoi ?</p>
                </div>
                <div className={classes.card}>
                    <div className={classes.imageWrapper}>
                        <div className={classes.imageBg}></div>
                        <Image src={clock} alt="Icône d'horloge" />
                    </div>
                    <h3>Respect des deadlines</h3>
                    <p className={classes.valueDescription}>Description de ma proposition de valeur. A qui ? Quoi ? Comment ? Pourquoi ?</p>
                </div>
                <div className={classes.card}>
                    <div className={classes.imageWrapper}>
                        <div className={classes.imageBg}></div>
                        <Image src={clock} alt="Icône d'horloge" />
                    </div>
                    <h3>Respect des deadlines</h3>
                    <p className={classes.valueDescription}>Description de ma proposition de valeur. A qui ? Quoi ? Comment ? Pourquoi ?</p>
                </div>
            </div>}
            {/* For mobile, we use a carousel to display values */}
            {(isMobileResolution || isTabletResolution) &&
                <Splide
                    options={{
                        perPage: 1,
                        rewind: true,
                        gap: '1rem',
                        pagination: true,
                        arrows: false,
                    }}
                >

                    <SplideSlide key="1">
                        <div className={classes.card}>
                            <div className={classes.imageWrapper}>
                                <div className={classes.imageBg}></div>
                                <Image src={clock} alt="Icône d'horloge" />
                            </div>
                            <h3>Respect des deadlines</h3>
                            <p className={classes.valueDescription}>Description de ma proposition de valeur. A qui ? Quoi ? Comment ? Pourquoi ?</p>
                        </div>
                    </SplideSlide>
                    <SplideSlide key="2">
                        <div className={classes.card}>
                            <div className={classes.imageWrapper}>
                                <div className={classes.imageBg}></div>
                                <Image src={clock} alt="Icône d'horloge" />
                            </div>
                            <h3>Respect des deadlines</h3>
                            <p className={classes.valueDescription}>Description de ma proposition de valeur. A qui ? Quoi ? Comment ? Pourquoi ?</p>
                        </div>
                    </SplideSlide>
                    <SplideSlide key="3">
                        <div className={classes.card}>
                            <div className={classes.imageWrapper}>
                                <div className={classes.imageBg}></div>
                                <Image src={clock} alt="Icône d'horloge" />
                            </div>
                            <h3>Respect des deadlines</h3>
                            <p className={classes.valueDescription}>Description de ma proposition de valeur. A qui ? Quoi ? Comment ? Pourquoi ?</p>
                        </div>
                    </SplideSlide>

                </Splide>
            }

            <div className={classes.buttonWrapper}>
                <button className='primary-button'>Réserver un appel</button>
            </div>
        </section >
    );
};

export default Values;