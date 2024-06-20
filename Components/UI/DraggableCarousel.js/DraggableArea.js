import React, { useContext } from 'react';
import CarouselItem from './CarouselItem';
import { motion, useMotionValue } from "framer-motion";
import GlobalContext from '@/Store/GlobalContext';
import classes from './DraggableArea.module.css';

const DraggableArea = ({ items, itemIndex, onDragEnd, onDragStart, dragX }) => {

    return (
        <motion.div
            drag="x"
            dragConstraints={{
                left: 0,
                right: 0
            }}
            style={{
                x: dragX
            }}
            animate={{
                translateX: `-${itemIndex * 100}%`
            }}
            transition={{
                type: "spring",
                mass: 3,
                stiffness: 400,
                damping: 40
            }}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            className={classes.draggableArea}
        >
            {items.map((item, index) => (
                <CarouselItem key={index} title={item.title} description={item.description} image={item.image} itemIndex={itemIndex} index={index} />
            ))}
        </motion.div>

    );
};

export default DraggableArea;