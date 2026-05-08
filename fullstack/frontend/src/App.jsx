import { useEffect, useState } from "react";

import "./App.css";

import ProductCard from "./components/ProductCard";
import CategoryFilter from "./components/CategoryFilter";

import {
  fetchCategories,
  fetchProducts,
} from "./services/api";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [selectedCategory, setSelectedCategory] =
    useState("");

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  async function loadCategories() {
    try {
      const data = await fetchCategories();
      setCategories(data);
    } catch (err) {
      setError(err.message);
    }
  }

  async function loadProducts(categoryId = "") {
    try {
      setLoading(true);
      setError("");

      const data = await fetchProducts(categoryId);

      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCategories();
    loadProducts();
  }, []);

  function handleCategoryChange(categoryId) {
    setSelectedCategory(categoryId);
    loadProducts(categoryId);
  }

  return (
    <div className="container">
      <h1>Catalog Produse</h1>

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onChange={handleCategoryChange}
      />

      {loading && (
        <p className="message">
          Se incarca produsele...
        </p>
      )}

      {error && (
        <div className="error-container">
          <p>{error}</p>

          <button
            onClick={() =>
              loadProducts(selectedCategory)
            }
          >
            Reincearca
          </button>
        </div>
      )}

      {!loading &&
        !error &&
        products.length === 0 && (
          <p className="message">
            Nu sunt produse in aceasta categorie
          </p>
        )}

      <div className="products-grid">
        {!loading &&
          !error &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
