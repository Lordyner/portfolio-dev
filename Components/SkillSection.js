import React from 'react';

const SkillSection = () => {
    return (
        <section id="skills-section">
            <h2>À PROPOS DE MOI</h2>
            <div className='about-me-container'>
                <div className="talk-no-jutsu">
                    <p>
                        Avec <b>cinq années d'expérience</b> en tant que <b>développeur web</b>, j'ai eu le privilège de travailler dans des secteurs variés tels que le bancaire, telecom et l'immobilier.<br />
                        Cette diversité m'a permis de développer une <b>capacité d'adaptation exceptionnelle</b>, afin de faire face aux besoins spécifiques de chaque domaine.<br />
                        Ma force réside dans mon <b>autonomie</b> et ma capacité à comprendre le besoin du client et y répondre avec une solution adaptée.
                    </p>
                </div>
                <div className="skills-container">
                    <div className="skill">
                        <div className="skill-values">
                            <div className="skill-name">HTML</div>
                            <div className="skill-pourcentage">90%</div>
                        </div>
                        <div className="gauge"></div>
                        <div className="gauge-fill gauge-90"></div>
                    </div>
                    <div className="skill">
                        <div className="skill-values">
                            <div className="skill-name">CSS / SASS</div>
                            <div className="skill-pourcentage">90%</div>
                        </div>
                        <div className="gauge"></div>
                        <div className="gauge-fill gauge-90"></div>
                    </div>
                    <div className="skill">
                        <div className="skill-values">
                            <div className="skill-name">REACT / NEXT.JS</div>
                            <div className="skill-pourcentage">80%</div>
                        </div>
                        <div className="gauge"></div>
                        <div className="gauge-fill gauge-75"></div>
                    </div>
                    <div className="skill">
                        <div className="skill-values">
                            <div className="skill-name">SPRING</div>
                            <div className="skill-pourcentage">90%</div>
                        </div>
                        <div className="gauge"></div>
                        <div className="gauge-fill gauge-90"></div>
                    </div>
                    <div className="skill">
                        <div className="skill-values">
                            <div className="skill-name">JAVA</div>
                            <div className="skill-pourcentage">90%</div>
                        </div>
                        <div className="gauge"></div>
                        <div className="gauge-fill gauge-90"></div>
                    </div>
                    <div className="skill">
                        <div className="skill-values">
                            <div className="skill-name">SPRINGBOOT</div>
                            <div className="skill-pourcentage">90%</div>
                        </div>
                        <div className="gauge"></div>
                        <div className="gauge-fill gauge-90"></div>
                    </div>
                    <div className="skill">
                        <div className="skill-values">
                            <div className="skill-name">SQL</div>
                            <div className="skill-pourcentage">90%</div>
                        </div>
                        <div className="gauge"></div>
                        <div className="gauge-fill gauge-90"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillSection;