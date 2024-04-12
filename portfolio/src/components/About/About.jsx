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
                            <p>I have experience in building responsive and optimized sites. In CarCar, you can see a well organized and easy to use application using React.</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Development</h3>
                            <p>I have experience developing fast and optimized back-end systems and API's. In CarCar, I am leveraging multiple databases for the inventory, the sales and the automobiles.</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/designIcon.png")} alt="cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Other Development</h3>
                            <p>I have experience using Unreal Engine nodes. I am self taught using the nodes, and will continue to expand my knowledge on them. I am taking the time to learn C++ from Codecademy and Udemy courses in my free time. Code samples can be found in my Github repository. </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default About;
