import React, { useContext } from 'react';
import classes from './CarouselItem.module.css';
import { motion } from 'framer-motion';
import GlobalContext from '@/Store/GlobalContext';

const CarouselItem = ({ title, description, itemIndex, index }) => {

    const { isMobileResolution, isTabletResolution, isLaptopResolution } = useContext(GlobalContext);
    const scaleAnimation = () => {
        if (isMobileResolution) {
            return itemIndex === index ? 0.95 : 0.85;
        } else if (isTabletResolution || isLaptopResolution) {
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
            <div className={classes.textWrapper}>
                <h3 className={classes.title}>{title}</h3>
                <p className={classes.description}>{description}</p>
            </div>
        </motion.div>
    );
};

export default CarouselItem;