import React, { useContext } from 'react';
import classes from './Hero.module.css';
import Link from 'next/link';
import Image from 'next/image';
import GlobalContext from '@/Store/GlobalContext';
import heroImg from '@/public/images/accueil/hero_img.webp';

const Hero = () => {

    const { isMobileResolution, isTabletResolution, isDesktopResolution } = useContext(GlobalContext);

    return (


        <main className={classes.heroContainer}>
            <div className={`${classes.content} max-width`}>
                <div className={classes.textWrapper}>
                    <div className={classes.titleAndDescriptionWrapper}>
                        <h1 className={classes.title}>
                            Création de <span className="accentuedWord"> site {isDesktopResolution && <br className={classes.lineBreak} />} web </span>
                            {(isMobileResolution || isTabletResolution) && <br />}
                            en freelance
                        </h1>

                        <p className={classes.description}>Un site web qui attire {isMobileResolution && <br />} et convertit ses {isDesktopResolution && <br />} visiteurs</p>
                    </div>
                    <Link href="/contact" className='primary-button'>Discutons de votre besoin</Link>
                </div>
                <Image
                    src={heroImg}
                    alt='Image du développeur web Thomas André-Lubin'
                    priority={true}
                    placeholder='blur'
                    blurDataURL='/images/accueil/hero_img_low_quality.webp'
                    className={classes.heroImg}
                    width={400}
                    height={540}
                />
            </div>
        </main>
    );
};

export default Hero;