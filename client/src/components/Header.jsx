import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <a href="#home" className="logo">
        <i className="bx bxs-basket"></i>
        Delicacy
      </a>

      {/* Mobile hamburger */}
      <button
        type="button"
        className={`mobile-menu-button ${menuOpen ? "active" : ""}`}
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
          <a href="#home" className="home-active" onClick={closeMenu}>
            Home
          </a>
        </li>

        <li>
          <a href="#categories" onClick={closeMenu}>
            Categories
          </a>
        </li>

        <li>
          <a href="#products" onClick={closeMenu}>
            Products
          </a>
        </li>

        <li>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </li>

        <li>
          <a href="#customers" onClick={closeMenu}>
            Customers
          </a>
        </li>
      </ul>

      <div className="header-actions">
        <button
          className="cart-button"
          type="button"
          aria-label="Shopping cart"
        >
          <i className="bx bx-cart-alt"></i>
        </button>

        <div className="profile">
          <img src="/img/profile.jpg" alt="Abdus Rahman" />
          <span>Abdus Rahman</span>
          <i className="bx bx-caret-down"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;