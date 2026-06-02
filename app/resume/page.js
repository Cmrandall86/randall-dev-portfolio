"use client";

import React from "react";
import styles from "./resume.module.scss";

export default function Resume() {
  return (
    <div className={styles.page}>
      <main className={styles.resume}>
        <button onClick={() => window.print()} className={styles.downloadBtn}>
          Download Resume PDF
        </button>
        {/* ── HEADER ── */}
        <header className={styles.header}>
          <div className={styles.nameBlock}>
            <h1>Christopher Randall</h1>
            <p className={styles.title}>Software Developer&nbsp;&nbsp;|&nbsp;&nbsp;Frontend Engineer</p>
          </div>
          <div className={styles.contactRow}>
            <span className={styles.contactItem}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Albuquerque, NM&ensp;·&ensp;Open to Remote
            </span>
            <span className={styles.sep} />
            <a href="mailto:cmrandall86@gmail.com" className={styles.contactLink}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              cmrandall86@gmail.com
            </a>
            <span className={styles.sep} />
            <a href="https://www.chrisrandall.dev" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              Portfolio
            </a>
            <span className={styles.sep} />
            <a href="https://www.linkedin.com/in/chris-randall-dev/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
            <span className={styles.sep} />
            <a href="https://github.com/Cmrandall86" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              GitHub
            </a>
          </div>
        </header>

        {/* ── PROFESSIONAL SUMMARY ── */}
        <section className={styles.section}>
          <h2>Professional Summary</h2>
          <p>
            Software Developer with 4+ years of experience building enterprise-scale and public-facing web applications with TypeScript, JavaScript, React, Node.js, Express, MySQL, and AWS. Experienced in frontend architecture, API integrations, relational SQL systems, cloud deployments, and close stakeholder collaboration, with a track record of delivering polished, scalable software products.
          </p>
        </section>

        {/* ── PROFESSIONAL EXPERIENCE ── */}
        <section className={styles.section}>
          <h2>Professional Experience</h2>

          <div className={styles.entry}>
            <div className={styles.entryHeader}>
              <div className={styles.entryLeft}>
                <span className={styles.company}>Real Time Solutions</span>
                <span className={styles.role}>Software Developer</span>
              </div>
              <div className={styles.entryRight}>
                <span className={styles.dates}>February 2024 – Present</span>
                <span className={styles.location}>Albuquerque, NM</span>
              </div>
            </div>
            <ul className={styles.list}>
              <li>Lead development of enterprise and public-facing software platforms, working across frontend UI, backend services, relational SQL systems, AWS deployments, and AI-assisted engineering workflows.</li>
              <li>Built the ALTSD CRM, a full-stack administrative platform for the New Mexico Aging &amp; Long-Term Services Department supporting user management, partner approval workflows, administrative CMS functionality, and public-facing event publishing integrations.</li>
              <li>Rebuilt a legacy enterprise platform into the modern Navajo Nation WIND application, supporting 313 users across 110 chapters and 5 agencies with RBAC, cross-application integrations, reporting systems, and SQL data access spanning six relational databases.</li>
              <li>Led frontend architecture for a large-scale operational platform for the Regulation &amp; Licensing Department, partnering closely with stakeholders on product discovery, requirements gathering, and iterative workflow design.</li>
              <li>Independently developed a public-facing records search and administrative platform for Otero County, integrating enterprise authentication, search workflows, permissions management, and CMS-style administrative tooling.</li>
              <li>Contributed frontend development to modernization efforts for the Office of the State Auditor, helping rebuild legacy C# applications into modern JavaScript-based interfaces and workflows.</li>
            </ul>
          </div>

          <div className={styles.entry}>
            <div className={styles.entryHeader}>
              <div className={styles.entryLeft}>
                <span className={styles.company}>Ribbn Inc.</span>
                <span className={styles.role}>Software Developer</span>
              </div>
              <div className={styles.entryRight}>
                <span className={styles.dates}>May 2022 – February 2024</span>
                <span className={styles.location}>Remote</span>
              </div>
            </div>
            <ul className={styles.list}>
              <li>Built reusable React and Next.js components and delivered client-facing product features within a production e-commerce platform.</li>
            </ul>
          </div>
        </section>

        {/* ── TECHNICAL SKILLS ── */}
        <section className={styles.section}>
          <h2>Technical Skills</h2>
          <div className={styles.skillsTable}>
            <div className={styles.skillRow}>
              <span className={styles.skillLabel}>Languages</span>
              <span className={styles.skillValue}>TypeScript, JavaScript (ES6+), HTML5, CSS3, SCSS, SQL</span>
            </div>
            <div className={styles.skillRow}>
              <span className={styles.skillLabel}>Frameworks &amp; Libraries</span>
              <span className={styles.skillValue}>React, Next.js, Node.js, Express, jQuery, Tailwind CSS, Bootstrap, Material UI, Kendo UI</span>
            </div>
            <div className={styles.skillRow}>
              <span className={styles.skillLabel}>Databases &amp; APIs</span>
              <span className={styles.skillValue}>MySQL, Supabase, REST APIs, GraphQL, Firebase</span>
            </div>
            <div className={styles.skillRow}>
              <span className={styles.skillLabel}>Tools &amp; Platforms</span>
              <span className={styles.skillValue}>Git, GitHub, SVN, AWS (S3/Lambda), VS Code, Cursor, Claude Code, AI-Assisted Development Workflows</span>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
