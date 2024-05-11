import Link from 'next/link';
import React from 'react';
import classes from './ServiceItem.module.css';

const ServiceItem = ({ title, description, link, className }) => {
    return (
        <div key={title} className={`${classes.service} ${classes[className]}`}>
            <div className={classes.serviceText}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <Link href={link} className='secondary-button'>En savoir plus</Link>
        </div>
    );
};

export default ServiceItem;