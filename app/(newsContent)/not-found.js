import React from "react";

const NotFoundPage = () => {
  return (
    <div className="error">
      <h1 style={{ fontSize: "3rem", color: "#ff6f61" }}>
        404 - Page Not Found
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#555" }}>
        Oops! The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFoundPage;
