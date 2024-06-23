import React from 'react';
import classes from './Feedback.module.css';
import CarouselFeedback from './CarouselFeedback';
const Feedback = () => {
    return (
        <section className={classes.container}>
            <div className={`${classes.content} max-width`}>
                <div className={classes.textWrapper}>
                    <h2>Ils ont <span className='accentuedWord'>travaillé avec moi</span></h2>
                    <p>Consultez les avis de ceux qui ont collaboré avec moi.</p>
                </div>
                <CarouselFeedback />
            </div>
        </section>
    );
};

export default Feedback;