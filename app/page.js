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
              <div className={styles.SubTitle} style={{ marginBottom: '16px' }}>Software Developer | Frontend Engineer</div>
              <div style={{ color: '#a0aec0', fontSize: 'clamp(13px, 1.3vw, 16px)', marginBottom: '60px', letterSpacing: '0.03em', fontFamily: 'var(--font-inter)' }}>
                JavaScript&nbsp;&nbsp;•&nbsp;&nbsp;React&nbsp;&nbsp;•&nbsp;&nbsp;Node.js&nbsp;&nbsp;•&nbsp;&nbsp;AI-Assisted Engineering
              </div>
              <Link href="https://www.linkedin.com/in/chris-randall-dev/" className={styles.Contact}>
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
                  I&apos;m a Software Developer building enterprise-scale and public-facing web applications with JavaScript, React, Node.js, Express, MySQL, and AWS. My work spans frontend architecture, backend service integrations, relational SQL systems, cloud deployments, and direct stakeholder collaboration across the full product lifecycle.
                </p>
                <p>
                  At Real Time Solutions, I&apos;ve led development on production platforms for New Mexico state agencies and public institutions, including a full enterprise rebuild for the Navajo Nation, a CRM for the Aging &amp; Long-Term Services Department, a public records platform for Otero County, and frontend modernization work for the Office of the State Auditor. I work directly with clients from discovery through delivery, and I incorporate AI-assisted engineering tools as a natural part of my workflow.
                </p>
                <p>
                  I&apos;m open to remote opportunities where I can contribute meaningfully to product development using modern tooling and collaborative engineering practices.
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
              <h3>Tools & Platforms</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>AWS S3 & Lambda</li>
                <li>Kendo UI</li>
                <li>VS Code / Cursor</li>
                <li>AI-Assisted Workflows</li>
                <li>Responsive Design</li>
              </ul>
            </div>
          </div>

          {/* Professional Journey */}
          <div className={styles.Journey}>
            <h3>My Journey</h3>
            <p>
              My path into software wasn&apos;t traditional, but it was deliberate.
            </p>
            <p>
              I started out studying business management, earned an associate degree, and spent the following decade in the restaurant industry working every 
              role from trainer to headwaiter to bartender. That environment taught me how to stay composed under pressure, communicate clearly, and own 
              problems without passing them off.
            </p>
            <p>
              I&apos;d always been curious about technology. That curiosity turned serious when I started exploring design, then development, and eventually 
              went back to school to earn a certificate in web programming. After graduating, I joined <Link href="https://myribbn.com" target="_blank" className={styles.journeyLink}>Ribbn</Link>, 
              a remote startup where I built reusable React and Next.js components for a production e-commerce platform alongside a small, fast-moving team.
            </p>
            <p>
              When Ribbn wound down in early 2024, I moved to Real Time Solutions. Since then I&apos;ve shipped production software for New Mexico state agencies 
              and government departments, taken on full application ownership across multiple platforms, and sharpened my skills across the full stack, 
              including frontend architecture, backend services, SQL systems, and AWS deployments.
            </p>
            <p>
              I&apos;m looking for remote work where I can contribute to interesting products with a team that cares about what they&apos;re building.
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
