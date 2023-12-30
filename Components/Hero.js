import React, { useContext } from 'react';
import classes from './Hero.module.css';
import Link from 'next/link';
import portfolioBgMobile from '../public/images/portfolio_bg_mobile_reduced.jpeg';
import Image from 'next/image';
import GlobalContext from '@/Store/GlobalContext';
import rocket from '@/public/images/rocket_handdrawn.svg';
import laptop from '@/public/images/laptop_handdrawn.svg';
import githubMascot from '@/public/images/github_handdrawn.svg';

const Hero = () => {

    const { isMobileResolution } = useContext(GlobalContext);

    return (
        <main className={classes.heroContainer}>
            <div className={classes.textWrapper}>
                <h1>Développeur web</h1>
                <div className={classes.valueProposition}>
                    <p>J'aide les entreprises à obtenir plus de clients à travers des solutions webs adaptés à leur besoins</p>
                </div>
                <Link href="#" alt='Thomas André-Lubin en train de développer sur son ordinateur' className='primary-call-to-action'>Réserver un appel</Link>
            </div>
            {/* {!isMobileResolution && <><Image src={rocket} id={classes.rocket} className={classes.handdrawn} alt="Fusée dessiné à la main" />

                <Image src={laptop} id={classes.laptop} className={classes.handdrawn} alt="Ordinateur portable dessiné à la main" />
                <Image src={githubMascot} id={classes.github} className={classes.handdrawn} alt="Mascotte de github dessiné à la main" /></>
            } */}
            {isMobileResolution && <Image src={portfolioBgMobile} />}
        </main>
    );
};

export default Hero;