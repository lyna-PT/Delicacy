import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import About from "./components/About";
import Customers from "./components/Customers";
import Footer from "./components/Footer";

function App() {
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

export default App;