import React from "react";
import { useState } from "react";

function Navbar({ searchTerm, setSearchTerm, handleSearch }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex justify-between items-center py-5 px-7 bg-blue-500">
      <h1 className="text-xl font-bold text-white mb-3 sm:mb-0">ShopEase</h1>
      <div className="flex items-center gap-2">
        <input
          type="text"
          className="bg-white/90 px-4 py-2 rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for Products"
        />
        <button
          onClick={handleSearch}
          className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-md"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Navbar;
