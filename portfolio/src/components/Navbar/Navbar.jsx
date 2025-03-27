import { useState } from 'react';
import React from 'react';
import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showResume, setShowResume] = useState(false);

    return (
<div>
            <nav className={styles.navbar}>
                <button
                    className={styles.title}
                    onClick={() => setShowResume(!showResume)}
                >
                    Resume
                </button>
                <div className={styles.menu}>
                    <img
                        className={styles.menuBtn}
                        src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
                        alt="menu-button"
                        onClick={() => setMenuOpen(!menuOpen)}
                    />
                    <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
            {showResume && (
                <div className={styles.resumeContainer}>
                    <iframe
                        src="/Resume/Resume.pdf"
                        width="100%"
                        height="600px"
                        title="Resume"
                    >
                    </iframe>
                </div>
            )}
        </div>
    );
}

export default Navbar;
