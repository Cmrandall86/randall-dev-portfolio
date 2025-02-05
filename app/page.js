"use client";

import styles from "./styles.module.scss";
import ProfilePic from "../public/Chris_Randall.jpg";
import ResponsiveImage from "@components/Image";
import LinkedIn_icon from "public/LinkedIn_icon";
import Mail_icon from "public/Mail_icon";
import Link from "next/link";
import { useState } from 'react';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('professional');

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
        <div className={styles.AboutMe}>
          <div className={styles.headerSection}>
            <div className={styles.leftSide}>
              <div className={styles.PreTitle}>ABOUT ME</div>
              <div className={styles.Divider} />
            </div>
            
            <div className={styles.tabButtons}>
              <button 
                className={`${styles.tabButton} ${activeTab === 'professional' ? styles.active : ''}`}
                onClick={() => setActiveTab('professional')}
              >
                Professional
              </button>
              <button 
                className={`${styles.tabButton} ${activeTab === 'personal' ? styles.active : ''}`}
                onClick={() => setActiveTab('personal')}
              >
                Personal
              </button>
            </div>
          </div>
          
          <div className={styles.tabContent}>
            {activeTab === 'professional' ? (
              <div className={styles.Summary}>
                <p>
                  I&apos;m a front-end developer with a strong foundation in React, Next.js, and modern JavaScript frameworks, focused on building responsive, user-friendly web applications. I started my career on a business and hospitality trajectory but gradually realized my passion for technology, leading me to pivot into programming. That experience taught me how to communicate effectively, adapt to new challenges, and work effectively within a team—fostering strong collaboration and a positive, open communication style.
                </p>

                <p>
                  My experience includes developing CMS platforms, internal CRM tools, and data-driven applications for both private clients and government agencies. I&apos;ve worked on e-commerce platforms, public data search tools, and embeddable UI components, always prioritizing clean code, performance optimization, and seamless user experiences.
                </p>
                <p>
                  I thrive in collaborative environments, working closely with designers, product managers, and backend engineers to bring ideas to life. I&apos;m always eager to learn new technologies and refine my skills, whether it&apos;s enhancing UI/UX, improving accessibility, or integrating complex APIs.
                </p>

                <div className={styles.summaryLinks}>
                  <Link href="/projects">View Projects</Link>
                  <span>•</span>
                  <Link href="/resume">Resume</Link>
                </div>
              </div>
            ) : (
              <div className={styles.Summary}>
                <p>
                  I&apos;m a husband and father of two daughters, living in Albuquerque, NM. When I&apos;m not working 
                  on programming projects, I enjoy spending time outdoors, hanging out with my dog, and catching 
                  up with friends on Discord while gaming. I like learning new things and optimizing different 
                  aspects of life, whether it&apos;s health, productivity, or programming.
                </p>
                <p>
                  I&apos;ve always been interested in maker culture, including woodworking, 3D printing, and DIY 
                  electronics with Arduino and Raspberry Pi, and I&apos;d love to dive deeper into those hobbies. 
                  I also enjoy snowboarding, drumming, and exploring music, graffiti art, and calligraphy, 
                  and I&apos;d like to make more time for them in the future. Most of all, I like getting things 
                  done, whether that&apos;s tackling a project in my garage or finding better ways to improve my workflow.
                </p>
              </div>
            )}
          </div>

          {/* Skills Grid */}
          <div className={styles.SkillsGrid}>
            <div className={styles.SkillCategory}>
              <h3>Frontend</h3>
              <ul>
                <li>React.js</li>
                <li>Next.js</li>
                <li>JavaScript (ES6+)</li>
                <li>jQuery</li>
                <li>HTML5 & CSS3</li>
                <li>SCSS/Sass</li>
                <li>Material UI</li>
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
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
              </ul>
            </div>

            <div className={styles.SkillCategory}>
              <h3>Tools & Methods</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>AWS Lambda</li>
                <li>VS Code</li>
                <li>Styled Components</li>
                <li>Agile/Scrum</li>
                <li>Responsive Design</li>
              </ul>
            </div>
          </div>

          {/* Professional Journey */}
          <div className={styles.Journey}>
            <h3>My Journey</h3>
            <p>
              My path to web development wasn&apos;t traditional, but it was always driven by curiosity, creativity, and a love for problem-solving.
            </p>
            <p>
              I initially pursued business management, earning an associate degree and spending the next decade working in the restaurant industry. 
              I wore just about every hat—trainer, headwaiter, bartender, and beyond—learning firsthand how to adapt, lead, and solve problems under pressure. 
              But while I enjoyed the fast-paced environment, I knew I wanted to build something.
            </p>
            <p>
              I started exploring design and digital tools, taking courses in Photoshop, Illustrator, and graphic design. That creative itch eventually 
              led me to web development, where I found the perfect blend of logic and creativity. In 2019, I went back to school to earn a certificate 
              in web programming, and soon after graduating, I joined <Link href="https://myribbn.com" target="_blank" className={styles.journeyLink}>Ribbn</Link>.
            </p>
            <p>
              At Ribbn, I worked remotely as a front-end developer, building a React and Next.js-powered e-commerce platform. The tech stack also included 
              TypeScript, Tailwind CSS, and Firebase, and I loved the challenge of creating scalable, reusable components while collaborating with a small, 
              fast-moving team. Unfortunately, as a small startup, Ribbn faced funding challenges and had to make difficult decisions. In early 2024, I moved 
              on to Real Time Solutions, where I&apos;ve worked on a range of projects, including government CMS applications and internal business tools.
            </p>
            <p>
              Now, I&apos;m looking to return to remote work—not just for flexibility, but because I&apos;m more productive, more focused, and ultimately a better 
              developer in my home setup. Working remotely also allows me to be more present for my family while continuing to grow as a developer and 
              contribute meaningfully to impactful projects.
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
      </section>
    </div>
  );
}
