"use client";

import React from "react";
import Link from "next/link";
import "/styles/_projects.scss";
import { Card } from "@mui/material";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <div className="project-page-wrap">
      <div className="projects-header">
        <h1>Featured Projects</h1>
        <p>A collection of my recent work and personal projects</p>
      </div>

      <div className="projects-grid">
        {/* Found This - Featured Project */}
        <Card className="project-card featured">
          <div className="project-content">
            <div className="project-text">
              <h2>Found This</h2>
              <p className="project-description">
                A modern product discovery platform that enables users to curate and share interesting finds. 
                Built with Next.js 15 and React 18, the platform features a responsive design with glass-morphism UI elements, 
                real-time filtering, and dynamic image handling. The application integrates Sanity.io as a headless CMS 
                and implements optimistic UI updates for a seamless user experience.
              </p>
              <div className="tech-stack">
                <h4>Key Features</h4>
                <ul>
                  <li>Dynamic Product Grid</li>
                  <li>Real-time Search</li>
                  <li>Tag-based Filtering</li>
                  <li>Dark Mode Support</li>
                  <li>URL Image Preview</li>
                </ul>
              </div>
              <div className="tech-stack">
                <h4>Technologies Used</h4>
                <ul>
                  <li>Next.js 15</li>
                  <li>React 18</li>
                  <li>Sanity.io</li>
                  <li>SCSS</li>
                  <li>Material UI</li>
                </ul>
              </div>
              <Link href="https://found-this.netlify.app/" className="project-link" target="_blank">
                View Project →
              </Link>
            </div>
          </div>
        </Card>

        {/* Ribbn */}
        <Card className="project-card">
          <div className="project-content">
            <div className="project-text">
              <h2>Ribbn</h2>
              <p className="project-description">
                A professional e-commerce platform built with modern web technologies.
                Features a streamlined onboarding process and intuitive user interface.
              </p>
              <div className="tech-stack">
                <h4>Technologies Used</h4>
                <ul>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Styled Components</li>
                  <li>Custom Forms</li>
                </ul>
              </div>
              <Link href="https://myribbn.com/" className="project-link" target="_blank">
                View Project →
              </Link>
            </div>
          </div>
        </Card>

        {/* NBA Scores App */}
        <Card className="project-card">
          <div className="project-content">
            <div className="project-text">
              <h2>NBA Scores App</h2>
              <p className="project-description">
                Real-time NBA scores and statistics tracker with a modern, responsive interface.
              </p>
              <div className="tech-stack">
                <h4>Technologies Used</h4>
                <ul>
                  <li>React + Vite</li>
                  <li>Tailwind CSS</li>
                  <li>Material UI</li>
                  <li>Balldontlie API</li>
                </ul>
              </div>
              <Link href="https://crandall-nba-scores.netlify.app/" className="project-link" target="_blank">
                View Project →
              </Link>
            </div>
          </div>
        </Card>

        {/* Countries Data App */}
        <Card className="project-card">
          <div className="project-content">
            <div className="project-text">
              <h2>Countries Data App</h2>
              <p className="project-description">
                An interactive application that provides detailed information about countries worldwide,
                leveraging GraphQL for efficient data fetching and a clean, modern interface.
              </p>
              <div className="tech-stack">
                <h4>Technologies Used</h4>
                <ul>
                  <li>React + Vite</li>
                  <li>GraphQL</li>
                  <li>Apollo Client</li>
                  <li>Material UI</li>
                  <li>Styled Components</li>
                </ul>
              </div>
              <Link href="https://graphql-countries.netlify.app/" className="project-link" target="_blank">
                View Project →
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
