import React, { useContext, useState } from 'react';
import DraggableArea from './DraggableArea';
import Dots from './Dots';
import GlobalContext from '@/Store/GlobalContext';
import { useMotionValue } from 'framer-motion';
import classes from './DraggableCarousel.module.css';

const DRAG_BUFFER = 30;

const DraggableCarousel = ({ items }) => {

    const { isMobileResolution, isTabletResolution, isLaptopResolution } = useContext(GlobalContext);
    const INDEX_BUFFER = isMobileResolution ? 1 : 2;
    const [itemIndex, setItemIndex] = useState(0);
    const [dragging, setDragging] = useState(false);

    const dots = isMobileResolution ? items : items.slice(0, (items.length) / 2);

    const dragX = useMotionValue(0);

    const onDragStart = () => {
        setDragging(true);
    };


    const onDragEnd = () => {
        setDragging(false);
        const x = dragX.get();
        if (x <= -DRAG_BUFFER && itemIndex < dots.length - 1) {
            setItemIndex((previousValue) => previousValue + 1);
        } else if (x >= DRAG_BUFFER && itemIndex > 0) {
            setItemIndex((previousValue) => previousValue - 1);
        }
    };

    return (
        <div className={classes.carousel}>
            <DraggableArea items={items} itemIndex={itemIndex} onDragEnd={onDragEnd} onDragStart={onDragStart} dragX={dragX} />
            <Dots itemIndex={itemIndex} setItemIndex={setItemIndex} dots={dots} />
        </div>
    );
};

export default DraggableCarousel;