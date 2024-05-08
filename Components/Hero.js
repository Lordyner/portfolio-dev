import React, { useContext, useEffect, useState } from 'react';
import classes from './Hero.module.css';
import Link from 'next/link';
import Image from 'next/image';
import GlobalContext from '@/Store/GlobalContext';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import CursorBlinker from './UI/CursorBlinker';
import heroImgMobile from '@/public/images/mobile/hero_img_mobile.png';
import heroImgDesktop from '@/public/images/desktop/hero_img_desktop.png';
const Hero = () => {

    const { isMobileResolution, isTabletResolution, isDesktopResolution } = useContext(GlobalContext);

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

        <main className={classes.heroContainer}>
            <div className={`${classes.content} max-width`}>
                <div className={classes.textWrapper}>
                    <h1>Création de site <br />
                        <CursorBlinker /><motion.span className={classes.accentWord}>{displayText}</motion.span><br />
                        adapté à vos besoins</h1>
                    <Link href="/book-a-call" className='primary-button'>Me contacter</Link>
                </div>
                {/* <Image src={heroImgMobile} alt='hero image' className={classes.heroImg} /> */}
                <Image src={isMobileResolution ? heroImgMobile : isTabletResolution ? heroImgMobile : heroImgDesktop} alt='hero image' className={classes.heroImg} />
            </div>
        </main>
    );
};

export default Hero;