"use client";

import React from "react";
import Link from "next/link";
import "/styles/_projects.scss";
import { Card } from "@mui/material";

export default function page() {
  return (
    <div className="project-page-wrap">
      <div className="nav-hide"></div>
      <h2 style={{ marginLeft: 20 }}>Projects</h2>

      <Card className="project-card">
        <h3 className="card-title">NBA Scores App</h3>
        <h4 className="tools-used">Tools used:</h4>
        <ul>
          <li>React built with Vite</li>
          <li>Tailwind</li>
          <li>Material UI</li>
          <li>Balldontlie API (free basketball API)</li>
          <li>React Router</li>
          <br />
          <li>
            <Link href={"https://crandall-nba-scores.netlify.app/"} className="card-link">
              Link to project: https://crandall-nba-scores.netlify.app/
            </Link>
          </li>
        </ul>
      </Card>

      <Card className="project-card">
        <h3 className="card-title">Country Data App</h3>
        <h4 className="tools-used">Tools used:</h4>
        <ul>
          <li>React built with Vite</li>
          <li>GraphQL</li>
          <li>Apollo Client</li>
          <li>Material UI</li>
          <li>Styled components</li>
          <br />
          <li>
            <Link href={"https://graphql-countries.netlify.app/"} className="card-link">
              Link to project: https://graphql-countries.netlify.app/
            </Link>
          </li>
        </ul>
      </Card>

      <h2 style={{ marginLeft: 20 }}>Professional Work Examples</h2>

      <Card className="project-card">
        <h3 className="card-title">Oddly Reloved landing page and store pages</h3>
        <h4 className="tools-used">Tools used:</h4>
        <ul>
          <li>React</li>
          <li>Next.js</li>
          <li>Styled components</li>
          <li>Carousel built with Swiper.js</li>
          <br />
          <li>
            <Link href={"https://oddlyreloved.se/"} className="card-link">
              Link to store: https://oddlyreloved.se/
            </Link>
          </li>
        </ul>
      </Card>

      <Card className="project-card">
        <h3 className="card-title">Volant Collection landing page</h3>
        <h4 className="tools-used">Tools used:</h4>
        <ul>
          <li>React</li>
          <li>Next.js</li>
          <li>Styled components</li>
          <br />
          <li>
            <Link href={"https://volantcollection.com"} className="card-link">
              Link to store: https://volantcollection.com
            </Link>
          </li>
        </ul>
      </Card>

      <Card className="project-card">
        <h3 className="card-title">Ribbn.com onboarding form</h3>
        <h4 className="tools-used">Tools used:</h4>
        <ul>
          <li>React</li>
          <li>Next.js</li>
          <li>Styled components</li>
          <br />
          <li>
            <Link href={"https://myribbn.com/onboarding"} className="card-link">
              Link to store: https://myribbn.com/onboarding
            </Link>
          </li>
        </ul>
      </Card>
    </div>
  );
}
