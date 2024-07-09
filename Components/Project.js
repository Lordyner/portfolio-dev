import React, { useContext } from 'react';
import classes from './Project.module.css';
import { motion, } from "framer-motion";

import Image from 'next/image';
import GlobalContext from '@/Store/GlobalContext';
import Link from 'next/link';
import audiophileResponsiveMockup from '@/public/images/projets/audiophile/audiophile_responsive_mockup.avif';
import photosnapResponsiveMockup from '@/public/images/projets/photosnap/photosnap_mockup_responsive_homepage.avif';
import coffeeRoastersImg from '@/public/images/accueil/projets/coffee_roasters.webp';
import payApiImg from '@/public/images/accueil/projets/payApi.webp';
import myTeamImg from '@/public/images/accueil/projets/myTeam.webp';
import newsImg from '@/public/images/accueil/projets/news_homepage.webp';


const Project = () => {


    return (
        <section id='realisations' className={classes.projectSection}>
            <div className={`${classes.content} max-width`}>
                <h2>Mes <span className='accentuedWord'>réalisations</span></h2>
                <p>Découvrez mes projets</p>
                <div className={classes.projects}>
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
                                <p className={classes.description}>Site e-commerce pour des appareils de musique (casques, enceintes etc).</p>
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
                                <p className={classes.description}>Plateforme pour photographe afin de partager des photos, des histoires et se connecter avec les autres.</p>
                            </div>
                        </Link>
                    </motion.div>
                    <motion.div className={classes.project}
                        whileHover={{ scale: 1.02, cursor: 'pointer' }}
                        whileTap={{ scale: 0.9 }}>
                        <Link href={`projets/coffeeRoasters`} className={classes.cardLink}>
                            <Image src={coffeeRoastersImg} alt="Page d'accueil du site coffeeRoasters" className={classes.projectImage} width={720} height={300} quality={50} sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 720px" />
                            <div className={classes.textWrapper}>
                                <h3 className={classes.projectTitle}>Coffee roasters</h3>
                                <p className={classes.description}>Site de commande de café avec différents abonnements et la meilleur qualité de café.</p>
                            </div>
                        </Link>
                    </motion.div>
                    <motion.div className={classes.project}
                        whileHover={{ scale: 1.02, cursor: 'pointer' }}
                        whileTap={{ scale: 0.9 }}>
                        <Link href={`projets/payApi`} className={classes.cardLink}>
                            <Image src={payApiImg} alt="Page d'accueil du site payAPI" className={classes.projectImage} width={720} height={300} quality={50} sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 720px" />
                            <div className={classes.textWrapper}>
                                <h3 className={classes.projectTitle}>payAPI</h3>
                                <p className={classes.description}>Site pour une API ("Application Programming Interface") Bancaire.</p>
                            </div>
                        </Link>
                    </motion.div>
                    <motion.div className={classes.project}
                        whileHover={{ scale: 1.02, cursor: 'pointer' }}
                        whileTap={{ scale: 0.9 }}>
                        <Link href={`projets/myTeam`} className={classes.cardLink}>
                            <Image src={myTeamImg} alt="Page d'accueil du site MyTeam" className={classes.projectImage} width={720} height={300} quality={50} sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 720px" />
                            <div className={classes.textWrapper}>
                                <h3 className={classes.projectTitle}>myTeam</h3>
                                <p className={classes.description}>Site pour un cabinet de recrutement spécialisé dans la construction d'équipe talentueuse</p>
                            </div>
                        </Link>
                    </motion.div>
                    <motion.div className={classes.project}
                        whileHover={{ scale: 1.02, cursor: 'pointer' }}
                        whileTap={{ scale: 0.9 }}>
                        <Link href={`projets/news`} className={classes.cardLink}>
                            <Image src={newsImg} alt="news" className={classes.projectImage} width={720} height={300} quality={50} sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 720px" />
                            <div className={classes.textWrapper}>
                                <h3 className={classes.projectTitle}>News</h3>
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