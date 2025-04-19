import React from "react";

function Boundary({ loading, error, children }) {

  console.log("Boundary loading:", loading);
  console.log("Boundary error:", error);
  
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return <>{children}</>;
}

export default Boundary;