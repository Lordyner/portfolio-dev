import React, { useContext, useState } from 'react';
import classes from './Features.module.css';
import FeatureCard from './FeatureCard';
import { motion, useMotionValue } from "framer-motion";
import Dots from './UI/DraggableCarousel.js/Dots';
import GlobalContext from '@/Store/GlobalContext';
import DotsFeature from './UI/DraggableCarousel.js/DotsFeature';

const DRAG_BUFFER = 30;


const Features = ({ features }) => {
    const { isMobileResolution, isTabletResolution, isLaptopResolution } = useContext(GlobalContext);
    const INDEX_BUFFER = isMobileResolution ? 1 : 2;
    const [featureIndex, setFeatureIndex] = useState(0);
    const [dragging, setDragging] = useState(false);

    const dots = isMobileResolution ? features : features.slice(0, (features.length) / 2);

    const dragX = useMotionValue(0);

    const onDragStart = () => {
        setDragging(true);
    };


    const onDragEnd = () => {
        setDragging(false);
        const x = dragX.get();
        if (x <= -DRAG_BUFFER && featureIndex < dots.length - 1) {
            setFeatureIndex((previousValue) => previousValue + 1);
        } else if (x >= DRAG_BUFFER && featureIndex > 0) {
            console.log('dragging left')
            setFeatureIndex((previousValue) => previousValue - 1);
        }
    };

    return (
        <section className={classes.features}>
            {(isMobileResolution || isTabletResolution || isLaptopResolution) &&
                <div className={`${classes.content} max-width`}>
                    <h2>Features</h2>

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
                            translateX: `-${featureIndex * 100}%`
                        }}
                        transition={{
                            type: "spring",
                            mass: 3,
                            stiffness: 400,
                            damping: 40
                        }}
                        onDragStart={onDragStart}
                        onDragEnd={onDragEnd}
                        className={classes.featuresList}
                    >
                        {features.map((feature, index) => (
                            <FeatureCard key={index} title={feature.name} description={feature.description} image={feature.image} alt={feature.alt} featureIndex={featureIndex} index={index} />
                        ))}
                    </motion.div>
                    <DotsFeature featureIndex={featureIndex} setFeatureIndex={setFeatureIndex} dots={dots} />
                </div>
            }
            {!(isMobileResolution || isTabletResolution || isLaptopResolution) &&
                <div className={`${classes.content} max-width`}>
                    <h2>Features</h2>
                    <div className={classes.featuresGrid}>
                        {features.map((feature, index) => (
                            <FeatureCard key={index} title={feature.name} description={feature.description} image={feature.image} alt={feature.alt} featureIndex={featureIndex} index={index} />
                        ))}
                    </div>
                </div>
            }

        </section>
    );
};

export default Features;