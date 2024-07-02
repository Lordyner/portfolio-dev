import Image from 'next/image';
import classes from './Card.module.css';
import { motion } from 'framer-motion';
const Card = ({ title, description, image }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            className={classes.card}>
            <Image src={image} alt={title} className={classes.cardImage} width={400} height={200} quality={50} sizes="400px" />
            <div className={classes.textWrapper}>
                <h3 className={classes.title}>{title}</h3>
                <p className={classes.description} dangerouslySetInnerHTML={{ __html: description }}></p>
            </div>
        </motion.div>
    )
}

export default Card;