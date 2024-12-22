import React, { useContext } from 'react';
import classes from './Project.module.css';
import { motion, } from "framer-motion";

import Image from 'next/image';
import GlobalContext from '@/Store/GlobalContext';
import Link from 'next/link';
import audiophileResponsiveMockup from '@/public/images/projets/audiophile/audiophile_responsive_mockup.avif';
import photosnapResponsiveMockup from '@/public/images/projets/photosnap/photosnap_mockup_responsive_homepage.avif';
import coffeeRoastersResponsiveMockup from '@/public/images/projets/coffeeRoasters/coffeeRoasters_mockup_responsive_homepage.avif';
import payAPIResponsiveMockup from '@/public/images/projets/payAPI/payAPI_mockup_responsive_homepage.avif';
import myTeamResponsiveMockup from '@/public/images/projets/myTeam/myTeam_mockup_responsive_homepage.avif';
import waterlineResponsiveMockup from '@/public/images/projets/waterline/site-web-waterline-responsive.webp';
import sudOuestHabitatResponsiveMockup from '@/public/images/projets/sudOuestHabitat/mockup_homepage_responsive_sudOuestHabitat.avif';

const Project = () => {


    return (
        <section id='realisations' className={classes.projectSection}>
            <div className={`${classes.content} max-width`}>
                <h2>Mes créations de site <span className='accentuedWord'>internet sur mesure</span></h2>
                <p>Découvrez mes projets de site web sur mesure pour mes différents clients.</p>
                <div className={classes.projects}>
                    <motion.div className={classes.project}
                        whileHover={{ scale: 1.02, cursor: 'pointer' }}
                        whileTap={{ scale: 0.9 }}>
                        <Link href={`projets/sud-ouest-habitat`} className={classes.cardLink}>
                            <Image src={sudOuestHabitatResponsiveMockup} alt="Mockup responsive de la page d'accueil du site Sud Ouest Habitat"
                                className={classes.projectImage}
                                width={720} height={300} quality={50}
                                sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 720px"
                            />
                            <div className={classes.textWrapper}>
                                <h3 className={classes.projectTitle}>Sud Ouest Habitat</h3>
                                <p className={classes.description}>Création d'un site vitrine pour une entreprise spécialisé en maçonnerie, terrassement et couverture.</p>
                            </div>
                        </Link>
                    </motion.div>
                    <motion.div className={classes.project}
                        whileHover={{ scale: 1.02, cursor: 'pointer' }}
                        whileTap={{ scale: 0.9 }}>
                        <Link href={`projets/waterline`} className={classes.cardLink}>
                            <Image src={waterlineResponsiveMockup} alt="Mockup responsive de la page d'accueil du site Waterline"
                                className={classes.projectImage}
                                width={720} height={300} quality={50}
                                sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 720px"
                            />
                            <div className={classes.textWrapper}>
                                <h3 className={classes.projectTitle}>Waterline</h3>
                                <p className={classes.description}>Création d'un site vitrine pour une entreprise de construction de piscine.</p>
                            </div>
                        </Link>
                    </motion.div>
                    <motion.div className={classes.project}
                        whileHover={{ scale: 1.02, cursor: 'pointer' }}
                        whileTap={{ scale: 0.9 }}>
                        <Link href={`projets/audiophile`} className={classes.cardLink}>
                            <Image src={audiophileResponsiveMockup} alt="Mockup responsive de la page d'accueil du site Audiophile"
                                className={classes.projectImage}
                                width={720} height={300} quality={50}
                                sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 720px"
                            />
                            <div className={classes.textWrapper}>
                                <h3 className={classes.projectTitle}>Audiophile</h3>
                                <p className={classes.description}>Création d'un site e-commerce pour vendre des appareils de musique (casques, enceintes etc).</p>
                            </div>
                        </Link>
                    </motion.div>
                    <motion.div className={classes.project}
                        whileHover={{ scale: 1.02, cursor: 'pointer' }}
                        whileTap={{ scale: 0.9 }}>
                        <Link href={`projets/photosnap`} className={classes.cardLink}>
                            <Image src={photosnapResponsiveMockup} alt="Mockup responsive de la page d'accueil du site Photosnap" className={classes.projectImage} width={720} height={300} quality={50} sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 720px" />
                            <div className={classes.textWrapper}>
                                <h3 className={classes.projectTitle}>Photosnap</h3>
                                <p className={classes.description}>Création d'un site vitrine pour photographe afin de partager des photos, des histoires et se connecter avec les autres.</p>
                            </div>
                        </Link>
                    </motion.div>
                    <motion.div className={classes.project}
                        whileHover={{ scale: 1.02, cursor: 'pointer' }}
                        whileTap={{ scale: 0.9 }}>
                        <Link href={`projets/coffeeRoasters`} className={classes.cardLink}>
                            <Image src={coffeeRoastersResponsiveMockup} alt="Mockup responsive de la page d'accueil du site CoffeeRoasters" className={classes.projectImage} width={720} height={300} quality={50} sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 720px" />
                            <div className={classes.textWrapper}>
                                <h3 className={classes.projectTitle}>Coffee roasters</h3>
                                <p className={classes.description}>Création d'un site d'abonnement de livraison de café, pour les amoureux du bon café.</p>
                            </div>
                        </Link>
                    </motion.div>
                    <motion.div className={classes.project}
                        whileHover={{ scale: 1.02, cursor: 'pointer' }}
                        whileTap={{ scale: 0.9 }}>
                        <Link href={`projets/payApi`} className={classes.cardLink}>
                            <Image src={payAPIResponsiveMockup} alt="Page d'accueil du site payAPI" className={classes.projectImage} width={720} height={300} quality={50} sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 720px" />
                            <div className={classes.textWrapper}>
                                <h3 className={classes.projectTitle}>payAPI</h3>
                                <p className={classes.description}>Création d'un site vitrine pour présenter une API ("Application Programming Interface") bancaire.</p>
                            </div>
                        </Link>
                    </motion.div>
                    <motion.div className={classes.project}
                        whileHover={{ scale: 1.02, cursor: 'pointer' }}
                        whileTap={{ scale: 0.9 }}>
                        <Link href={`projets/myTeam`} className={classes.cardLink}>
                            <Image src={myTeamResponsiveMockup} alt="Page d'accueil du site MyTeam" className={classes.projectImage} width={720} height={300} quality={50} sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 720px" />
                            <div className={classes.textWrapper}>
                                <h3 className={classes.projectTitle}>myTeam</h3>
                                <p className={classes.description}>Création d'un site vitrine pour un cabinet de recrutement spécialisé dans la construction d'équipes talentueuse</p>
                            </div>
                        </Link>
                    </motion.div>


                </div>
            </div>
        </section >
    );
};



export default Project;