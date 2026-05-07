"use client";

import React from "react";
import styles from "./resume.module.scss";

export default function Resume() {
  return (
    <div className={styles.page}>
      <main className={styles.resume}>
        <button onClick={() => window.print()} className={styles.downloadBtn}>
          Download PDF
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
            Software Developer building enterprise-scale and public-facing web applications with JavaScript, React,
            Node.js, Express, MySQL, and AWS. Strong in frontend architecture, API integrations, SQL workflows, and
            stakeholder collaboration, with a track record of delivering polished, scalable software products.
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
              <li>Lead frontend architecture and application development across enterprise and public-facing platforms, owning UI systems, service integrations, SQL workflows, and technical implementation decisions.</li>
              <li>Rebuilt a legacy C# platform into a modern JavaScript-based enterprise application for the Navajo Nation, supporting 313 users across 110 chapters and 5 agencies.</li>
              <li>Designed and implemented core platform capabilities including RBAC, cross-application integrations, reporting systems, backend API workflows, and SQL data access spanning six relational databases.</li>
              <li>Led frontend architecture for a large-scale Retail Licensing &amp; Distribution platform, partnering daily with stakeholders to rapidly iterate on production-ready operational workflows.</li>
              <li>Independently developed a public-facing records search and administrative platform for Otero County, integrating enterprise authentication infrastructure, search workflows, permissions management, and CMS-style administrative tooling.</li>
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
              <li>Built reusable React and Next.js components and implemented client-facing product features within a production e-commerce platform.</li>
            </ul>
          </div>
        </section>

        {/* ── TECHNICAL SKILLS ── */}
        <section className={styles.section}>
          <h2>Technical Skills</h2>
          <div className={styles.skillsTable}>
            <div className={styles.skillRow}>
              <span className={styles.skillLabel}>Languages</span>
              <span className={styles.skillValue}>JavaScript (ES6+), HTML5, CSS3, SCSS, SQL</span>
            </div>
            <div className={styles.skillRow}>
              <span className={styles.skillLabel}>Frameworks &amp; Libraries</span>
              <span className={styles.skillValue}>React, Next.js, Node.js, Express, jQuery, Tailwind CSS, Bootstrap, Material UI, Kendo UI</span>
            </div>
            <div className={styles.skillRow}>
              <span className={styles.skillLabel}>Databases &amp; APIs</span>
              <span className={styles.skillValue}>MySQL, REST APIs, GraphQL, Firebase</span>
            </div>
            <div className={styles.skillRow}>
              <span className={styles.skillLabel}>Tools &amp; Platforms</span>
              <span className={styles.skillValue}>Git, GitHub, SVN, AWS (S3 / Lambda), VS Code, Cursor, AI-assisted engineering workflows</span>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
