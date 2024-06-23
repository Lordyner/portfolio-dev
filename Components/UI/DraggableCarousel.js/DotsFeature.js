import React, { useContext } from 'react';
import classes from './Dots.module.css';
import GlobalContext from '@/Store/GlobalContext';

const DotsFeature = ({ featureIndex, setFeatureIndex, dots }) => {

    return (
        <div className={classes.dots}>
            {dots.map((dot, index) => {
                return (
                    <button key={index}
                        onClick={() => setFeatureIndex(index)}
                        className={`${classes.dot} ${featureIndex === index ? classes.active : ''}`} />
                );
            })}
        </div>
    );
};

export default DotsFeature;