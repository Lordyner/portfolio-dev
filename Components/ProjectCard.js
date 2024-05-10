import React from 'react';
import { motion } from "framer-motion";
import classes from './ProjectCard.module.css';
import Link from 'next/link';
import Image from 'next/image';
const ProjectCard = ({ name, description, image, alt }) => {
    return (
        <motion.div className={classes.project}
            whileHover={{ scale: 1.1, cursor: 'pointer' }}
            whileTap={{ scale: 0.9 }}>
            <Link href={`projets/${name}`} className={classes.cardLink}>
                <Image src={image} alt={alt} className={classes.projectImage} />
                <div className={classes.textWrapper}>
                    <h3>{name}</h3>
                    <p className={classes.description}>{description}</p>
                </div>
            </Link>
        </motion.div>
    );
};

export default ProjectCard;