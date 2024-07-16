import React, { useContext } from 'react';
import classes from './Hero.module.css';
import Link from 'next/link';
import Image from 'next/image';
import GlobalContext from '@/Store/GlobalContext';
import heroImg from '@/public/images/accueil/hero_img.webp';

const Hero = () => {


    return (


        <main className={classes.heroContainer}>
            <div className={`${classes.content} max-width`}>
                <div className={classes.textWrapper}>
                    <div className={classes.titleAndDescriptionWrapper}>
                        <h1 className={classes.title}>
                            Création de <span className="accentuedWord"> site <br className={classes.lineBreak} /> web </span>

                            en freelance
                        </h1>

                        <h2 className={classes.description}>Création de site web sur mesure qui génère du <span className={classes.underlinedWord}>trafic</span> et des <span className={classes.underlinedWord}>prospects</span> pour votre activité</h2>
                    </div>

                    <Link href="/contact" className='primary-button'>Prendre rendez-vous</Link>
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