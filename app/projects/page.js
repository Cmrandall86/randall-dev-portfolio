import Link from "next/link";
import styles from "./projects.module.scss";

export const metadata = {
  title: "Projects | Chris Randall – Software Developer",
  description:
    "A selection of production software and personal builds that reflect how I think, build, and solve problems across frontend, backend, and product design.",
  openGraph: {
    title: "Projects | Chris Randall – Software Developer",
    description:
      "Production software shipped for government agencies and enterprise clients, plus personal builds demonstrating modern tooling and product thinking.",
    url: "https://www.chrisrandall.dev/projects",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const projects = [
  {
    id: "navajo-wind",
    name: "Navajo Nation WIND",
    category: "Enterprise Platform",
    role: "Lead Developer / Full Stack Ownership",
    url: "https://new.wind.enavajo.org/Login/login.html",
    summary:
      "The Navajo Nation's workforce investment platform was a legacy system that needed a full rebuild. I took ownership of the entire modernization, rewriting it as a modern JavaScript application. That meant frontend architecture, RBAC, relational SQL systems, backend services, and AWS infrastructure.",
    owned: [
      "Frontend architecture and full component system",
      "Role-based access control across multiple user tiers",
      "SQL workflows, relational database design, and backend services",
      "Third-party integrations and AWS deployments",
    ],
    stack: ["JavaScript", "React", "Node.js", "Express", "MySQL", "AWS"],
    impact: "313 active users across 110 chapters and 5 agencies statewide",
  },
  {
    id: "altsd-crm",
    name: "ALTSD CRM",
    category: "Government CRM",
    role: "Solo Developer",
    url: "https://crm.aging.nm.gov/",
    summary:
      "Built this CRM from scratch as the sole developer for the New Mexico Aging and Long-Term Services Department. It handles partner approvals, user management, and internal content workflows. I also built the event listing widgets that power the public-facing calendar on aging.nm.gov.",
    owned: [
      "CRM architecture and administrative dashboard",
      "Partner approval and user management workflows",
      "CMS content publishing system for operational teams",
      "Public-facing event widget components powering aging.nm.gov",
    ],
    stack: ["JavaScript", "React", "Node.js", "Express", "MySQL", "AWS"],
    impact:
      "Operational platform for statewide aging services administration and public event publishing",
  },
  {
    id: "otero-county",
    name: "Otero County",
    category: "Public Records Platform",
    role: "Solo Developer",
    url: "https://otero.rtsclients.com/",
    summary:
      "Independently built a public-facing records platform for Otero County, from requirements gathering through production deployment. Includes a public search interface, authentication, role-based access control, and CMS-style tooling for county administrators.",
    owned: [
      "Full application build from requirements to deployment",
      "Authentication system and role-based permissions",
      "Public records search interface and administrative workflows",
      "CMS-style tooling for county administrators",
    ],
    stack: ["JavaScript", "Node.js", "Express", "MySQL", "AWS"],
    impact:
      "Production county-level platform serving public records access and administrative operations",
  },
  {
    id: "circulate",
    name: "Circulate",
    category: "Modern Side Project",
    role: "Solo Full-Stack Developer",
    url: "https://use-circulate.netlify.app/",
    summary:
      "A personal project I built to stay sharp on modern tooling and think through a real product from scratch. It includes user authentication, relational data with Supabase, and a clean UI. The goal was end-to-end ownership: schema design, frontend, and deployment.",
    owned: [
      "Product design and UX decisions end-to-end",
      "Authentication system and session management with Supabase",
      "Relational data architecture and SQL schema design",
      "Full frontend build and Netlify deployment",
    ],
    stack: ["React", "Supabase", "SQL", "Netlify"],
    impact:
      "Demonstrates modern product thinking, current tooling choices, and solo full-stack ownership",
  },
  {
    id: "regulation-licensing",
    name: "Regulation & Licensing Department",
    category: "Operational Platform",
    role: "Frontend Architecture Lead",
    url: null,
    summary:
      "Led frontend architecture on a large operational platform for a New Mexico state regulatory agency. The application manages licensing workflows across multiple departments. My focus was building a scalable component system and workflow UI that could support a complex, multi-team environment.",
    owned: [
      "Frontend architecture across a large-scale application",
      "Component system design and implementation",
      "Workflow UI and administrative tooling",
      "Integration with backend services and data APIs",
    ],
    stack: ["JavaScript", "Node.js", "Express", "MySQL"],
    impact:
      "Operational platform supporting state regulatory licensing workflows across multiple departments",
  },
  {
    id: "state-auditor",
    name: "Office of the State Auditor",
    category: "Legacy Modernization",
    role: "Frontend Developer",
    url: null,
    summary:
      "Modernized the frontend of a legacy C# application used by the Office of the State Auditor. The existing interfaces were outdated and hard to maintain. I rebuilt the UI layer using modern JavaScript and jQuery, improving usability and making the codebase easier to work with going forward.",
    owned: [
      "Legacy interface analysis and modernization planning",
      "Frontend rebuild using modern JavaScript and jQuery",
      "Responsive design implementation across existing workflows",
      "Cross-browser compatibility and usability improvements",
    ],
    stack: ["JavaScript", "jQuery", "HTML5", "CSS3"],
    impact:
      "Modernized internal audit workflows and improved usability of legacy government tooling",
  },
  {
    id: "ribbn",
    name: "Ribbn",
    category: "E-Commerce Platform",
    role: "Frontend Developer",
    url: "https://myribbn.com/",
    summary:
      "Worked as a frontend developer at Ribbn, a remote e-commerce startup. Contributed reusable React and Next.js components to a fast-moving product team building a modern consumer shopping experience.",
    owned: [
      "Reusable React and Next.js component library",
      "Onboarding flows and product UI",
      "Collaborative delivery on a production codebase",
    ],
    stack: ["React", "Next.js", "Styled Components"],
    impact: "Shipped production components for a live consumer e-commerce platform",
  },
];

const sideProjects = [
  {
    id: "found-this",
    name: "Found This",
    category: "Side Project",
    url: "https://found-this.netlify.app/",
    summary:
      "A product discovery platform where users can curate and share interesting finds. Built with Next.js 15 and Sanity.io as a headless CMS, with real-time filtering, tag-based browsing, and a clean glass-morphism UI.",
    stack: ["Next.js", "React", "Sanity.io", "SCSS"],
  },
  {
    id: "nba-scores",
    name: "NBA Scores App",
    category: "Side Project",
    url: "https://crandall-nba-scores.netlify.app/",
    summary:
      "Real-time NBA scores and stats tracker. Quick build focused on API integration, clean data display, and a responsive layout using React and Vite.",
    stack: ["React", "Vite", "Tailwind CSS", "Balldontlie API"],
  },
  {
    id: "countries-explorer",
    name: "Countries Explorer",
    category: "Side Project",
    url: "https://graphql-countries.netlify.app/",
    summary:
      "Interactive country data explorer built to practice working with GraphQL and Apollo Client. Clean data-driven interface with search and filtering.",
    stack: ["React", "GraphQL", "Apollo Client", "Material UI"],
  },
];

export default function ProjectsPage() {
  return (
    <div className={styles.PageWrap}>
      {/* ── Page Header ── */}
      <header className={styles.PageHeader}>
        <p className={styles.PagePreTitle}>Portfolio</p>
        <div className={styles.PageDivider} aria-hidden="true" />
        <h1 className={styles.PageTitle}>Selected Work</h1>
        <p className={styles.PageSubtitle}>
          A selection of production software and personal builds that reflect how I think, build, and solve problems across frontend, backend, and product design.
        </p>
      </header>

      {/* ── Production Projects ── */}
      <ul className={styles.ProjectList} aria-label="Production project case studies">
        {projects.map((project) => {
          const isContext = !project.url;
          return (
            <li key={project.id}>
              <article
                className={`${styles.Card} ${isContext ? styles.ContextCard : ''}`}
                aria-labelledby={`project-${project.id}`}
              >
                <div className={styles.CardHeader}>
                  <span className={styles.CategoryBadge}>{project.category}</span>
                  <span className={styles.RoleBadge}>{project.role}</span>
                </div>

                <h2 id={`project-${project.id}`} className={styles.CardTitle}>
                  {project.name}
                </h2>

                <p className={styles.CardSummary}>{project.summary}</p>

                <ul className={styles.OwnedList} aria-label="Areas of ownership">
                  {project.owned.map((item) => (
                    <li key={item} className={styles.OwnedItem}>{item}</li>
                  ))}
                </ul>

                <div className={styles.StackRow} aria-label="Technologies used">
                  {project.stack.map((tag) => (
                    <span key={tag} className={styles.Tag}>{tag}</span>
                  ))}
                </div>

                <p className={styles.ImpactLine}>
                  <span className={styles.ImpactArrow} aria-hidden="true">→</span>
                  {project.impact}
                </p>

                <div className={styles.CardFooter}>
                  {project.url ? (
                    <Link
                      href={project.url}
                      className={styles.LiveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name} live project (opens in new tab)`}
                    >
                      View Live Project <span aria-hidden="true">→</span>
                    </Link>
                  ) : (
                    <span className={styles.InternalNote}>
                      Production environment, not publicly accessible
                    </span>
                  )}
                </div>
              </article>
            </li>
          );
        })}
      </ul>

      {/* ── Side Projects Section ── */}
      <div className={styles.SectionBreak}>
        <h2 className={styles.SectionLabel}>Side Projects &amp; Experiments</h2>
        <div className={styles.SectionDivider} aria-hidden="true" />
        <p className={styles.SectionSubtitle}>
          Personal builds and explorations outside of client work.
        </p>
      </div>

      <ul className={styles.ProjectList} aria-label="Side projects and experiments">
        {sideProjects.map((project) => (
          <li key={project.id}>
            <article
              className={styles.SmallCard}
              aria-labelledby={`project-${project.id}`}
            >
              <div className={styles.CardHeader}>
                <span className={styles.CategoryBadgeMuted}>{project.category}</span>
              </div>

              <h3 id={`project-${project.id}`} className={styles.CardTitleSm}>
                {project.name}
              </h3>

              <p className={styles.CardSummary}>{project.summary}</p>

              <div className={styles.StackRow} aria-label="Technologies used">
                {project.stack.map((tag) => (
                  <span key={tag} className={styles.Tag}>{tag}</span>
                ))}
              </div>

              <div className={styles.CardFooter}>
                <Link
                  href={project.url}
                  className={styles.LiveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} (opens in new tab)`}
                >
                  View Project <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
