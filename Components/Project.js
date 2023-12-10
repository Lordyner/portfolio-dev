import React from 'react';
import newsHomepageImg from '@/public/images/news-homepage-screenshot.png'
import passwordGeneratorImg from '@/public/images/password-generator-screenshot.png'
import puissance4Img from '@/public/images/puissance4-screenshot.png'
import Image from 'next/image';

const Project = () => {
    return (
        <section id="projects-section">
            <h2>PROJETS</h2>
            <div className="project-card-container">
                <div className="project-card">
                    <Image src={newsHomepageImg} alt='preview of my news homepage project' width={341} height={341} />
                    <div className="overlay">
                        <span>
                            PAGE D'ACCUEIL D'INFORMATIONS
                        </span>
                        <a className='secondary-button' href="https://lordyner.github.io/news-homepage/" target="blank">
                            Visitez le site
                        </a>
                    </div>
                </div>
                <div className="project-card">
                    <Image src={passwordGeneratorImg} alt='preview of my password generator project' width={341} height={341} />

                    <div className="overlay">
                        <span>
                            GENERATEUR DE MOT DE PASSE
                        </span>
                        <a className='secondary-button' href="https://lordyner.github.io/password-generator-app/" target="blank">
                            Visitez le site
                        </a>
                    </div>
                </div>
                <div className="project-card">
                    <Image src={puissance4Img} alt='preview of my connect-four game project' width={341} height={341} />
                    <div className="overlay">
                        <span>
                            PUISSANCE 4
                        </span>
                        <a className='secondary-button' href="https://lordyner.github.io/connect-four-game/" target="blank">
                            Visitez le site
                        </a>
                    </div>
                </div>

            </div>
        </section >
    );
};

export default Project;