import React, { useContext } from 'react';
import classes from './Dots.module.css';
import GlobalContext from '@/Store/GlobalContext';

const Dots = ({ itemIndex, setItemIndex, dots }) => {

    return (
        <div className={classes.dots}>
            {dots.map((dot, index) => {
                return (
                    <button key={index}
                        onClick={() => setItemIndex(index)}
                        className={`${classes.dot} ${itemIndex === index ? classes.active : ''}`} />
                );
            })}
        </div>
    );
};

export default Dots;