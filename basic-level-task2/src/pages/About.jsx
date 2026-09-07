import React from "react";
import { Link } from "react-router-dom";
import aboutTeam from "../assets/about-team.png";
import aboutPlanning from "../assets/about-planning.png";
import aboutDev from "../assets/about-dev.png";

export default function About() {
  return (
    <div
      className="page-transition"
      style={{ flex: 1, padding: "4rem 2rem", background: "#070b19" }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto", color: "#ffffff" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="badge-tag">About The Project</span>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "800",
              margin: "0 0 1rem 0",
            }}
          >
            Structured Architecture &{" "}
            <span style={{ color: "#60a5fa" }}>Internship Overview</span>
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#94a3b8",
              lineHeight: "1.6",
              maxWidth: "650px",
              margin: "0 auto",
            }}
          >
            Built to fulfill the Codveda internship task requirements with clean
            components, routing, and modern styling.
          </p>
        </div>

        {/* Section 1: Team & Collaboration */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
            alignItems: "center",
            marginBottom: "4rem",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "1.75rem",
                fontWeight: "700",
                marginBottom: "1rem",
                color: "#ffffff",
              }}
            >
              Designed for Scalability & Clean Code
            </h3>
            <p
              style={{
                color: "#94a3b8",
                lineHeight: "1.7",
                marginBottom: "1.5rem",
              }}
            >
              This project demonstrates proficiency in component-based UI
              development using React, client-side routing with React Router,
              and modular CSS styling. Every section has been streamlined to
              focus purely on core requirements and performance.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <Link
                to="/contact"
                style={{
                  background: "#60a5fa",
                  color: "#0f172a",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "8px",
                  fontWeight: "700",
                  textDecoration: "none",
                }}
              >
                Get in Touch →
              </Link>
            </div>
          </div>

          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              padding: "1rem",
              borderRadius: "16px",
              textAlign: "center",
            }}
          >
            <img
              src={aboutTeam}
              alt="About Team Illustration"
              style={{
                width: "100%",
                borderRadius: "12px",
                objectFit: "contain",
                maxHeight: "240px",
                display: "block",
              }}
            />
          </div>
        </div>

        {/* Section 2: Planning & Strategy */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
            alignItems: "center",
            marginBottom: "4rem",
          }}
        >
          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              padding: "1rem",
              borderRadius: "16px",
              textAlign: "center",
              order: window.innerWidth <= 768 ? 2 : 1,
            }}
          >
            <img
              src={aboutPlanning}
              alt="Project Planning Illustration"
              style={{
                width: "100%",
                borderRadius: "12px",
                objectFit: "contain",
                maxHeight: "240px",
                display: "block",
              }}
            />
          </div>

          <div style={{ order: window.innerWidth <= 768 ? 1 : 2 }}>
            <h3
              style={{
                fontSize: "1.75rem",
                fontWeight: "700",
                marginBottom: "1rem",
                color: "#ffffff",
              }}
            >
              Strategic Planning & Workflow
            </h3>
            <p
              style={{
                color: "#94a3b8",
                lineHeight: "1.7",
                marginBottom: "1.5rem",
              }}
            >
              Every feature and page layout was mapped out ahead of
              implementation, ensuring precise structural hierarchies,
              responsive design fidelity, and clean code management via Git.
            </p>
          </div>
        </div>

        {/* Section 3: Development & Engineering Pillars (with SVG Icons) */}
        <div style={{ marginBottom: "2rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3rem",
              alignItems: "center",
              marginBottom: "3rem",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "1.75rem",
                  fontWeight: "700",
                  marginBottom: "1rem",
                  color: "#ffffff",
                }}
              >
                Development & Execution
              </h3>
              <p
                style={{
                  color: "#94a3b8",
                  lineHeight: "1.7",
                  marginBottom: "1.5rem",
                }}
              >
                Built utilizing modern tooling like Vite for lightning-fast
                bundling, combined with custom CSS variables and entrance
                transitions for maximum visual engagement.
              </p>
            </div>

            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                padding: "1rem",
                borderRadius: "16px",
                textAlign: "center",
              }}
            >
              <img
                src={aboutDev}
                alt="Development Illustration"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  objectFit: "contain",
                  maxHeight: "240px",
                  display: "block",
                }}
              />
            </div>
          </div>

          {/* Three Core Pillars Cards */}
          <h3
            style={{
              fontSize: "1.8rem",
              fontWeight: "700",
              textAlign: "center",
              marginBottom: "2rem",
              color: "#ffffff",
            }}
          >
            Core Engineering <span style={{ color: "#60a5fa" }}>Pillars</span>
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            {/* Pillar 1 */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                padding: "2rem",
                borderRadius: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    padding: "0.6rem",
                    background: "rgba(96, 165, 250, 0.1)",
                    borderRadius: "10px",
                    display: "flex",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#60a5fa"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <h4 style={{ color: "#ffffff", fontSize: "1.2rem", margin: 0 }}>
                  Component Architecture
                </h4>
              </div>
              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "0.95rem",
                  lineHeight: "1.5",
                  margin: 0,
                }}
              >
                Built with modular React components, clean separation of
                concerns, and reusable layout wrappers.
              </p>
            </div>

            {/* Pillar 2 */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                padding: "2rem",
                borderRadius: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    padding: "0.6rem",
                    background: "rgba(96, 165, 250, 0.1)",
                    borderRadius: "10px",
                    display: "flex",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#60a5fa"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                  </svg>
                </div>
                <h4 style={{ color: "#ffffff", fontSize: "1.2rem", margin: 0 }}>
                  Responsive Layouts
                </h4>
              </div>
              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "0.95rem",
                  lineHeight: "1.5",
                  margin: 0,
                }}
              >
                Fully optimized for desktops, tablets, and mobile screens using
                flexible CSS grid systems.
              </p>
            </div>

            {/* Pillar 3 */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                padding: "2rem",
                borderRadius: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    padding: "0.6rem",
                    background: "rgba(96, 165, 250, 0.1)",
                    borderRadius: "10px",
                    display: "flex",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#60a5fa"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <h4 style={{ color: "#ffffff", fontSize: "1.2rem", margin: 0 }}>
                  Performance & Speed
                </h4>
              </div>
              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "0.95rem",
                  lineHeight: "1.5",
                  margin: 0,
                }}
              >
                Powered by Vite for lightning-fast bundling, smooth page
                transitions, and zero unnecessary runtime bloat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
