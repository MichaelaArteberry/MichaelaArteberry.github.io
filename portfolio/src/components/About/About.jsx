import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About Me</h2>
            <div className={styles.content}>
                <img className={styles.aboutImage} src={getImageUrl("about/aboutImage.png")} alt="img sitting with laptop" />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Development</h3>
                            <p>List frontend experiences here. I have experience in building responsive and optimized sites.</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Development</h3>
                            <p>List backend experiences here. I have experience developing fast and optimized back-end systems and API's.</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/designIcon.png")} alt="cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Other Development</h3>
                            <p>List other development experiences here. I have experience using Unreal Engine nodes.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default About;
