import "./Portfolio.css";
import { useState } from "react";
import ProjectCarousel from "./ProjectCarousel";
import { Bold, Maximize2 } from "lucide-react";
import TypeIt from "typeit-react";
import Footer from "./Footer";

function Portfolio() {
  const [expandedRole, setExpandedRole] = useState<number | null>(null);

  const roles = [
    {
      id: 1,
      title: "Software Developer",
      company: "Manoa Now",
      period: "August 2025 - Present",
      description:
        "Redesigning, developing and maintaining web applications for the University of Hawaii community.",
      tech: ["BLOX CMS", "HTML"],
    },
    {
      id: 2,
      title: "DevOps Intern (Secret Clearance)",
      company: "Pacific Shipyards International",
      period: "June 2025 - July 2025",
      description:
        "Architected automated invoice processing system using Box.com AI API and Python, reducing manual processing time by over 50%. Managed IT infrastructure for 200+ users, troubleshooting devices and optimizing system performance",
      tech: ["BOX AI API", "Python"],
    },
  ];

  const toggleRole = (id: number) => {
    setExpandedRole(expandedRole === id ? null : id);
  };

  return (
    <div className="portfolio-page">
      {/* Terminal Window */}
      <div className="terminal-window">
        {/* Terminal Header */}
        <div className="terminal-header">
          <div className="terminal-buttons">
            <div className="terminal-button red"></div>
            <div className="terminal-button yellow"></div>
            <div className="terminal-button green"></div>
          </div>

          {/* Search Bar */}
          <div className="terminal-search-bar">
            <span className="lock-icon">🔒</span>
            <span className="url-text">karinapark.com</span>
          </div>

          <div className="terminal-maximize">
            <Maximize2 size={14} />
          </div>
        </div>
        {/* Window Content */}
        <div className="terminal-content">
          {/* Output */}
          <div>
            <h1 className="hero-title">
              <TypeIt
                options={{
                  speed: 100,
                  waitUntilVisible: true,
                }}
              >
                Hi, I'm Karina!&nbsp;
              </TypeIt>
            </h1>
            <div
              style={{
                marginLeft: "1.5rem",
                marginTop: "3rem",
                marginBottom: "2rem",
              }}
            >
              <p className="info-line">
                <span className="info-value">
                  Computer Science Student @ University of Hawaiʻi at Mānoa
                  <br />
                  Software Developer @ Mānoa Now
                </span>
              </p>
            </div>

            {/* Buttons */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                marginTop: "4rem",
                marginBottom: "4rem",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <a
                href="/CSLinkedIn.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-terminal"
              >
                View My Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "64rem", margin: "3rem auto" }}>
        <h2 className="section-title">/ about me</h2>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
            marginTop: "0rem",
          }}
        >
          <div className="info-value" style={{ flex: 1 }}>
            <p style={{ marginTop: "1rem" }}>
              I am studying for a B.S. in Computer Science in the Department of
              Information and Computer Sciences at the University of Hawaii,
              graduating Spring 2026.
            </p>
            <p style={{ marginTop: "1.5rem" }}>
              I'm a Software Developer who's excited and passionate about
              building solutions that connect, empower, and solve real problems.
            </p>
            <h3 className="technologies" style={{ marginTop: "1.5rem" }}>
              Recent Technologies:
            </h3>
            <p className="technology-type" style={{ marginTop: "0.5rem" }}>
              - TypeScript
            </p>
            <p className="technology-type" style={{ marginTop: "0.5rem" }}>
              - React
            </p>
            <p className="technology-type" style={{ marginTop: "0.5rem" }}>
              - Python
            </p>
            <p style={{ marginTop: "1.5rem" }}>
              <span className="info-key">My Interests:</span>{" "}
              <span className="info-value">
                Full-Stack Dev, AI/ML, Problem Solving
              </span>
            </p>
            <p style={{ marginTop: "1.5rem" }}>
              <span className="info-key">My Status:</span>{" "}
              <span className="info-value">Open to new opportunities!</span>
            </p>
          </div>

          <div style={{ flex: "0 0 300px" }}>
            <img
              src="/images/projects/ParkKarina.jpeg"
              alt="Your name"
              style={{
                width: "100%",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>
        </div>
      </div>
      {/* Dropdown Roles Section */}
      <div style={{ maxWidth: "64rem", margin: "3rem auto" }}>
        <h2 className="section-title">/ experience</h2>
        {/* Roles List with Dropdowns */}
        <div style={{ marginTop: "1rem" }}>
          {roles.map((role, index) => (
            <div
              key={role.id}
              style={{
                borderTop: index !== 0 ? "2px solid #e5e7eb" : "none",
                transition: "all 0.3s",
              }}
            >
              {/* Role Header - Always Visible */}
              <button
                onClick={() => toggleRole(role.id)}
                style={{
                  width: "100%",
                  padding: "1rem 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f9fafb")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: "bold",
                      color: "#1f2937",
                    }}
                  >
                    {role.title}
                  </h3>
                  <p
                    style={{
                      color: "#2563eb",
                      fontSize: "0.875rem",
                      fontWeight: "600",
                    }}
                  >
                    {role.company} • {role.period}
                  </p>
                </div>
                <div style={{ marginLeft: "1rem" }}>
                  <svg
                    style={{
                      width: "1.5rem",
                      height: "1.5rem",
                      color: "#2563eb",
                      transform:
                        expandedRole === role.id
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      transition: "transform 0.3s",
                    }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {/* Expandable Content */}
              {expandedRole === role.id && (
                <div style={{ paddingBottom: "1rem" }}>
                  <p
                    style={{
                      color: "#4b5563",
                      marginBottom: "1rem",
                      lineHeight: "1.6",
                    }}
                  >
                    {role.description}
                  </p>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
                  >
                    {role.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="skill-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Projects */}

      <div style={{ maxWidth: "64rem", margin: "3rem auto" }}>
        <h2 className="section-title">/ my projects</h2>
        <div style={{ marginTop: "2rem" }}>
          <ProjectCarousel />
        </div>
      </div>

      <div style={{ maxWidth: "64rem", margin: "3rem auto" }}>
        {/* Projects List */}
        <div style={{ marginTop: "3rem" }}>
          <div
            style={{
              borderTop: "none",
              padding: "1rem 0",
            }}
          >
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: "bold",
                color: "#1f2937",
                marginBottom: "0.5rem",
                textDecoration: "underline",
              }}
            >
              Livably | Full-Stack Web Application (powered by AI)
            </h3>
            <p
              style={{
                color: "#2563eb",
                fontSize: "0.875rem",
                fontWeight: "600",
                marginBottom: "0.75rem",
              }}
            >
              September 2025
            </p>
            <p
              className="info-value"
              style={{
                color: "#4b5563",
                marginBottom: "1rem",
                lineHeight: "1.6",
              }}
            >
              A webapp powered by AI that helps university students align their
              shared space living expectations
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              <span className="skill-badge">Typescript</span>
              <span className="skill-badge">React</span>
              <span className="skill-badge">Firebase</span>
              <span className="skill-badge">Gemini AI</span>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "3rem" }}>
          <div
            style={{
              borderTop: "none",
              padding: "1rem 0",
            }}
          >
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: "bold",
                color: "#1f2937",
                marginBottom: "0.5rem",
                textDecoration: "underline",
              }}
            >
              UH Manoa Rideshare | Full-Stack Web Application
            </h3>
            <p
              style={{
                color: "#2563eb",
                fontSize: "0.875rem",
                fontWeight: "600",
                marginBottom: "0.75rem",
              }}
            >
              November 2024
            </p>
            <p
              className="info-value"
              style={{
                color: "#4b5563",
                marginBottom: "1rem",
                lineHeight: "1.6",
              }}
            >
              Rideshare App connecting University of Hawaii Students
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              <span className="skill-badge">Typescript</span>
              <span className="skill-badge">React</span>
              <span className="skill-badge">PostgreSQL</span>
              <span className="skill-badge">Node.js</span>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "3rem" }}>
          <div
            style={{
              borderTop: "none",
              padding: "1rem 0",
            }}
          >
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: "bold",
                color: "#1f2937",
                marginBottom: "0.5rem",
                textDecoration: "underline",
              }}
            >
              Inventory Management System | Full-Stack Web Application
            </h3>
            <p
              style={{
                color: "#2563eb",
                fontSize: "0.875rem",
                fontWeight: "600",
                marginBottom: "0.75rem",
              }}
            >
              May 2025
            </p>
            <p
              className="info-value"
              style={{
                color: "#4b5563",
                marginBottom: "1rem",
                lineHeight: "1.6",
              }}
            >
              A full-stack inventory system to track inventory across multiple
              vendors on the UH Manoa campus
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                marginBottom: "5rem",
                gap: "0.5rem",
              }}
            >
              <span className="skill-badge">JavaScript</span>
              <span className="skill-badge">HTML</span>
              <span className="skill-badge">PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
