import React from "react";
import ReactDOM from "react-dom/client";
import "boxicons/css/boxicons.min.css";

import App from "./App";

import "./style.css";

import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);