import { useEffect, useState } from "react";
import api from "../services/api";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get("/categories");
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        setError("Unable to load categories.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="categories" id="categories">
      <div className="heading">
        <h1>
          Browse our hotest <br />
          <span>Ctegories</span>
        </h1>

        <a href="#products" className="btn">
          See All
          <i className="bx bx-right-arrow-alt"></i>
        </a>
      </div>

      {loading && <p>Loading categories...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
        <div className="categories-container">
          {categories.map((category) => (
            <div
              className={`box ${category.colorClass}`}
              key={category._id}
            >
              <img
                src={`/img/${category.image}`}
                alt={category.name}
              />

              <h2>{category.name}</h2>

              <span>{category.count}</span>

              <i className="bx bx-right-arrow-alt"></i>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Categories;