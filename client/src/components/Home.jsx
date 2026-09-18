import { useAuth } from "../context/AuthContext";
import Hero from "./Hero";
import Categories from "./Categories";
import Products from "./Products";
import About from "./About";
import Customers from "./Customers";
import Footer from "./Footer";

function Home({ onCartOpen }) {
  const { user } = useAuth();

  return (
    <main>
      {/* Keep the existing Hero Swiper for everyone */}
      <Hero />

      {user ? (
        /* =========================
           LOGGED-IN HOME
        ========================= */
        <>
          <section className="welcome-home">
            <div className="welcome-home-content">
              <span>Welcome back</span>

              <h1>
                Hello, <span>{user.name}</span> 👋
              </h1>

              <p>
                Ready to find something fresh today?
                <br />
                Explore our products and enjoy your shopping experience.
              </p>

              <div className="welcome-actions">
                <a href="#products" className="btn">
                  Shop Products
                  <i className="bx bx-right-arrow-alt"></i>
                </a>

                <button
                  type="button"
                  className="welcome-cart-button"
                  onClick={onCartOpen}
                >
                  <i className="bx bx-cart"></i>
                  View Cart
                </button>
              </div>
            </div>

            <div className="welcome-home-icon">
              <i className="bx bxs-shopping-bag"></i>
            </div>
          </section>

          <Categories />
          <Products />

          <section className="member-benefits">
            <div className="member-benefits-heading">
              <span>Your Delicacy Experience</span>

              <h2>
                Everything you need
                <br />
                <strong>in one place.</strong>
              </h2>
            </div>

            <div className="member-benefits-grid">
              <div className="member-benefit-card">
                <i className="bx bxs-leaf"></i>
                <h3>Fresh Products</h3>
                <p>
                  Browse our selection of fresh and quality products.
                </p>
              </div>

              <div className="member-benefit-card">
                <i className="bx bxs-cart"></i>
                <h3>Easy Shopping</h3>
                <p>
                  Add your favorites to your cart and manage your order
                  easily.
                </p>
              </div>

              <div className="member-benefit-card">
                <i className="bx bxs-user"></i>
                <h3>Your Account</h3>
                <p>
                  Your account keeps your shopping experience connected.
                </p>
              </div>
            </div>
          </section>

          <About />
        </>
      ) : (
        /* =========================
           LOGGED-OUT HOME
        ========================= */
        <>
          <Categories />
          <Products />

          <section className="guest-intro">
            <div className="guest-intro-content">
              <span>Why Delicacy?</span>

              <h2>
                Fresh choices.
                <br />
                <strong>Simple shopping.</strong>
              </h2>

              <p>
                Discover fresh products, explore our categories, and
                enjoy a simple shopping experience with Delicacy.
              </p>

              <a href="/register" className="btn">
                Create Account
                <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>

            <div className="guest-intro-cards">
              <div>
                <i className="bx bxs-leaf"></i>
                <h3>Fresh</h3>
                <p>Quality products for your everyday needs.</p>
              </div>

              <div>
                <i className="bx bxs-cart"></i>
                <h3>Simple</h3>
                <p>A straightforward way to shop your favorites.</p>
              </div>

              <div>
                <i className="bx bxs-heart"></i>
                <h3>Made for You</h3>
                <p>A shopping experience built around you.</p>
              </div>
            </div>
          </section>

          <About />
          <Customers />

          <section className="guest-cta">
            <span>Start shopping</span>

            <h2>
              Your next favorite
              <br />
              product is waiting.
            </h2>

            <p>
              Create your free account and start exploring Delicacy.
            </p>

            <a href="/register" className="btn">
              Get Started
              <i className="bx bx-right-arrow-alt"></i>
            </a>
          </section>
        </>
      )}

      <Footer />
    </main>
  );
}

export default Home;