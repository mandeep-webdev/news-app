import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px 20px",
      }}
    >
      <h1 style={{ fontSize: "3rem", color: "#ff6f61" }}>
        404 - Page Not Found
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#555", marginBottom: "20px" }}>
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/news"
        style={{
          display: "inline-block",
          padding: "10px 15px",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px",
          fontSize: "1rem",
        }}
      >
        Go Back to News
      </Link>
    </div>
  );
}
