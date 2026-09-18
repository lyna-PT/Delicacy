import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <BrowserRouter>
      <Header onCartOpen={() => setCartOpen(true)} />

      <Routes>
        <Route
          path="/"
          element={<Home onCartOpen={() => setCartOpen(true)} />}
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      />
    </BrowserRouter>
  );
}

export default App;