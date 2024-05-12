import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useAnimation } from "framer-motion";
import classes from './CardSwip.module.css';

const CardStat = ({ title, description, handleShuffle, position }) => {
    const mousePosRef = useRef(0);

    const onDragStart = (e) => {
        mousePosRef.current = e.clientX;
    };

    const onDragEnd = (e) => {
        const diff = mousePosRef.current - e.clientX;

        if (diff > 150) {
            handleShuffle();
        }

        mousePosRef.current = 0;
    };

    const x = position === "front" ? "0%" : position === "middle" ? "5%" : "10%";
    const rotateZ =
        position === "front" ? "-3deg" : position === "middle" ? "0deg" : "3deg";
    const zIndex = position === "front" ? "2" : position === "middle" ? "1" : "0";

    const draggable = position === "front";

    return (
        <motion.div className={classes.card}
            style={{
                zIndex,
            }}
            animate={{ rotate: rotateZ, x }}
            drag
            dragElastic={0.35}
            dragListener={draggable}
            dragConstraints={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            }}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            transition={{
                duration: 0.35,
            }}
        >
            <h3 className={classes.title}>{title}</h3>
            <p className={classes.description}>{description}</p>
        </motion.div>
    );
};

export default CardStat;