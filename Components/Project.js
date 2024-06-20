import React, { useContext } from 'react';
import classes from './Project.module.css';
import { motion, } from "framer-motion";

import Image from 'next/image';
import GlobalContext from '@/Store/GlobalContext';
import Link from 'next/link';
import ProjectCard from './ProjectCard';

// 

const Project = () => {

    const { isMobileResolution, isTabletResolution, isDesktopResolution } = useContext(GlobalContext);

    return (
        <section id='realisations' className={classes.projectSection}>
            <div className={`${classes.content} max-width`}>
                <h2>Réalisations</h2>
                <div className={classes.projects}>

                    <motion.div className={classes.project}
                        whileHover={{ scale: 1.1, cursor: 'pointer' }}
                        whileTap={{ scale: 0.9 }}>
                        <Link href={`projets/audiophile`} className={classes.cardLink}>
                            {/* <Image src={isMobileResolution ? audiophileMobile : isTabletResolution ? audiophileTablet : audiophileDesktop} alt="audiophile" className={classes.projectImage} /> */}
                            <div className={classes.textWrapper}>
                                <h3>Audiophile</h3>
                                <p className={classes.description}>Site e-commerce pour des appareils de musique (casques, enceintes etc).</p>
                            </div>
                        </Link>
                    </motion.div>
                    <motion.div className={classes.project}
                        whileHover={{ scale: 1.1, cursor: 'pointer' }}
                        whileTap={{ scale: 0.9 }}>
                        <Link href={`projets/photosnap`} className={classes.cardLink}>
                            {/* <Image src={isMobileResolution ? photosnapMobile : isTabletResolution ? photosnapTablet : photosnapDesktop} alt="photosnap" className={classes.projectImage} /> */}
                            <div className={classes.textWrapper}>
                                <h3>Photosnap</h3>
                                <p className={classes.description}>Plateforme pour photographe afin de partager des photos, des histoires et se connecter avec les autres.</p>
                            </div>
                        </Link>
                    </motion.div>
                    <motion.div className={classes.project}
                        whileHover={{ scale: 1.1, cursor: 'pointer' }}
                        whileTap={{ scale: 0.9 }}>
                        <Link href={`projets/coffeeRoasters`} className={classes.cardLink}>
                            {/* <Image src={isMobileResolution ? coffeeRoastersMobile : isTabletResolution ? coffeeRoastersTablet : coffeeRoastersDesktop} alt="coffeeRoasters" className={classes.projectImage} /> */}
                            <div className={classes.textWrapper}>
                                <h3>Coffee roasters</h3>
                                <p className={classes.description}>Site de commande de café avec différents abonnements et la meilleur qualité de café.</p>
                            </div>
                        </Link>
                    </motion.div>
                    <motion.div className={classes.project}
                        whileHover={{ scale: 1.1, cursor: 'pointer' }}
                        whileTap={{ scale: 0.9 }}>
                        <Link href={`projets/payApi`} className={classes.cardLink}>
                            {/* <Image src={isMobileResolution ? payApiMobile : isTabletResolution ? payApiTablet : payApiDesktop} alt="payAPI" className={classes.projectImage} /> */}
                            <div className={classes.textWrapper}>
                                <h3>payAPI</h3>
                                <p className={classes.description}>Landing page pour une API Bancaire</p>
                            </div>
                        </Link>
                    </motion.div>
                    <motion.div className={classes.project}
                        whileHover={{ scale: 1.1, cursor: 'pointer' }}
                        whileTap={{ scale: 0.9 }}>
                        <Link href={`projets/myTeam`} className={classes.cardLink}>
                            {/* <Image src={isMobileResolution ? myTeamMobile : isTabletResolution ? myTeamTablet : myTeamDesktop} alt="myTeam" className={classes.projectImage} /> */}
                            <div className={classes.textWrapper}>
                                <h3>myTeam</h3>
                                <p className={classes.description}>Site pour un cabinet de recrutement spécialisé dans la construction d'équipe talentueuse</p>
                            </div>
                        </Link>
                    </motion.div>
                    <motion.div className={classes.project}
                        whileHover={{ scale: 1.1, cursor: 'pointer' }}
                        whileTap={{ scale: 0.9 }}>
                        <Link href={`projets/news`} className={classes.cardLink}>
                            {/* <Image src={isMobileResolution ? newsHomepageMobile : isTabletResolution ? newsHomepageTablet : newsHomepageDesktop} alt="news" className={classes.projectImage} /> */}
                            <div className={classes.textWrapper}>
                                <h3>News</h3>
                                <p className={classes.description}>Page d'accueil d'un blog gaming/nouvelles technologies</p>
                            </div>
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section >
    );
};



export default Project;