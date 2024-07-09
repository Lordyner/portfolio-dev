import React from 'react';
import classes from '@/Components/ProjectDescription.module.css';
import Image from 'next/image';
import Link from 'next/link';
const HoverImage = ({ image, alt, isHovered, setIsHovered, link }) => {
    return (
        <div className={classes.imageWrapper}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Image src={image} alt={alt} className={classes.projectImage} />
            {isHovered && (
                <Link href={link} className={`${classes.buttonWebsite}`} target="_blank">Visiter</Link>
            )}
        </div>
    );
};

export default HoverImage;