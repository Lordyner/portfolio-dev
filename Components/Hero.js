import React, { useContext } from 'react';
import classes from './Hero.module.css';
import Link from 'next/link';
import portfolioBgMobile from '../public/images/portfolio_bg_mobile_reduced.jpeg';
import Image from 'next/image';
import GlobalContext from '@/Store/GlobalContext';

const Hero = () => {

    const { isMobileResolution } = useContext(GlobalContext);
    const { isTabletResolution } = useContext(GlobalContext);

    return (
        <main id="home" className={classes.heroContainer}>
            <div className={classes.textWrapper}>
                <h1>Développeur web</h1>
                <div className={classes.valueProposition}>
                    <p>J'aide les entreprises à obtenir plus de clients à travers des solutions webs adaptés à leur besoins</p>
                </div>
                <Link href="/book-a-call" className='primary-call-to-action'>Réserver un appel</Link>
            </div>
            {/* {!isMobileResolution && <><Image src={rocket} id={classes.rocket} className={classes.handdrawn} alt="Fusée dessiné à la main" />

                <Image src={laptop} id={classes.laptop} className={classes.handdrawn} alt="Ordinateur portable dessiné à la main" />
                <Image src={githubMascot} id={classes.github} className={classes.handdrawn} alt="Mascotte de github dessiné à la main" /></>
            } */}
            {(isMobileResolution || isTabletResolution) && <Image src={portfolioBgMobile} alt='Thomas André-Lubin en train de développer sur son ordinateur' />}
        </main>
    );
};

export default Hero;