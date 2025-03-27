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
                            <p>I have implemented UI/UX design and features into Verizon's marketplace sales application that is set to deploy this year, using Angular and TypeScript.</p>
                            <p>I have experience in building responsive and optimized sites. In CarCar, you can see a well organized and easy to use application using React.</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Development</h3>
                            <p>I have experience with building backend logic and relational databases that can be seen in US, a mock dating application, that handles user authentication, profile management, user preferences, and matches based on likes or swipes.</p>
                            <p>I have experience developing fast and optimized back-end systems and API's. In CarCar, I am leveraging multiple databases for the inventory, the sales and the automobiles.</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/designIcon.png")} alt="cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Other Development</h3>
                            <p className={styles.link}>I have experience using Unreal Engine's Blueprint visual scripting system, to create a third-person target shooter game. I explored core game play mechanics such as player movement, aiming and shooting. Experimented with animation blueprints and trigger based actions. My Github repository has the project files {" "}
                            <a href="https://github.com/MichaelaArteberry/First-Unreal-Game" target="_blank" rel="noopener noreferrer">here.</a>
                            </p>
                            <p>I am one semester away from completing my undergraduate degree in Computer Science. I have been studying C++, and focusing on object oriented programming, algorithms, and data strictures. I have completed a full stack software engineering program from Hack Reactor in May 2024 that focused on Python and JavaScript. </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default About;
