import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function Checkout() {
  const navigate = useNavigate();

  const { user } = useAuth();

  const {
    cartItems,
    cartTotal,
  } = useCart();

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    country: "",
    city: "",
    address: "",
  });

  const shipping = cartTotal > 0 ? 5 : 0;
  const total = cartTotal + shipping;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Checkout data:", {
      customer: formData,
      items: cartItems,
      subtotal: cartTotal,
      shipping,
      total,
    });

    alert(
      "Checkout information submitted successfully. Orders will be connected next."
    );
  };

  if (!user) {
    return (
      <section className="checkout-page">
        <div className="checkout-message">
          <i className="bx bx-lock-alt"></i>

          <h1>Login Required</h1>

          <p>
            Please login to continue with your checkout.
          </p>

          <button
            type="button"
            className="btn"
            onClick={() => navigate("/login")}
          >
            Login
            <i className="bx bx-right-arrow-alt"></i>
          </button>
        </div>
      </section>
    );
  }

  if (cartItems.length === 0) {
    return (
      <section className="checkout-page">
        <div className="checkout-message">
          <i className="bx bx-cart"></i>

          <h1>Your Cart Is Empty</h1>

          <p>
            Add products to your cart before continuing
            to checkout.
          </p>

          <button
            type="button"
            className="btn"
            onClick={() => navigate("/")}
          >
            Start Shopping
            <i className="bx bx-right-arrow-alt"></i>
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="checkout-page">
      <div className="checkout-container">

        <div className="checkout-heading">
          <span>Complete Your Order</span>

          <h1>
            Checkout
          </h1>

          <p>
            Enter your delivery information and review
            your order before placing it.
          </p>
        </div>

        <div className="checkout-grid">

          {/* LEFT */}
          <form
            className="checkout-form"
            onSubmit={handleSubmit}
          >
            <div className="checkout-card">
              <div className="checkout-card-heading">
                <i className="bx bx-user"></i>

                <div>
                  <h2>Customer Information</h2>
                  <p>Your contact information</p>
                </div>
              </div>

              <div className="checkout-fields">

                <div className="checkout-field">
                  <label htmlFor="name">
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="checkout-field">
                  <label htmlFor="email">
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>

                <div className="checkout-field">
                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>

              </div>
            </div>

            <div className="checkout-card">
              <div className="checkout-card-heading">
                <i className="bx bx-map"></i>

                <div>
                  <h2>Shipping Address</h2>
                  <p>Where should we deliver your order?</p>
                </div>
              </div>

              <div className="checkout-fields">

                <div className="checkout-field">
                  <label htmlFor="country">
                    Country
                  </label>

                  <input
                    id="country"
                    name="country"
                    type="text"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    placeholder="Enter your country"
                  />
                </div>

                <div className="checkout-field">
                  <label htmlFor="city">
                    City
                  </label>

                  <input
                    id="city"
                    name="city"
                    type="text"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    placeholder="Enter your city"
                  />
                </div>

                <div className="checkout-field checkout-field-full">
                  <label htmlFor="address">
                    Address
                  </label>

                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    rows="4"
                    placeholder="Enter your full delivery address"
                  ></textarea>
                </div>

              </div>
            </div>

            <button
              type="submit"
              className="place-order-button"
            >
              Place Order
              <i className="bx bx-check"></i>
            </button>

          </form>

          {/* RIGHT */}
          <aside className="checkout-summary">

            <div className="checkout-summary-header">
              <span>Your Order</span>

              <h2>
                Order Summary
              </h2>
            </div>

            <div className="checkout-summary-items">
              {cartItems.map((item) => {
                const price = parseFloat(
                  String(item.price).replace(/[^0-9.]/g, "")
                );

                const itemTotal =
                  price * item.quantity;

                return (
                  <div
                    className="checkout-summary-item"
                    key={item.image}
                  >
                    <img
                      src={`/img/${item.image}`}
                      alt={item.name}
                    />

                    <div>
                      <h3>{item.name}</h3>

                      <span>
                        {item.quantity} × $
                        {price.toFixed(2)}
                      </span>
                    </div>

                    <strong>
                      ${itemTotal.toFixed(2)}
                    </strong>
                  </div>
                );
              })}
            </div>

            <div className="checkout-summary-details">

              <div>
                <span>Subtotal</span>
                <strong>
                  ${cartTotal.toFixed(2)}
                </strong>
              </div>

              <div>
                <span>Shipping</span>
                <strong>
                  ${shipping.toFixed(2)}
                </strong>
              </div>

              <div className="checkout-summary-total">
                <span>Total</span>
                <strong>
                  ${total.toFixed(2)}
                </strong>
              </div>

            </div>

          </aside>

        </div>
      </div>
    </section>
  );
}

export default Checkout;