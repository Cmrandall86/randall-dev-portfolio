"use client";

import React from "react";
import styles from "./resume.module.scss";
import Link from "next/link";

export default function Resume() {
  return (
    <div className={styles.resumeContainer}>
      <div className={styles.downloadSection}>
        <a 
          href="/Chris_Randall_Resume.pdf" 
          download
          className={styles.downloadButton}
        >
          Download PDF Resume
        </a>
      </div>

      <div className={styles.resume}>
        <header className={styles.header}>
          <h1>Christopher Randall</h1>
          <div className={styles.contactInfo}>
            <a href="mailto:cmrandall86@gmail.com">cmrandall86@gmail.com</a>
            <span className={styles.divider}>|</span>
            <a href="https://www.chrisrandall.dev">www.chrisrandall.dev</a>
            <span className={styles.divider}>|</span>
            <a href="https://www.linkedin.com/in/chris-randall-dev/">linkedin.com/in/chris-randall-dev</a>
          </div>
        </header>

        <section className={styles.section}>
          <h2>PROFESSIONAL SUMMARY</h2>
          <p>
            Highly motivated Front-end Developer and Software Engineer with expertise in React, Next.js, and modern JavaScript
            frameworks. Adept at building dynamic, responsive web applications and collaborating with cross-functional teams. Experienced
            in creating intuitive user interfaces and integrating APIs. Passionate about learning new technologies and expanding my skillset
            to continually grow in my professional life. Committed to solving complex problems and delivering impactful digital experiences.
          </p>
        </section>

        <section className={styles.section}>
          <h2>PROFESSIONAL EXPERIENCE</h2>
          
          <div className={styles.job}>
            <div className={styles.jobHeader}>
              <h3>Real Time Solutions</h3>
              <div className={styles.jobMeta}>
                <span className={styles.position}>Front-end Developer</span>
                <span className={styles.location}>Albuquerque, NM</span>
                <span className={styles.dates}>Feb 2024 - Present</span>
              </div>
            </div>
            <ul className={styles.bulletList}>
              <li>Developed a robust CMS-type application for Otero County, enabling the public to search decedents and access relevant information. The app features authentication with role-based user permissions and integrates jQuery, MySQL, Node.js, Express, and Kendo UI, hosted via AWS Lambda.</li>
              <li>Collaborated as a core team member on an internal company CRM, contributing as a front-end developer to design and build the UI for key functionalities:
                <ul className={styles.bulletList}>
                  <li>Generating quotes and managing communications (email/text) for sales team members.</li>
                  <li>Developing an embeddable form widget for capturing customer interest in external applications.</li>
                  <li>Tracking leads and prospects to streamline customer acquisition processes.</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className={styles.job}>
            <div className={styles.jobHeader}>
              <h3>Ribbn</h3>
              <div className={styles.jobMeta}>
                <span className={styles.position}>Software Developer</span>
                <span className={styles.location}>Remote</span>
                <span className={styles.dates}>May 2022 - February 2024</span>
              </div>
            </div>
            <ul className={styles.bulletList}>
              <li>Contributed as part of a small team to develop a responsive e-commerce platform powered by React and Next.js. Primarily focused on creating reusable components, ensuring responsiveness across all screen sizes, and applying modern UI principles.</li>
              <li>Collaborated with cross-functional teams to enhance user experience and optimize performance, delivering scalable solutions for various clients.</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2>NOTABLE PROJECTS</h2>
          
          <div className={styles.project}>
            <div className={styles.projectHeader}>
              <h3>N.B.A. Scores Application</h3>
              <a href="https://crandall-nba-scores.netlify.app/" className={styles.projectLink}>crandall-nba-scores.netlify.app</a>
              <span className={styles.projectDate}>2023</span>
            </div>
            <ul className={styles.bulletList}>
              <li>Built a React-based web application to fetch and display NBA game scores for a selected date, leveraging Material UI and React Router.</li>
              <li>Developed a real-time, intuitive user interface featuring a custom date picker and categorized game statuses (e.g., upcoming, in-progress, final).</li>
            </ul>
          </div>

          <div className={styles.project}>
            <div className={styles.projectHeader}>
              <h3>Navajo Nation Department of Transportation (NNDOT) Project Tracker</h3>
              <span className={styles.projectDate}>2024</span>
            </div>
            <ul className={styles.bulletList}>
              <li>Designed and developed the front-end of a project tracker application for the Navajo Nation Department of Transportation.</li>
              <li>Collaborated directly with the NNDOT Division Director and his team through meetings to gather requirements and implement solutions tailored to their needs.</li>
              <li>Delivered a fully functional, user-friendly interface that streamlined project tracking and reporting for the department.</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2>TECHNICAL SKILLS</h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCategory}>
              <h4>Programming Languages:</h4>
              <p>JavaScript (ES6+), HTML5, CSS3, SCSS, JSX</p>
            </div>
            <div className={styles.skillCategory}>
              <h4>Frameworks and Libraries:</h4>
              <p>React, Next.js, jQuery, Express, Tailwind CSS, Bootstrap, Material UI</p>
            </div>
            <div className={styles.skillCategory}>
              <h4>Databases:</h4>
              <p>MySQL, Firebase, GraphQL</p>
            </div>
            <div className={styles.skillCategory}>
              <h4>Tools & Platforms:</h4>
              <p>Git, GitHub, AWS Lambda, VS Code, Styled Components, REST APIs</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>EDUCATION</h2>
          <div className={styles.education}>
            <div className={styles.educationItem}>
              <h3>Central New Mexico Community College</h3>
              <div className={styles.educationMeta}>
                <span>Albuquerque, NM</span>
              </div>
              <div className={styles.degrees}>
                <div className={styles.degree}>
                  <span className={styles.degreeYear}>2021</span>
                  <p>Certificate in Computer Information Systems: Web Programming</p>
                </div>
                <div className={styles.degree}>
                  <span className={styles.degreeYear}>2008</span>
                  <p>Associate of Business Management</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
