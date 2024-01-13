import React, { useState } from 'react';
import classes from './QuestionAnswer.module.css';
import plusIcon from '../public/images/plus_icon.svg';
import minusIcon from '../public/images/minus_icon.svg';
import Image from 'next/image';
const QuestionAnswer = ({ question, answer }) => {

    const [isAnswerDisplayed, setIsAnswerDisplayed] = useState(false);

    return (
        <>
            <div className={classes.questionAnswerContainer}>
                <div className={classes.questionRow}>
                    <p className={classes.question}>{question}</p>
                    <Image src={isAnswerDisplayed ? minusIcon : plusIcon} alt="icône plus" className={classes.icon} onClick={() => setIsAnswerDisplayed(!isAnswerDisplayed)} />
                </div>
                <p className={`${classes.answer} ${isAnswerDisplayed ? classes.active : ''}`}>{answer}</p>
            </div>

        </>
    );
};

export default QuestionAnswer;