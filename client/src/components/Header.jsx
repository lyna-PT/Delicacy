import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function Header({ onCartOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const { cartCount } = useCart();
  const { user, logout } = useAuth();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    setProfileOpen(false);
    closeMenu();

    // Return to the home page after logout
    window.location.href = "/";
  };

  return (
    <header>
      {/* Logo */}
      <a href="/" className="logo" onClick={closeMenu}>
        <i className="bx bxs-basket"></i>
        Delicacy
      </a>

      {/* Mobile menu button */}
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
          <a href="/#home" className="home-active" onClick={closeMenu}>
            Home
          </a>
        </li>

        <li>
          <a href="/#categories" onClick={closeMenu}>
            Categories
          </a>
        </li>

        <li>
          <a href="/#products" onClick={closeMenu}>
            Products
          </a>
        </li>

        <li>
          <a href="/#about" onClick={closeMenu}>
            About
          </a>
        </li>

        <li>
          <a href="/#customers" onClick={closeMenu}>
            Customers
          </a>
        </li>
      </ul>

      {/* Right side */}
      <div className="header-actions">
        {/* Cart */}
        <button
          className="cart-button"
          type="button"
          aria-label="Shopping cart"
          onClick={onCartOpen}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 1.9-1.4L21 7H6" />
            <circle cx="10" cy="20" r="1.5" />
            <circle cx="18" cy="20" r="1.5" />
          </svg>

          {cartCount > 0 && (
            <span className="cart-count">{cartCount}</span>
          )}
        </button>

        {/* Authentication / Profile */}
        {!user ? (
          <div className="auth-actions">
            <a href="/login" className="header-login">
              Login
            </a>

            <a href="/register" className="header-register">
              Register
            </a>
          </div>
        ) : (
          <div className="profile-wrapper">
            <button
              type="button"
              className="profile"
              onClick={() => setProfileOpen(!profileOpen)}
              aria-expanded={profileOpen}
            >
              <img
                src="/img/profile.jpg"
                alt={user.name || "Profile"}
              />

              <span>{user.name}</span>

              <i className="bx bx-caret-down"></i>
            </button>

            {profileOpen && (
              <div className="profile-dropdown">
                <div className="profile-dropdown-user">
                  <strong>{user.name}</strong>
                  <span>{user.email}</span>
                </div>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="logout-button"
                >
                  <i className="bx bx-log-out"></i>
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;