"use client";

import React from "react";

const ErrorPage = () => {
  return (
    <div>
      <h1>Oops! Invalid Year or Month</h1>
      <p>
        The year or month you entered does not match any news records in our
        system. Please try again with valid inputs.
      </p>
    </div>
  );
};

export default ErrorPage;
