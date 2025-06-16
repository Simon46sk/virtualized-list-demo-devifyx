// src/components/ListItem.jsx
import React from "react";
import styles from "../styles.module.css";

const ListItem = ({ index, style, data }) => {
  const item = data.items[index];
  return (
    <div className={styles.item} style={style}>
      <input
        type="checkbox"
        checked={item.selected}
        onChange={() => data.toggleSelect(item.id)}
      />
      <img
  src={item.avatar || "https://via.placeholder.com/60"}
  alt="avatar"
  className={styles.avatar}
  onError={(e) => {
    e.target.onerror = null;
    e.target.src = "https://via.placeholder.com/60";
  }}
/>

      <div>
        <strong>{item.name}</strong>
        <p>{item.description}</p>
        <small>{item.dateFormatted}</small>
      </div>
    </div>
  );
};

export default ListItem;
