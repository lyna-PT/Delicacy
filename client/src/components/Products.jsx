import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import api from "../services/api";

function Products() {
  const { addToCart } = useCart();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");

        setProducts(response.data.products);
      } catch (error) {
        console.error("Failed to fetch products:", error);

        setError("Unable to load products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="products" id="products">
      <div className="heading">
        <h1>
          Our Popular <br />
          <span>products</span>
        </h1>

        <a href="#products" className="btn">
          Shop Now
          <i className="bx bx-right-arrow-alt"></i>
        </a>
      </div>

      {loading && (
        <p>Loading products...</p>
      )}

      {error && (
        <p>{error}</p>
      )}

      {!loading && !error && (
        <div className="products-container">
          {products.map((product) => (
            <div className="box" key={product.image}>
              <img
                src={`/img/${product.image}`}
                alt={product.name}
              />

              <span>{product.category}</span>

              <h2>{product.name}</h2>

              <h3 className="price">
                {product.price} <span>/kg</span>
              </h3>

              <button
                type="button"
                className="product-cart-button"
                aria-label={`Add ${product.name} to cart`}
                onClick={() => addToCart(product)}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 1.9-1.4L21 7H6" />
                  <circle cx="10" cy="20" r="1.5" />
                  <circle cx="18" cy="20" r="1.5" />
                </svg>
              </button>

              <button
                type="button"
                className="product-heart-button"
                aria-label={`Add ${product.name} to wishlist`}
              >
                ♡
              </button>

              <span className="discount">
                {product.discount}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Products;