import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import classes from './SteppedProgress.module.css';
const SteppedProgress = ({ stepContent, numSteps }) => {
    const [stepsComplete, setStepsComplete] = useState(0);

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
            <AnimatePresence mode="wait">
                <motion.div
                    key={stepsComplete}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className={classes.textContainer}
                    dangerouslySetInnerHTML={{ __html: stepContent[stepsComplete] }}
                />
            </AnimatePresence>
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