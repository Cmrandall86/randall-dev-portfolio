'use client'

import React from "react";
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.mainInfo}>
          <div className={styles.techStack}>
            <span>Built with React • Next.js • SCSS • Material UI</span>
          </div>
          <div className={styles.divider}>|</div>
          <div className={styles.attribution}>
            <span>Designed & Developed by Chris Randall © {new Date().getFullYear()}</span>
          </div>
          <div className={styles.divider}>|</div>
          <div className={styles.socialLinks}>
            <a href="https://github.com/Cmrandall86" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/chris-randall-dev/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
