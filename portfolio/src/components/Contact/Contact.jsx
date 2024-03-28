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
                        <a href="mailto:michaela.arteberry@gmail.com">Email Me!</a>
                    </li>
                    <li className={styles.link}>
                        <img src={getImageUrl("contact/linkedInIcon.png")} alt="linkedIn" />
                        <a href="https://www.linkedin.com/in/michaela-arteberry-828461172/">Connect with me on LinkedIn!</a>
                    </li>
                    <li className={styles.link}>
                        <img src={getImageUrl("contact/githubIcon.png")} alt="github" />
                        <a href="https://github.com/MichaelaArteberry">Visit my GitHub!</a>
                    </li>
                </ul>
        </footer>
    );
}

export default Contact;
