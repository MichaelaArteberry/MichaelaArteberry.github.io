import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hello, I'm Michaela!</h1>
                <p className={styles.description}>I'm a full-stack web developer. Fill in the rest later...</p>
                <a href="mailto:michaela.arteberry@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl('hero/heroImage.PNG')} alt="Michaela Arteberry" className={styles.heroImg} />
                <div className={styles.topBlur} />
                <div className={styles.bottomBlur} />
        </section>
    );
}

export default Hero;
