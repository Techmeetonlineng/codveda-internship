import React from "react";

export default function Footer() {
  return (
    <footer
      className="footer"
      style={{
        background: "rgba(7, 11, 25, 0.95)",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        padding: "2rem 4rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1.5rem",
        color: "#94a3b8",
        fontSize: "0.9rem",
      }}
    >
      {/* Left: Brand */}
      <div>
        <p style={{ margin: 0, fontWeight: "600", color: "#ffffff" }}>
          Codveda Internship Portfolio
        </p>
      </div>

      {/* Center: Social Icons & Links */}
      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {/* LinkedIn */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "#94a3b8",
            textDecoration: "none",
            transition: "color 0.2s",
            fontWeight: "500",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="#60a5fa"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
          </svg>
          LinkedIn
        </a>

        {/* GitHub */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "#94a3b8",
            textDecoration: "none",
            transition: "color 0.2s",
            fontWeight: "500",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
          </svg>
          GitHub
        </a>

        {/* Email */}
        <a
          href="mailto:your.email@example.com"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "#94a3b8",
            textDecoration: "none",
            transition: "color 0.2s",
            fontWeight: "500",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#60a5fa"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          Email
        </a>
      </div>

      {/* Right: Copyright */}
      <div style={{ fontSize: "0.8rem", color: "#64748b" }}>
        &copy; {new Date().getFullYear()} Codveda Task Project. All rights
        reserved.
      </div>
    </footer>
  );
}
