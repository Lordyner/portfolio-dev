import React, { useContext } from 'react';
import classes from './Project.module.css';
import audiophileMobile from '../public/images/mobile/audiophile.png';
import audiophileTablet from '../public/images/tablet/audiophile.png';
import audiophileDesktop from '../public/images/desktop/audiophile.png';
import payApiMobile from '@/public/images/mobile/payApi.png';
import payApiTablet from '@/public/images/tablet/payApi.png';
import payApiDesktop from '@/public/images/desktop/payApi.png';
import myTeamMobile from '@/public/images/mobile/myTeam.png';
import myTeamTablet from '@/public/images/tablet/myTeam.png';
import myTeamDesktop from '@/public/images/desktop/myTeam.png';
import newsHomepageMobile from '@/public/images/mobile/news_homepage.png';
import newsHomepageTablet from '@/public/images/tablet/news_homepage.png';
import newsHomepageDesktop from '@/public/images/desktop/news_homepage.png';
import photosnapMobile from '@/public/images/mobile/photosnap.png';
import photosnapTablet from '@/public/images/tablet/photosnap.png';
import photosnapDesktop from '@/public/images/desktop/photosnap.png';
import coffeeRoastersMobile from '@/public/images/mobile/coffee_roasters.png';
import coffeeRoastersTablet from '@/public/images/tablet/coffee_roasters.png';
import coffeeRoastersDesktop from '@/public/images/desktop/coffee_roasters.png';

import Image from 'next/image';
import GlobalContext from '@/Store/GlobalContext';
const Project = () => {

    const { isMobileResolution, isTabletResolution, isDesktopResolution } = useContext(GlobalContext);
    return (
        <section id='projects-section' className={classes.projectSection}>
            <div className={`${classes.content} max-width`}>
                <h2>Réalisations</h2>
                <div className={classes.projects}>
                    <div className={classes.project}>
                        <Image src={isMobileResolution ? audiophileMobile : isTabletResolution ? audiophileTablet : audiophileDesktop} alt='Audiophile' className={classes.projectImage} />
                        <div className={classes.textWrapper}>
                            <h3>Audiophile</h3>
                            <p className={classes.description}>Site e-commerce pour des appareils de musique. Connecté à une boutique Shopify, le propriétaire peut tout gérer...</p>
                        </div>
                    </div>
                    <div className={classes.project}>
                        <Image src={isMobileResolution ? photosnapMobile : isTabletResolution ? photosnapTablet : photosnapDesktop} alt='Photosnap' className={classes.projectImage} />
                        <div className={classes.textWrapper}>
                            <h3>Photosnap</h3>
                            <p className={classes.description}>Site e-commerce pour des appareils de musique. Connecté à une boutique Shopify, le propriétaire peut tout gérer...</p>
                        </div>
                    </div>
                    <div className={classes.project}>
                        <Image src={isMobileResolution ? coffeeRoastersMobile : isTabletResolution ? coffeeRoastersTablet : coffeeRoastersDesktop} alt='Coffee RoastersMobile' className={classes.projectImage} />
                        <div className={classes.textWrapper}>
                            <h3>Coffee roasters</h3>
                            <p className={classes.description}>Site e-commerce pour des appareils de musique. Connecté à une boutique Shopify, le propriétaire peut tout gérer...</p>
                        </div>
                    </div>
                    <div className={classes.project}>
                        <Image src={isMobileResolution ? myTeamMobile : isTabletResolution ? myTeamTablet : myTeamDesktop} alt='myTeam' className={classes.projectImage} />
                        <div className={classes.textWrapper}>
                            <h3>MyTeam</h3>
                            <p className={classes.description}>Site e-commerce pour des appareils de musique. Connecté à une boutique Shopify, le propriétaire peut tout gérer...</p>
                        </div>
                    </div>
                    <div className={classes.project}>
                        <Image src={isMobileResolution ? payApiMobile : isTabletResolution ? payApiTablet : payApiDesktop} alt='payAPI' className={classes.projectImage} />
                        <div className={classes.textWrapper}>
                            <h3>PayAPI</h3>
                            <p className={classes.description}>Site e-commerce pour des appareils de musique. Connecté à une boutique Shopify, le propriétaire peut tout gérer...</p>
                        </div>
                    </div>
                    <div className={classes.project}>
                        <Image src={isMobileResolution ? newsHomepageMobile : isTabletResolution ? newsHomepageTablet : newsHomepageDesktop} alt='news homepage' className={classes.projectImage} />
                        <div className={classes.textWrapper}>
                            <h3>News homepage</h3>
                            <p className={classes.description}>Site e-commerce pour des appareils de musique. Connecté à une boutique Shopify, le propriétaire peut tout gérer...</p>
                        </div>
                    </div>
                </div>



            </div>
        </section >
    );
};



export default Project;