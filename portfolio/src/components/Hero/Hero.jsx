import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hello, I'm Michaela!</h1>
                <p className={styles.description}>As a full-stack software engineer with a deep interest in game development, I combine my technical expertise with the discipline and adaptability gained during my service as an army veteran. Leveraging this unique blend of skills, I am committed to creating engaging experiences that captivate and inspire. Let's turn ideas into reality.</p>
                <a href="mailto:michaela.arteberry@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl('hero/heroImage.PNG')} alt="Michaela Arteberry" className={styles.heroImg} />
                <div className={styles.topBlur} />
                <div className={styles.bottomBlur} />
        </section>
    );
}

export default Hero;
