import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../assets/hero-bg.png";

export default function Home() {
  return (
    <div
      className="page-transition"
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        background: "#070b19",
      }}
    >
      {/* Hero Section with Background Image & Dark Overlay */}
      <div
        style={{
          position: "relative",
          padding: "6rem 2rem",
          backgroundImage: `linear-gradient(to bottom, rgba(7, 11, 25, 0.85), rgba(7, 11, 25, 0.95)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          textAlign: "center",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto", color: "#ffffff" }}>
          {/* Badge */}
          <span className="badge-tag">Codveda Internship Portfolio</span>

          {/* Main Header */}
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: "800",
              margin: "1rem 0 1.5rem 0",
              lineHeight: "1.2",
            }}
          >
            Full-Stack Web Development &{" "}
            <span style={{ color: "#60a5fa" }}>Task Deliverables</span>
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              color: "#94a3b8",
              lineHeight: "1.6",
              maxWidth: "700px",
              margin: "0 auto 2.5rem auto",
            }}
          >
            Welcome to my structured task submission portfolio. Explore the
            sections below to review project details, background concepts, and
            direct professional contact channels.
          </p>

          {/* Action Buttons */}
          <div
            style={{ display: "flex", justifyContent: "center", gap: "1rem" }}
          >
            <Link
              to="/about"
              style={{
                background: "#60a5fa",
                color: "#0f172a",
                padding: "0.85rem 1.75rem",
                borderRadius: "10px",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              Learn More About Project →
            </Link>
            <Link
              to="/contact"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "#ffffff",
                padding: "0.85rem 1.75rem",
                borderRadius: "10px",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Feature Cards Grid Section */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "4rem auto",
          padding: "0 2rem",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            textAlign: "left",
          }}
        >
          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              padding: "2rem",
              borderRadius: "16px",
            }}
          >
            <h3
              style={{
                color: "#ffffff",
                fontSize: "1.25rem",
                marginBottom: "0.75rem",
              }}
            >
              Clean Architecture
            </h3>
            <p
              style={{
                color: "#94a3b8",
                fontSize: "0.95rem",
                lineHeight: "1.5",
                margin: 0,
              }}
            >
              Built using modern React components, responsive layouts, and clean
              global CSS transitions.
            </p>
          </div>

          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              padding: "2rem",
              borderRadius: "16px",
            }}
          >
            <h3
              style={{
                color: "#ffffff",
                fontSize: "1.25rem",
                marginBottom: "0.75rem",
              }}
            >
              Smooth Routing
            </h3>
            <p
              style={{
                color: "#94a3b8",
                fontSize: "0.95rem",
                lineHeight: "1.5",
                margin: 0,
              }}
            >
              Seamless client-side navigation powered by React Router with
              fade-in animations on every page.
            </p>
          </div>

          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              padding: "2rem",
              borderRadius: "16px",
            }}
          >
            <h3
              style={{
                color: "#ffffff",
                fontSize: "1.25rem",
                marginBottom: "0.75rem",
              }}
            >
              Professional Links
            </h3>
            <p
              style={{
                color: "#94a3b8",
                fontSize: "0.95rem",
                lineHeight: "1.5",
                margin: 0,
              }}
            >
              Direct access channels to inspect source code repositories, GitHub
              commits, and professional profiles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
