import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function Cart({ isOpen, onClose }) {
  const navigate = useNavigate();

  const {
    cartItems,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const { user } = useAuth();

  const handleCheckout = () => {
    onClose();

    if (!user) {
      navigate("/login");
      return;
    }

    navigate("/checkout");
  };

  return (
    <>
      {isOpen && (
        <div
          className="cart-overlay"
          onClick={onClose}
          aria-hidden="true"
        ></div>
      )}

      <aside className={`cart-panel ${isOpen ? "active" : ""}`}>
        <div className="cart-header">
          <div>
            <span>Your Shopping Cart</span>
            <h2>Cart</h2>
          </div>

          <button
            type="button"
            className="cart-close-button"
            onClick={onClose}
            aria-label="Close cart"
          >
            <i className="bx bx-x"></i>
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <i className="bx bx-cart"></i>

            <h3>Your cart is empty</h3>

            <p>
              Add some fresh products to your cart and they will
              appear here.
            </p>

            <button
              type="button"
              className="btn"
              onClick={onClose}
            >
              Start Shopping
              <i className="bx bx-right-arrow-alt"></i>
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => {
                const price = parseFloat(
                  String(item.price).replace(/[^0-9.]/g, "")
                );

                return (
                  <div className="cart-item" key={item.image}>
                    <img
                      src={`/img/${item.image}`}
                      alt={item.name}
                    />

                    <div className="cart-item-info">
                      <h3>{item.name}</h3>

                      <span className="cart-item-price">
                        ${price.toFixed(2)}
                      </span>

                      <div className="quantity-controls">
                        <button
                          type="button"
                          onClick={() =>
                            decreaseQuantity(item.image)
                          }
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          type="button"
                          onClick={() =>
                            increaseQuantity(item.image)
                          }
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="remove-cart-item"
                      onClick={() =>
                        removeFromCart(item.image)
                      }
                      aria-label={`Remove ${item.name}`}
                    >
                      <i className="bx bx-trash"></i>
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Total</span>

                <strong>
                  ${cartTotal.toFixed(2)}
                </strong>
              </div>

              <button
                type="button"
                className="checkout-button"
                onClick={handleCheckout}
              >
                {user ? "Proceed to Checkout" : "Login to Checkout"}
                <i className="bx bx-right-arrow-alt"></i>
              </button>

              <button
                type="button"
                className="clear-cart-button"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

export default Cart;