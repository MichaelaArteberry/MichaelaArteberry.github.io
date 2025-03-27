import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Michaela!</h1>
                <p className={styles.description}>I am a software engineer with a bit of an untraditional background. I am an Army veteran, a mom, and a gamer. When I am not coding, I'm hanging out with my little family, or cramming a game session into whatever free time I can manage. I love creating things that are both functional and fun, and I am always looking for the next growth opportunity. I came into tech through curiosity and persistance, and now I am building full stack applications and am in a fellowship program with Verizon. </p>
                <a href="mailto:michaela.arteberry@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl('hero/heroImage.PNG')} alt="Michaela Arteberry" className={styles.heroImg} />
                <div className={styles.topBlur} />
                <div className={styles.bottomBlur} />
        </section>
    );
}

export default Hero;
