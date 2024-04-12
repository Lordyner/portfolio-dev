import React from 'react';
import { motion } from "framer-motion";
import classes from './CursorBlinker.module.css';

const CursorBlinker = () => {

    const cursorVariants = {
        blinking: {
            opacity: [0, 0, 1, 1],
            transition: {
                duration: 1,
                repeat: Infinity,
                repeatDelay: 0,
                ease: "linear",
                times: [0, 0.5, 0.5, 1]
            }
        }
    };
    return (
        <motion.div
            variants={cursorVariants}
            animate="blinking"
            className={classes.blinker}
        />
    );
};

export default CursorBlinker;