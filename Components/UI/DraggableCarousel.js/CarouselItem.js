import React, { useContext } from 'react';
import classes from './CarouselItem.module.css';
import { motion } from 'framer-motion';
import GlobalContext from '@/Store/GlobalContext';
import Image from 'next/image';

const CarouselItem = ({ title, description, image, itemIndex, index }) => {

    const { isMobileResolution, isTabletResolution } = useContext(GlobalContext);
    const scaleAnimation = () => {
        if (isMobileResolution) {
            return itemIndex === index ? 0.95 : 0.85;
        } else if (isTabletResolution) {
            return 0.95;
        } else {
            return 1;

        }
    }

    return (
        <motion.div
            animate={{
                scale: scaleAnimation()
            }}
            transition={{
                type: "spring",
                mass: 3,
                stiffness: 400,
                damping: 40
            }}
            className={classes.card}>
            {image && <Image src={image} alt={title} className={classes.carouselImg} />}
            <div className={classes.textWrapper}>
                <h3 className={classes.title}>{title}</h3>
                <p className={classes.description} dangerouslySetInnerHTML={{ __html: description }}></p>
            </div>
        </motion.div >
    );
};

export default CarouselItem;