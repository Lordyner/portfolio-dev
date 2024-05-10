import React, { useContext } from 'react';
import classes from './Project.module.css';
import { motion, } from "framer-motion";

import Image from 'next/image';
import GlobalContext from '@/Store/GlobalContext';
import Link from 'next/link';
import ProjectCard from './ProjectCard';
const Project = () => {

    const { isMobileResolution, isTabletResolution, isDesktopResolution } = useContext(GlobalContext);
    const { projectsData } = useContext(GlobalContext);

    return (
        <section id='projects-section' className={classes.projectSection}>
            <div className={`${classes.content} max-width`}>
                <h2>Réalisations</h2>
                <div className={classes.projects}>
                    {projectsData.map(project => (
                        <ProjectCard key={project.name} name={project.name} description={project.description} image={project.image} alt={project.alt} />
                    ))}
                </div>
            </div>
        </section >
    );
};



export default Project;