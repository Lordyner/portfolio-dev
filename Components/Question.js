
import React, { useState } from 'react';
import classes from './FAQ.module.css';
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";


export const Question = ({ title, children, defaultOpen = false }) => {
    const [ref, { height }] = useMeasure();
    const [open, setOpen] = useState(defaultOpen);

    return (
        <motion.div
            animate={open ? "open" : "closed"}
            className={classes.questionRow}
        >
            <button
                onClick={() => setOpen((pv) => !pv)}
                className={classes.questionButton}
            >
                <motion.span
                    variants={{
                        open: {
                            color: "rgba(197, 179, 88, 1)",
                        },
                        closed: {
                            color: "rgba(75, 85, 99, 1)",
                        },
                    }}
                    className={classes.questionTitle}
                >
                    {title}
                </motion.span>
                <motion.span
                    variants={{
                        open: {
                            rotate: "180deg",
                            color: "rgba(197, 179, 88, 1)",
                        },
                        closed: {
                            rotate: "0deg",
                            color: "rgba(75, 85, 99, 1)",
                        },
                    }}
                >
                    <FiChevronDown className={classes.chevronDown} />
                </motion.span>
            </button>
            <motion.div
                initial={false}
                animate={{
                    height: open ? height : "0px",
                    marginBottom: open ? "24px" : "0px",
                }}
                className={classes.answerWrapper}
            >
                <p ref={ref}>{children}</p>
            </motion.div>
        </motion.div>
    );
};