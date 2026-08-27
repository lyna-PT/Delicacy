import { useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import About from "./components/About";
import Customers from "./components/Customers";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

import { CartProvider } from "./context/CartContext";

function AppContent() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <Header onCartOpen={() => setCartOpen(true)} />

      <main>
        <Hero />
        <Categories />
        <Products />
        <About />
        <Customers />
      </main>

      <Footer />

      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;