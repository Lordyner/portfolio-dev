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
                    <p>J'aide les entreprises à obtenir plus de clients en leur développant un site internet sur-mesure.</p>
                </div>
                <Link href="/book-a-call" className='primary-call-to-action'>Réserver un appel</Link>
            </div>
            {(isMobileResolution || isTabletResolution) && <Image src={portfolioBgMobile} alt='Thomas André-Lubin en train de développer sur son ordinateur' />}
        </main>
    );
};

export default Hero;