import React, { useContext, useEffect } from 'react';
import classes from './ProjectDescription.module.css';
import GlobalContext from '@/Store/GlobalContext';
import Image from 'next/image';
import Link from 'next/link';


const ProjectDescription = ({ projectName }) => {

    const { projectsData } = useContext(GlobalContext);

    const project = projectsData.find(project => project.name === projectName);

    const { isMobileResolution } = useContext(GlobalContext);

    return (
        <main className={classes.projectContainer}>
            <h1 className={classes.projectTitle}>Projet {projectName}</h1>
            <div className={`${classes.wrapper} max-width`}>
                <div className={classes.textWrapper}>
                    <p className={classes.description}>{project?.description}</p>
                    {!isMobileResolution && <Link href={project?.liveSiteUrl} className="primary-button" target="_blank">Voir le site</Link>}
                </div>
                <Image src={project?.image} alt={project?.alt} className={classes.projectImage} />
                {isMobileResolution && <Link href={project?.liveSiteUrl} className="primary-button" target="_blank">Voir le site</Link>}
            </div>
        </main>
    );
};

export default ProjectDescription;