import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    taskNotes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setSubmitted(true);
    setFormData({ name: "", email: "", taskNotes: "" });
  };

  return (
    <div
      className="page-transition"
      style={{ flex: 1, padding: "4rem 2rem", background: "#070b19" }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto", color: "#ffffff" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="badge-tag">Get in Touch</span>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "800",
              margin: "0 0 1rem 0",
            }}
          >
            Contact & <span style={{ color: "#60a5fa" }}>Connect</span>
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
            Reach out directly through professional profiles or send your
            feedback using the form.
          </p>
        </div>

        {/* Two Column Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2.5rem",
            alignItems: "start",
          }}
        >
          {/* Left Column: LinkedIn, GitHub, Email */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                padding: "2rem",
                borderRadius: "16px",
              }}
            >
              <h3
                style={{
                  color: "#ffffff",
                  fontSize: "1.25rem",
                  marginTop: 0,
                  marginBottom: "1rem",
                }}
              >
                Direct Links
              </h3>
              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                  marginBottom: "1.5rem",
                }}
              >
                Connect professionally, inspect source repositories, or drop a
                message via email.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
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
                    gap: "0.75rem",
                    padding: "0.85rem 1rem",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "10px",
                    color: "#ffffff",
                    textDecoration: "none",
                    fontWeight: "600",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#60a5fa"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
                  </svg>
                  LinkedIn Profile
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.85rem 1rem",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "10px",
                    color: "#ffffff",
                    textDecoration: "none",
                    fontWeight: "600",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#ffffff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                  </svg>
                  GitHub Repository
                </a>

                {/* Email */}
                <a
                  href="mailto:your.email@example.com"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.85rem 1rem",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "10px",
                    color: "#ffffff",
                    textDecoration: "none",
                    fontWeight: "600",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
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
                  Email Me Directly
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Submission Form */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              padding: "2.5rem",
              borderRadius: "16px",
            }}
          >
            {submitted ? (
              <div
                style={{
                  background: "rgba(59, 130, 246, 0.1)",
                  border: "1px solid #3b82f6",
                  padding: "2rem",
                  borderRadius: "12px",
                  textAlign: "center",
                  color: "#93c5fd",
                }}
              >
                <h3 style={{ margin: "0 0 0.5rem 0", color: "#ffffff" }}>
                  Message Sent!
                </h3>
                <p style={{ margin: 0, fontSize: "0.9rem" }}>
                  Thank you! Your message has been sent successfully.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                <h3
                  style={{
                    color: "#ffffff",
                    fontSize: "1.25rem",
                    marginTop: 0,
                    marginBottom: "0.5rem",
                  }}
                >
                  Send a Message
                </h3>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      fontWeight: "600",
                      marginBottom: "0.4rem",
                      color: "#cbd5e1",
                    }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: "8px",
                      color: "white",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                    required
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      fontWeight: "600",
                      marginBottom: "0.4rem",
                      color: "#cbd5e1",
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: "8px",
                      color: "white",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                    required
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      fontWeight: "600",
                      marginBottom: "0.4rem",
                      color: "#cbd5e1",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Write your message here..."
                    value={formData.taskNotes}
                    onChange={(e) =>
                      setFormData({ ...formData, taskNotes: e.target.value })
                    }
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: "8px",
                      color: "white",
                      outline: "none",
                      boxSizing: "border-box",
                      resize: "vertical",
                    }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  style={{
                    background: "#ffffff",
                    color: "#0f172a",
                    fontWeight: "700",
                    padding: "0.85rem",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    marginTop: "0.5rem",
                  }}
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
