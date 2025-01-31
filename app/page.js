"use client";

import styles from "./styles.module.scss";
import ProfilePic from "../public/Chris_Randall.jpg";
import ResponsiveImage from "@components/Image";
import LinkedIn_icon from "public/LinkedIn_icon";
import Mail_icon from "public/Mail_icon";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className={styles.HomePageWrapper}>
      <div className={styles.BackgroundGradient} />
      <section className="w-100 Hero">
        <div className={styles.Content}>
          <div className={styles.LS}>
            <div>
              <div className={styles.PreTitle}>HELLO, MY NAME IS</div>
              <div className={styles.Divider} />

              <h2 className={styles.Title}>Chris Randall</h2>
              <div className={styles.SubTitle}>Web Developer</div>
              <Link href="https://www.linkedin.com/in/chris-randall-1b2919167/" className={styles.Contact}>
                <LinkedIn_icon />
                LinkedIn Profile
              </Link>
              <Link href="mailto:cmrandall86@gmail.com" className={styles.Contact}>
                <Mail_icon />
                Cmrandall86@gmail.com
              </Link>
            </div>
          </div>
          <div className={styles.RS}>
            <div className={styles.ImageWrap}>
              <ResponsiveImage priority src={ProfilePic} alt="profile picture" photoAspectRatio="square" fill />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.AboutSection}>
        <div className={styles.Content}>
          <div className={styles.AboutMe}>
            <div className={styles.PreTitle}>ABOUT ME</div>
            <div className={styles.Divider} />
            
            {/* Professional Summary */}
            <div className={styles.Summary}>
              Highly motivated Front-end Developer and Software Engineer with expertise in React, Next.js, 
              and modern JavaScript frameworks. Experienced in creating intuitive user interfaces and 
              integrating APIs. Passionate about learning new technologies and expanding my skillset 
              to deliver impactful digital experiences.
            </div>

            {/* Skills Grid */}
            <div className={styles.SkillsGrid}>
              <div className={styles.SkillCategory}>
                <h3>Frontend</h3>
                <ul>
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>JavaScript (ES6+)</li>
                  <li>HTML5 & CSS3</li>
                  <li>SCSS/Sass</li>
                  <li>Material UI</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              
              <div className={styles.SkillCategory}>
                <h3>Backend</h3>
                <ul>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>RESTful APIs</li>
                  <li>MySQL</li>
                  <li>Firebase</li>
                  <li>GraphQL</li>
                  <li>Database Design</li>
                </ul>
              </div>

              <div className={styles.SkillCategory}>
                <h3>Tools & Methods</h3>
                <ul>
                  <li>Git & GitHub</li>
                  <li>Agile/Scrum</li>
                  <li>Responsive Design</li>
                  <li>AWS Lambda</li>
                  <li>VS Code</li>
                </ul>
              </div>
            </div>

            {/* Professional Journey */}
            <div className={styles.Journey}>
              <h3>My Journey</h3>
              <p>
                Starting with a foundation in business management and transitioning to web development, 
                I've grown into a versatile developer specializing in creating dynamic, responsive web 
                applications. I excel at building robust CMS-type applications, collaborating with 
                cross-functional teams, and implementing complex user interfaces. My experience includes 
                developing scalable solutions for various clients, from e-commerce platforms to 
                government agency applications. I'm committed to writing clean code, optimizing 
                performance, and delivering exceptional user experiences.
              </p>
            </div>

            {/* Call to Action */}
            <div className={styles.CTASection}>
              <Link href="/projects" className={styles.CTAButton}>
                View My Projects
              </Link>
              <Link href="/resume" className={styles.CTAButton}>
                See Full Resume
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
