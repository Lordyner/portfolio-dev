import React from 'react';
import classes from './SpringModal.module.css';
import { AnimatePresence, motion } from "framer-motion";


const SpringModal = ({ isOpen, setIsOpen, title, message }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className={classes.background}
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className={classes.modal}
                        id='callbackModalContact'
                    >

                        <div className={classes.content}>

                            <h2 className={classes.title} dangerouslySetInnerHTML={{ __html: title }} />

                            <p className={classes.message}>
                                {message}
                            </p>
                            <div className={classes.buttonWrapper}>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="primary-button"
                                >
                                    Compris !
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SpringModal;