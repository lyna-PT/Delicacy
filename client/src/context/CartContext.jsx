import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem("delicacy-cart");

      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Failed to restore cart:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("delicacy-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.image === product.image
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.image === product.image
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentItems,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (productImage) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.image !== productImage)
    );
  };

  const increaseQuantity = (productImage) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.image === productImage
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (productImage) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.image === productImage
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cartItems.reduce((total, item) => {
    const price = parseFloat(
      String(item.price).replace(/[^0-9.]/g, "")
    );

    return total + price * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        cartTotal,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}