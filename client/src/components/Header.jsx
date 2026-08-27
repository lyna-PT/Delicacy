import { useState } from "react";
import { useCart } from "../context/CartContext";

function Header({ onCartOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const { cartCount } = useCart();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <a href="#home" className="logo">
        <i className="bx bxs-basket"></i>
        Delicacy
      </a>

      <button
        type="button"
        className="mobile-menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`navbar ${menuOpen ? "active" : ""}`}>
        <li>
          <a
            href="#home"
            className="home-active"
            onClick={closeMenu}
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#categories"
            onClick={closeMenu}
          >
            Categories
          </a>
        </li>

        <li>
          <a
            href="#products"
            onClick={closeMenu}
          >
            Products
          </a>
        </li>

        <li>
          <a
            href="#about"
            onClick={closeMenu}
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#customers"
            onClick={closeMenu}
          >
            Customers
          </a>
        </li>
      </ul>

      <div className="header-actions">
        <button
          className="cart-button"
          type="button"
          aria-label="Shopping cart"
          onClick={onCartOpen}
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 1.9-1.4L21 7H6" />
            <circle cx="10" cy="20" r="1.5" />
            <circle cx="18" cy="20" r="1.5" />
          </svg>

          {cartCount > 0 && (
            <span className="cart-count">
              {cartCount}
            </span>
          )}
        </button>

        <div className="profile">
          <img
            src="/img/profile.jpg"
            alt="Abdus Rahman"
          />

          <span>Abdus Rahman</span>

          <i className="bx bx-caret-down"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;