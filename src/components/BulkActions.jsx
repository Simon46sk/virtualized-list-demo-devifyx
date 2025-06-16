// src/components/BulkActions.jsx
import React from "react";

const BulkActions = ({ data, deleteSelected }) => {
  const selectedCount = data.filter((d) => d.selected).length;

  return (
    selectedCount > 0 && (
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={deleteSelected}>Delete Selected ({selectedCount})</button>
      </div>
    )
  );
};

export default BulkActions;
