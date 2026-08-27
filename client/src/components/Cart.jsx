import { useCart } from "../context/CartContext";

function Cart({ isOpen, onClose }) {
  const {
    cartItems,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  return (
    <div className={`cart-overlay ${isOpen ? "active" : ""}`}>
      <div className="cart-panel">
        <div className="cart-header">
          <h2>Your Cart</h2>

          <button
            type="button"
            className="cart-close"
            onClick={onClose}
            aria-label="Close cart"
          >
            ×
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 1.9-1.4L21 7H6" />
                <circle cx="10" cy="20" r="1.5" />
                <circle cx="18" cy="20" r="1.5" />
              </svg>
            </div>

            <h3>Your cart is empty</h3>
            <p>Add some products to get started.</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.image}>
                  <img
                    src={`/img/${item.image}`}
                    alt={item.name}
                  />

                  <div className="cart-item-info">
                    <h3>{item.name}</h3>

                    <span className="cart-item-price">
                      {item.price}
                    </span>

                    <div className="quantity-controls">
                      <button
                        type="button"
                        onClick={() =>
                          decreaseQuantity(item.image)
                        }
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        type="button"
                        onClick={() =>
                          increaseQuantity(item.image)
                        }
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
                    ×
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Total</span>
                <strong>${cartTotal.toFixed(2)}</strong>
              </div>

              <button
                type="button"
                className="checkout-button"
              >
                Checkout
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
      </div>
    </div>
  );
}

export default Cart;