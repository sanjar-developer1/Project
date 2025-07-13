import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Product from "./components/Product";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setAllProducts(data);
      });
  }, []);

  return (
    <ThemeProvider>
      <div className="app-layout">
        <Sidebar />
        <div className="main-content">
          <Navbar allProducts={allProducts} setProducts={setProducts} />
          <Product products={products} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
