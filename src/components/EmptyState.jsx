// src/components/EmptyState.jsx
import React from "react";

const EmptyState = () => (
  <div style={{ padding: "2rem", textAlign: "center" }}>
    <img src="https://via.placeholder.com/150" alt="empty" />
    <p>No results found.</p>
  </div>
);

export default EmptyState;
