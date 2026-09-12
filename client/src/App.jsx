import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import About from "./components/About";
import Customers from "./components/Customers";
import Footer from "./components/Footer";

import Login from "./components/Login";
import Register from "./components/Register";

function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Categories />
        <Products />
        <About />
        <Customers />
      </main>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;