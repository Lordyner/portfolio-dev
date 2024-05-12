import React, { Children, useState } from 'react';
import classes from './CardSwip.module.css';
import CardStat from './CardStat';


const CardSwip = () => {

    const [order, setOrder] = useState(["front", "middle", "back"]);

    const handleShuffle = () => {
        const orderCopy = [...order];
        orderCopy.unshift(orderCopy.pop());
        setOrder(orderCopy);
    };

    return (
        <div className={classes.cardContainer}>

            <div className={classes.cardShuffle}>
                <CardStat
                    title="Lorem ipsum"
                    description="75% of consumers admit to making judgements on a company's credibility based on the company's website design"
                    handleShuffle={handleShuffle}
                    position={order[0]} >
                </CardStat>
                <CardStat
                    title="Card 2"
                    description="75% of consumers admit to making judgements on a company's credibility based on the company's website design"
                    handleShuffle={handleShuffle}
                    position={order[1]} >
                </CardStat>
                <CardStat
                    title="Card 3"
                    description="75% of consumers admit to making judgements on a company's credibility based on the company's website design"
                    handleShuffle={handleShuffle}
                    position={order[2]} >
                </CardStat>

            </div>
        </div>
    );
};

export default CardSwip;