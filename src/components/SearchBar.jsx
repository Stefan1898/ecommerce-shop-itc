import React from "react";

function SearchBar({ searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, allCategories }) {
  return (
    <div style={{ margin: "20px 0", display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <input
        type="text"
        placeholder="Caută produse..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ padding: "8px", flex: "1" }}
      />
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        style={{ padding: "8px" }}
      >
        <option value="">Toate categoriile</option>
        {allCategories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SearchBar;
