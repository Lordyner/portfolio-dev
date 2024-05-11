import React from 'react';
import classes from './Dots.module.css';
const Dots = ({ featureIndex, setFeatureIndex, features }) => {
    return (
        <div className={classes.dots}>
            {features.map((feature, index) => {
                return (
                    // <div key={index} className={`${classes.dot} ${featureIndex === index ? classes.active : ''}`} onClick={() => setFeatureIndex(index)}></div>
                    <button key={index}
                        onClick={() => setFeatureIndex(index)}
                        className={`${classes.dot} ${featureIndex === index ? classes.active : ''}`} />
                );
            })}
        </div>
    );
};

export default Dots;