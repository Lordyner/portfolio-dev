import React, { useContext, useEffect, useState } from 'react';
import classes from './Hero.module.css';
import Link from 'next/link';
import Image from 'next/image';
import GlobalContext from '@/Store/GlobalContext';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import CursorBlinker from './UI/CursorBlinker';

const Hero = () => {

    const { isMobileResolution, isTabletResolution } = useContext(GlobalContext);
    const [classicImageSelected, setClassicImageSelected] = useState(false);
    const heroImages = [
        meWhileDeveloping,
        heroImgManga
    ]
    const textIndex = useMotionValue(0);
    const texts = [
        "e-commerce ",
        "vitrine "
    ];

    const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
        baseText.get().slice(0, latest)
    );
    const updatedThisRound = useMotionValue(true);

    useEffect(() => {
        animate(count, 60, {
            type: "tween",
            duration: 1,
            ease: "easeIn",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1,
            onUpdate(latest) {
                if (updatedThisRound.get() === true && latest > 0) {
                    updatedThisRound.set(false);
                } else if (updatedThisRound.get() === false && latest === 0) {
                    if (textIndex.get() === texts.length - 1) {
                        textIndex.set(0);
                    } else {
                        textIndex.set(textIndex.get() + 1);
                    }
                    updatedThisRound.set(true);
                }
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (

        <main id="home" className={classes.heroContainer}>
            <div className={classes.textWrapper}>
                <h1>Création de site <br />
                    <CursorBlinker /><motion.span className={classes.accentWord}>{displayText}</motion.span><br />
                    adapté à vos besoins</h1>
                <Link href="/book-a-call" className='primary-button'>Réserver un appel</Link>
            </div>
            {/* <div className={classes.imgWrapper}>
                <Image src={meWhileDeveloping} alt="Développeur web freelance" className={classes.heroImg} />
            </div> */}

            <div className={classes.slider}>
                <div className={classes.sliderTrack}>
                    <Image src={meWhileDeveloping} alt="Développeur web freelance" className={classes.imgCarousel} />
                    <Image src={office} alt="Développeur web freelance" className={classes.imgCarousel} />
                    <Image src={rightArrowImg} alt="Développeur web freelance" className={classes.imgCarousel} />
                    <Image src={myCode} alt="Développeur web freelance" className={`${classes.imgCarousel} ${classes.focusLeft}`} />
                    <Image src={meWhileDeveloping} alt="Développeur web freelance" className={classes.imgCarousel} />
                    <Image src={office} alt="Développeur web freelance" className={classes.imgCarousel} />
                    <Image src={rightArrowImg} alt="Développeur web freelance" className={classes.imgCarousel} />
                    <Image src={myCode} alt="Développeur web freelance" className={classes.imgCarousel} />
                </div>
            </div>
        </main>
    );
};

export default Hero;