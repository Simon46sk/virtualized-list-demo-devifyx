// src/App.jsx
import React, { useState, useMemo } from "react";
import { FixedSizeList as List } from "react-window";
import { generateData } from "./data/generateData";
import ListItem from "./components/ListItem";
import SearchBar from "./components/SearchBar";
import BulkActions from "./components/BulkActions";
import EmptyState from "./components/EmptyState";
import styles from "./styles.module.css";
import useDebounce from "./hooks/useDebounce";
const initialData = generateData(10000);

function App() {
  const [data, setData] = useState(initialData);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");

  // Inside App component
const debouncedQuery = useDebounce(query, 300);

// Use `debouncedQuery` instead of `query` in useMemo
const filteredData = useMemo(() => {
  let list = [...data].filter((item) =>
    item.name.toLowerCase().includes(debouncedQuery.toLowerCase())
  );
  // ... sorting logic
  return list;
}, [data, debouncedQuery, sortBy]);

  const toggleSelect = (id) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };
  
  const deleteSelected = () => {
    setData((prev) => prev.filter((item) => !item.selected));
  };

  return (
    <div className={styles.app}>
      <header>
        <h1>Virtualized List Demo</h1>
        <SearchBar query={query} setQuery={setQuery} />
        <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
          <option value="name">Sort by Name</option>
          <option value="date">Sort by Date</option>
        </select>
      </header>

      {filteredData.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          <BulkActions data={data} deleteSelected={deleteSelected} />
          <List
            height={600}
            itemCount={filteredData.length}
            itemSize={100}
            width={"100%"}
            itemData={{ items: filteredData, toggleSelect }}
          >
            {ListItem}
          </List>
        </>
      )}
    </div>
  );
}

export default App;
