import Link from "next/link";
import styles from "./projects.module.scss";

export const metadata = {
  title: "Projects | Chris Randall – Software Developer",
  description:
    "Production software shipped for government agencies and enterprise clients. Enterprise platforms, government CRMs, public records systems, and modern full-stack applications.",
  openGraph: {
    title: "Projects | Chris Randall – Software Developer",
    description:
      "Production software shipped for government agencies and enterprise clients. Enterprise platforms, government CRMs, public records systems, and modern applications.",
    url: "https://www.chrisrandall.dev/projects",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const projects = [
  {
    id: "navajo-wind",
    name: "Navajo Nation WIND",
    category: "Enterprise Platform",
    role: "Lead Developer",
    url: "https://new.wind.enavajo.org/Login/login.html",
    summary:
      "Rebuilt a legacy operational platform into a modern JavaScript application for the Navajo Nation's workforce investment network. Owned the full scope of the modernization across frontend, backend, and infrastructure.",
    owned: [
      "Frontend architecture and full component system",
      "Role-based access control across multiple user tiers",
      "SQL workflows, relational database design, and backend services",
      "Third-party integrations and AWS deployments",
    ],
    stack: ["JavaScript", "React", "Node.js", "Express", "MySQL", "AWS"],
    impact: "313 active users supported across 110 chapters and 5 agencies statewide",
  },
  {
    id: "altsd-crm",
    name: "ALTSD CRM",
    category: "Government CRM",
    role: "Full Stack Developer",
    url: "https://crm.aging.nm.gov/",
    summary:
      "Full-stack administrative CRM for the New Mexico Aging and Long-Term Services Department. Delivered partner approval workflows, user management, CMS-driven content publishing, and public-facing event listing components.",
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
    role: "Independent Build",
    url: "https://otero.rtsclients.com/",
    summary:
      "Public-facing records search and administrative platform built independently for Otero County. Designed and delivered the full application from requirements through production deployment.",
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
    id: "stuff-cycler",
    name: "Stuff-Cycler",
    category: "Modern Side Project",
    role: "Solo Product Build",
    url: "https://stuff-cycler.netlify.app/",
    summary:
      "Consumer application built to demonstrate product thinking, modern tooling, and end-to-end application ownership. Features authentication, relational data modeling, and a clean product-oriented UX built on React and Supabase.",
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
    role: "Frontend Architecture",
    url: null,
    summary:
      "Large-scale operational workflow platform for a New Mexico state regulatory agency. Responsible for frontend architecture across a complex, multi-workflow application supporting licensing operations statewide.",
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
      "Modernized legacy C# interfaces into contemporary web application workflows for the New Mexico Office of the State Auditor. Improved usability, responsiveness, and long-term maintainability of internal audit tooling.",
    owned: [
      "Legacy interface analysis and modernization planning",
      "Frontend rebuild using modern JavaScript and jQuery",
      "Responsive design implementation across existing workflows",
      "Cross-browser compatibility and usability improvements",
    ],
    stack: ["JavaScript", "jQuery", "HTML5", "CSS3"],
    impact:
      "Modernized internal audit workflows, improving usability and maintainability of legacy government tooling",
  },
  {
    id: "ribbn",
    name: "Ribbn",
    category: "E-Commerce Platform",
    role: "Frontend Developer",
    url: "https://myribbn.com/",
    summary:
      "Production e-commerce platform built at a remote startup. Contributed reusable React and Next.js components to a fast-moving product team delivering a modern consumer shopping experience.",
    owned: [
      "Reusable React and Next.js component library",
      "Onboarding flows and product UI",
      "Collaborative delivery on a production codebase",
    ],
    stack: ["React", "Next.js", "Styled Components"],
    impact:
      "Shipped production components for a live consumer e-commerce platform",
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
          Production software shipped for government agencies, enterprise clients, and modern product builds. Each project represents real ownership, shipped code, and direct stakeholder collaboration.
        </p>
      </header>

      {/* ── Case Studies ── */}
      <ol className={styles.ProjectList} aria-label="Project case studies">
        {projects.map((project) => {
          const isContext = !project.url;
          return (
            <li key={project.id}>
              <article
                className={`${styles.Card} ${isContext ? styles.ContextCard : ''}`}
                aria-labelledby={`project-${project.id}`}
              >
                {/* Header row */}
                <div className={styles.CardHeader}>
                  <span className={styles.CategoryBadge}>{project.category}</span>
                  <span className={styles.RoleBadge}>{project.role}</span>
                </div>

                {/* Title */}
                <h2
                  id={`project-${project.id}`}
                  className={styles.CardTitle}
                >
                  {project.name}
                </h2>

                {/* Summary */}
                <p className={styles.CardSummary}>{project.summary}</p>

                {/* Ownership */}
                <ul className={styles.OwnedList} aria-label="Areas of ownership">
                  {project.owned.map((item) => (
                    <li key={item} className={styles.OwnedItem}>{item}</li>
                  ))}
                </ul>

                {/* Stack tags */}
                <div className={styles.StackRow} aria-label="Technologies used">
                  {project.stack.map((tag) => (
                    <span key={tag} className={styles.Tag}>{tag}</span>
                  ))}
                </div>

                {/* Impact */}
                <p className={styles.ImpactLine}>
                  <span className={styles.ImpactArrow} aria-hidden="true">→</span>
                  {project.impact}
                </p>

                {/* Footer */}
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
                      Production environment — not publicly accessible
                    </span>
                  )}
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
