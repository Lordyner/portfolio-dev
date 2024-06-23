import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import classes from './SteppedProgress.module.css';
const SteppedProgress = () => {
    const [stepsComplete, setStepsComplete] = useState(0);
    const numSteps = 4;
    const stepContent = [
        "<b>Première prise de contact</b> :<br/><br/> Discussion de vos besoins et objectifs. Lors de cette première étape, nous organiserons une réunion pour discuter en détail de vos besoins, de vos objectifs et de vos attentes pour le projet. Cette discussion permettra de définir clairement vos exigences et les fonctionnalités souhaitées. Nous aborderons également votre budget et vos délais",
        "<b>Proposition de devis</b> :<br/><br/> Élaboration d'une proposition détaillée adaptée à votre projet. Suite à notre discussion initiale, je vous fournirai un devis détaillé incluant une proposition de projet sur mesure. Ce document précisera les fonctionnalités à développer, les délais de réalisation, ainsi que les coûts associés. Vous aurez ainsi une vision claire et transparente de l'ensemble du projet avant de vous engager.",
        "<b>Présentation des maquettes</b> :<br/><br/> Une fois le devis signé et les maquettes réalisées, je vous les présenterais lors d'une réunion. Ce sera l'occasion pour vous de me donner vos retours sur le design ainsi que sur le contenu. J'intégrerais chacun de vos retours avant d'attaquer le développement.",
        "<b>Présentation du site</b>:<br/><br/> Après la fin du développement, je vous présenterais votre site sur un environnement de test pour que vous puissiez le parcourir et me faire vos retours.",
        "<b>Lancement et Suivi</b> :<br/><br/> Vos retours pris en compte, je vous accompagne sur la partie hébergement et nom de domaine pour que tout soit prêt. Je m’occupe ensuite de la mise en ligne de votre site, puis je vous présente votre espace Google Analytics qui permettra de suivre les indicateurs de performance clé de votre site.",
    ]
    const handleSetStep = (num) => {
        if (
            (stepsComplete === 0 && num === -1) ||
            (stepsComplete === numSteps && num === 1)
        ) {
            return;
        }

        setStepsComplete((pv) => pv + num);
    };

    return (
        <div className={classes.content}>
            <Steps numSteps={numSteps} stepsComplete={stepsComplete} />
            <div className={classes.textContainer} dangerouslySetInnerHTML={{ __html: stepContent[stepsComplete] }}></div>
            <div className={classes.buttonWrapper}>
                <button
                    className={classes.prevButton}
                    onClick={() => handleSetStep(-1)}
                >
                    Précédent
                </button>
                <button
                    className={classes.nextButton}
                    onClick={() => handleSetStep(1)}
                >
                    Suivant
                </button>
            </div>
        </div>
    );
};

const Steps = ({ numSteps, stepsComplete }) => {
    const stepArray = Array.from(Array(numSteps).keys());

    return (
        <div className={classes.steps}>
            {stepArray.map((num) => {
                const stepNum = num + 1;
                const isActive = stepNum <= stepsComplete;
                return (
                    <React.Fragment key={stepNum}>
                        <Step num={stepNum} isActive={isActive} />
                        {stepNum !== stepArray.length && (
                            <div className={classes.line}>
                                <motion.div
                                    className={classes.completedLine}
                                    animate={{ width: isActive ? "100%" : 0 }}
                                    transition={{ ease: "easeIn", duration: 0.3 }}
                                />
                            </div>
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
};

const Step = ({ num, isActive }) => {
    return (
        <div className={classes.relative}>
            <div
                className={`${classes.step} ${isActive
                    ? classes.activeStep
                    : classes.inactiveStep
                    }`}
            >
                <AnimatePresence mode="wait">
                    {isActive ? (
                        <motion.svg
                            key="icon-marker-check"
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 16 16"
                            height="1.6em"
                            width="1.6em"
                            xmlns="http://www.w3.org/2000/svg"
                            initial={{ rotate: 180, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -180, opacity: 0 }}
                            transition={{ duration: 0.125 }}
                        >
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
                        </motion.svg>
                    ) : (
                        <motion.span
                            key="icon-marker-num"
                            initial={{ rotate: 180, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -180, opacity: 0 }}
                            transition={{ duration: 0.125 }}
                        >
                            {num}
                        </motion.span>
                    )}
                </AnimatePresence>
            </div>
            {isActive && (
                <div className={classes.stepPulse} />
            )}
        </div>
    );
};

export default SteppedProgress;