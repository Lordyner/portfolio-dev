import React from 'react';
import Card from './Card';
import classes from './CardList.module.css';

const CardList = ({ items }) => (
    <div className={classes.cardList}>
        {items.map((item, index) => (
            <Card key={index} title={item.title} description={item.description} image={item.image} />
        ))}
    </div>
)

export default CardList;