import React from "react";

function FilterPanel({ category, setCategory, sortOption, setSortOption }) {
  return (
    <div className="filter-panel w-64 px-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Filters</h2>

      <div className="mb-6">
        <label className="block text-sm text-gray-600 mb-1">Category</label>
        <select
          className="w-full border border-gray-300 rounded-md px-2 py-1"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All</option>
          <option>Clothing</option>
          <option>Footwear</option>
          <option>Watches</option>
          <option>Smartphone</option>
        </select>
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">Sort</label>
        <select
          className="w-full border border-gray-300 rounded-md px-2 py-1"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option>Price: ascending</option>
          <option>Price: descending</option>
          <option>Rating: ascending</option>
          <option>Rating: descending</option>
        </select>
      </div>
    </div>
  );
}

export default FilterPanel;
