import React, { useState } from 'react';
import classes from './Features.module.css';
import FeatureCard from './FeatureCard';
import { motion, useMotionValue } from "framer-motion";
import Dots from './UI/Dots';

const DRAG_BUFFER = 50;

const Features = ({ features }) => {

    const [featureIndex, setFeatureIndex] = useState(0);
    const [dragging, setDragging] = useState(false);

    const dragX = useMotionValue(0);

    const onDragStart = () => {
        setDragging(true);
    };
    const onDragEnd = () => {
        setDragging(false);
        const x = dragX.get();
        if (x <= -DRAG_BUFFER && featureIndex < features.length - 1) {
            setFeatureIndex((previousValue) => previousValue + 1);
        } else if (x >= DRAG_BUFFER && featureIndex > 0) {
            setFeatureIndex((previousValue) => previousValue - 1);
        }
    };

    return (
        <section className={classes.features}>
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
                        translateX: `-${featureIndex * 100}% `
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
                <Dots featureIndex={featureIndex} setFeatureIndex={setFeatureIndex} features={features} />
            </div>

        </section>
    );
};

export default Features;