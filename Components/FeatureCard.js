import React from 'react';
import classes from './FeatureCard.module.css';
import Image from 'next/image';
import { motion, useMotionValue } from "framer-motion";


const FeatureCard = ({ title, description, image, alt, featureIndex, index }) => {
    return (
        <motion.div className={classes.featureCard}
            animate={{
                scale: featureIndex === index ? 0.95 : 0.85
            }}
            transition={{
                type: "spring",
                mass: 3,
                stiffness: 400,
                damping: 40
            }}
        >
            <Image src={image} alt={alt} className={classes.cardImage} />
            <div className={classes.featureCardText}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </motion.div >
    );
};

export default FeatureCard;