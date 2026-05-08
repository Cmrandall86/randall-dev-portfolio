"use client";

import styles from "./styles.module.scss";
import ProfilePic from "../public/Chris_Randall.jpg";
import ResponsiveImage from "@components/Image";
import Link from "next/link";
import { useState } from 'react';

const projects = [
  {
    name: "Navajo Nation WIND",
    type: "Enterprise Platform",
    description:
      "Rebuilt a legacy operational system into a modern JavaScript application supporting 313 users across 110 chapters and 5 agencies. Owned frontend architecture, RBAC, SQL workflows, backend services, and AWS deployments.",
    stack: ["JavaScript", "React", "Node.js", "MySQL", "AWS", "RBAC"],
    url: "https://new.wind.enavajo.org/Login/login.html",
  },
  {
    name: "ALTSD CRM",
    type: "Government CRM",
    description:
      "Full-stack administrative CRM for the New Mexico Aging and Long-Term Services Department. Supports partner approvals, user management, CMS workflows, and public event publishing.",
    stack: ["React", "Node.js", "MySQL", "CMS", "Full-Stack"],
    url: "https://crm.aging.nm.gov/",
  },
  {
    name: "Stuff-Cycler",
    type: "Side Project",
    description:
      "Modern React and Supabase application demonstrating product thinking, authentication flows, relational data modeling, and end-to-end application architecture.",
    stack: ["React", "Supabase", "Authentication", "Netlify"],
    url: "https://stuff-cycler.netlify.app/",
  },
  {
    name: "Otero County",
    type: "Public Records Platform",
    description:
      "Public-facing records search and administrative platform built independently. Includes authentication, role-based permissions, search workflows, and CMS-style administrative tooling.",
    stack: ["React", "Node.js", "MySQL", "Auth", "CMS"],
    url: "https://otero.rtsclients.com/",
  },
];

const trustClients = [
  "Navajo Nation",
  "NM Aging & Long-Term Services",
  "Office of the State Auditor",
  "Otero County",
  "Regulation & Licensing Dept.",
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('professional');

  return (
    <div className={styles.HomePageWrapper}>
      <div className={styles.BackgroundGradient} />

      {/* ── Hero ── */}
      <section className="w-100 Hero" aria-label="Introduction">
        <div className={styles.Content}>
          <div className={styles.LS}>
            <div>
              <div className={styles.PreTitle}>HELLO, MY NAME IS</div>
              <div className={styles.Divider} />

              <h1 className={styles.Title}>Chris Randall</h1>
              <div className={styles.SubTitle} style={{ marginBottom: '16px' }}>
                Software Developer | Frontend Engineer
              </div>
              <div className={styles.TechStack}>
                JavaScript&nbsp;&nbsp;•&nbsp;&nbsp;React&nbsp;&nbsp;•&nbsp;&nbsp;Node.js&nbsp;&nbsp;•&nbsp;&nbsp;SQL&nbsp;&nbsp;•&nbsp;&nbsp;AWS&nbsp;&nbsp;•&nbsp;&nbsp;AI-Assisted Engineering
              </div>
              <p className={styles.HeroTagline}>
                Shipped production software for government agencies and enterprise clients across the full stack. Frontend strength, backend ownership, and modern engineering workflows.
              </p>
              <div className={styles.HeroCTAs}>
                <Link href="/resume" className={styles.CTAPrimary}>
                  Resume
                </Link>
                <Link
                  href="https://www.linkedin.com/in/chris-randall-dev/"
                  className={styles.CTAOutline}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile (opens in new tab)"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://github.com/cmrandall86"
                  className={styles.CTAOutline}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile (opens in new tab)"
                >
                  GitHub
                </Link>
                <Link href="/projects" className={styles.CTAOutline}>
                  Projects
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.RS}>
            <div className={styles.ImageWrap}>
              <ResponsiveImage
                priority
                src={ProfilePic}
                alt="Chris Randall, Software Developer based in Albuquerque, NM"
                photoAspectRatio="square"
                fill
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Strip ── */}
      <section className={styles.TrustStrip} aria-label="Clients and organizations">
        <div className={styles.TrustInner}>
          <span className={styles.TrustLabel}>Trusted work includes</span>
          <ul className={styles.TrustList} role="list" aria-label="Client organizations">
            {trustClients.map((client) => (
              <li key={client} className={styles.TrustItem}>{client}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Selected Work ── */}
      <section className={styles.WorkSection} aria-label="Featured projects">
        <div className={styles.WorkInner}>
          <div className={styles.SectionHeader}>
            <div className={styles.PreTitleAlt}>SELECTED WORK</div>
            <div className={styles.DividerAlt} />
          </div>
          <div className={styles.ProjectGrid}>
            {projects.map((project) => (
              <article key={project.name} className={styles.ProjectCard}>
                <div className={styles.ProjectMeta}>
                  <span className={styles.ProjectType}>{project.type}</span>
                </div>
                <h2 className={styles.ProjectName}>{project.name}</h2>
                <p className={styles.ProjectDesc}>{project.description}</p>
                <div className={styles.StackTags} aria-label="Technologies used">
                  {project.stack.map((tag) => (
                    <span key={tag} className={styles.Tag}>{tag}</span>
                  ))}
                </div>
                {project.url && (
                  <Link
                    href={project.url}
                    className={styles.ProjectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} project (opens in new tab)`}
                  >
                    View Project <span aria-hidden="true">→</span>
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className={styles.AboutSection} aria-label="About Chris Randall">
        <div className={styles.AboutMe}>
          <div className={styles.headerSection}>
            <div className={styles.leftSide}>
              <div className={styles.PreTitle}>ABOUT ME</div>
              <div className={styles.Divider} />
            </div>

            <div className={styles.tabButtons} role="tablist" aria-label="About sections">
              <button
                role="tab"
                className={`${styles.tabButton} ${activeTab === 'professional' ? styles.active : ''}`}
                onClick={() => setActiveTab('professional')}
                aria-selected={activeTab === 'professional'}
                aria-controls="tab-professional"
                id="tab-btn-professional"
              >
                Professional
              </button>
              <button
                role="tab"
                className={`${styles.tabButton} ${activeTab === 'personal' ? styles.active : ''}`}
                onClick={() => setActiveTab('personal')}
                aria-selected={activeTab === 'personal'}
                aria-controls="tab-personal"
                id="tab-btn-personal"
              >
                Personal
              </button>
            </div>
          </div>

          <div className={styles.tabContent}>
            {activeTab === 'professional' ? (
              <div
                className={styles.Summary}
                id="tab-professional"
                role="tabpanel"
                aria-labelledby="tab-btn-professional"
              >
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
              <div
                className={styles.Summary}
                id="tab-personal"
                role="tabpanel"
                aria-labelledby="tab-btn-personal"
              >
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
              <ul aria-label="Frontend skills">
                <li>React.js</li>
                <li>Next.js</li>
                <li>JavaScript (ES6+)</li>
                <li>jQuery</li>
                <li>HTML5 &amp; CSS3</li>
                <li>SCSS/Sass</li>
                <li>Material UI</li>
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
              </ul>
            </div>

            <div className={styles.SkillCategory}>
              <h3>Backend</h3>
              <ul aria-label="Backend skills">
                <li>Node.js</li>
                <li>Express</li>
                <li>RESTful APIs</li>
                <li>MySQL</li>
                <li>Firebase</li>
                <li>GraphQL</li>
              </ul>
            </div>

            <div className={styles.SkillCategory}>
              <h3>Tools &amp; Platforms</h3>
              <ul aria-label="Tools and platform skills">
                <li>Git &amp; GitHub</li>
                <li>AWS S3 &amp; Lambda</li>
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
              went back to school to earn a certificate in web programming. After graduating, I joined <Link href="https://myribbn.com" target="_blank" rel="noopener noreferrer" className={styles.journeyLink}>Ribbn</Link>,
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
