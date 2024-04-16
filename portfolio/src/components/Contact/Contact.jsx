import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
                </div>
                <ul className={styles.links}>
                    <li className={styles.link}>
                        <img src={getImageUrl("contact/emailIcon.png")} alt="email" />
                        <a target="_blank" href="mailto:michaela.arteberry@gmail.com">Email Me!</a>
                    </li>
                    <li className={styles.link}>
                        <img src={getImageUrl("contact/linkedInIcon.png")} alt="linkedIn" />
                        <a target="_blank" href="https://www.linkedin.com/in/michaela-arteberry-828461172/">Connect with me on LinkedIn!</a>
                    </li>
                    <li className={styles.link}>
                        <img src={getImageUrl("contact/githubIcon.png")} alt="github" />
                        <a target="_blank" href="https://github.com/MichaelaArteberry">Visit my GitHub!</a>
                    </li>
                    <li className={styles.link}>
                        <img src={getImageUrl("contact/gitlab-icon.png")} alt="gitlab" />
                        <a target="_blank" href="https://gitlab.com/MichaelaArteberry">Visit my GitLab!</a>
                    </li>
                </ul>
        </footer>
    );
}

export default Contact;
