import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./components/ProductList";
import FilterPanel from "./components/FilterPanel";
import Navbar from "./components/Navbar";

function App() {
  const [products, getProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState("");

  async function fetchData() {
    let res = await axios.get(
      "https://68e0dc4d93207c4b47959959.mockapi.io/products"
    );
    // let res = await axios.get("http://localhost:3000/products");
    console.log(res.data);
    getProducts(res.data);
    // setFilteredProducts(res.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    let result = products.filter(
      (product) => category === "All" || product.category === category
    );
    const sorted = sortProducts(result, sortOption);
    setFilteredProducts(sorted);
  }, [products, category, sortOption]);

  function sortProducts(productsList, sortOption) {
    return productsList.sort((a, b) => {
      switch (sortOption) {
        case "Price: ascending":
          return a.price - b.price;
        case "Price: descending":
          return b.price - a.price;
        case "Rating: ascending":
          return a.rating - b.rating;
        case "Rating: descending":
          return b.rating - a.rating;
        default:
          return 0; // no sort
      }
    });
  }

  function handleSearch() {
    const term = searchTerm.toLowerCase();

    const result = products.filter((product) => {
      const search = product.name.toLowerCase().includes(term);
      return search;
    });

    setFilteredProducts(result);
  }

  return (
    <>
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />

      <div className="flex flex-col py-5 lg:flex-row lg:py-10">
        <FilterPanel
          category={category}
          setCategory={setCategory}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />

        {/* Divider */}
        <div className="w-full lg:w-px h-px lg:h-auto bg-gray-300 my-4 lg:my-0 mx-0 lg:mx-4"></div>

        <div className="px-10">
          <h1 className="text-2xl font-semibold ">Product List</h1>
          <ProductList products={filteredProducts} />
        </div>
      </div>
    </>
  );
}

export default App;
