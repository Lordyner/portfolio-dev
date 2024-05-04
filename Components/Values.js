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
    const { isLaptopResolution } = useContext(GlobalContext);
    const { isDesktopResolution } = useContext(GlobalContext);


    return (
        <section className={classes.valueSection}>
            <h2>Boostez votre visibilité, convertissez vos visiteurs.</h2>
            <div className={classes.valueProposition}>
                <p>Je crée des sites web impactants qui optimisent votre visibilité et vos conversions.</p>
            </div>

            {/* For laptop and desktop, we display values on the same row */}
            {(isLaptopResolution || isDesktopResolution) && <div className={classes.cardContainer}>
                <div className={classes.card}>
                    <div className={classes.imageWrapper}>
                        <div className={classes.imageBg}></div>
                        {/* <Image src={userExperience} alt="Icône d'un téléphone avec des retours d'utilisateurs et trois étoiles" /> */}
                    </div>
                    <h3>Expérience utilisateur</h3>
                    <p className={classes.valueDescription}>Une expérience utilisateur positive favorise la conversion en client.</p>
                </div>
                <div className={classes.card}>
                    <div className={classes.imageWrapper}>
                        <div className={classes.imageBg}></div>
                        {/* <Image src={iconSEO} alt="Icône SEO" /> */}
                    </div>
                    <h3>Bonnes pratiques SEO</h3>
                    <p className={classes.valueDescription}>Le respect des bonnes pratiques SEO aide votre site à obtenir plus de trafic.</p>
                </div>
                <div className={classes.card}>
                    <div className={classes.imageWrapper}>
                        <div className={classes.imageBg}></div>
                        {/* <Image src={customMade} alt="Icône d'une interface avec des jauges" /> */}
                    </div>
                    <h3>Site sur mesure</h3>
                    <p className={classes.valueDescription}>Chaque site que je réalise est construit sur mesure afin de répondre à vos besoins et coller à votre image.</p>
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
                                <Image src={userExperience} alt="Icône d'un téléphone avec des retours d'utilisateurs et trois étoiles" />
                            </div>
                            <h3>Expérience utilisateur</h3>
                            <p className={classes.valueDescription}>Une expérience utilisateur positive favorise la conversion en client.</p>
                        </div>
                    </SplideSlide>
                    <SplideSlide key="2">
                        <div className={classes.card}>
                            <div className={classes.imageWrapper}>
                                <div className={classes.imageBg}></div>
                                <Image src={iconSEO} alt="Icône SEO" />
                            </div>
                            <h3>Bonnes pratiques SEO</h3>
                            <p className={classes.valueDescription}>Le respect des bonnes pratiques SEO aide votre site à obtenir plus de trafic.</p>
                        </div>
                    </SplideSlide>
                    <SplideSlide key="3">
                        <div className={classes.card}>
                            <div className={classes.imageWrapper}>
                                <div className={classes.imageBg}></div>
                                <Image src={customMade} alt="Icône d'une interface avec des jauges" />
                            </div>
                            <h3>Site sur mesure</h3>
                            <p className={classes.valueDescription}>Chaque site que je réalise est construit sur mesure afin de répondre à vos besoins et coller à votre image.</p>
                        </div>
                    </SplideSlide>

                </Splide>
            }

            <div className={classes.buttonWrapper}>
                <Link href="/book-a-call" className='primary-button'>Réserver un appel</Link>
            </div>
        </section >
    );
};

export default Values;