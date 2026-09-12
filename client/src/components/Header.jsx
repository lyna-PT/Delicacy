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
      {/* Logo */}
      <a href="#home" className="logo">
        <svg
          className="logo-icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M4 8h16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <path
            d="M5 8l1.5 10h11L19 8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M8 8V6a4 4 0 0 1 8 0v2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <path
            d="M9 12v3M12 12v3M15 12v3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        Delicacy
      </a>

      {/* Mobile Menu */}
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

      {/* Navigation */}
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

      {/* Header Actions */}
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
            <path
              d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 1.9-1.4L21 7H6"
            />

            <circle
              cx="10"
              cy="20"
              r="1.5"
            />

            <circle
              cx="18"
              cy="20"
              r="1.5"
            />
          </svg>

          {cartCount > 0 && (
            <span className="cart-count">
              {cartCount}
            </span>
          )}
        </button>

        {/* Profile */}
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