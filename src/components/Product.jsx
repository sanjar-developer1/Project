import "./styles/product.css";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import "./styles/product.css";

function product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const { theme } = useTheme();
  const [active, setActive] = useState("All");

  const center = [
    "All",
    "Bags",
    "Food",
    "Books",
    "Clothes",
    "Grocery",
    "Furniture",
    "Baby care",
    "Stationery",
    "Beauty & Makeup",
  ];

  return (
    <>
      <div className="product-wrapper">
        <div className="product-top">
          <p>Discover / Electronics</p>
          <h2>Best Selling Electronics Products - Weekly Update.</h2>
        </div>
        <div className={`product-center ${theme}`}>
          {center.map((item) => {
            return (
              <p
                key={item}
                className={active === item ? "active" : ""}
                onClick={() => setActive(item)}
              >
                {item}
              </p>
            );
          })}
        </div>
        <div className="product-list">
          {products.map((product) => {
            return (
              <div className="product-item" key={product.id}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: "calc(356/14.4*1vw)",
                    height: "calc(236/14.4*1vw)",
                  }}
                />
                <h3>{product.title.slice(0, 25)}...</h3>
                <p>{product.category}</p>

                <p style={{ color: "yellow" }}>{product.price}</p>
                <p>{product.price}</p>

                <span>{product.rating.count} ta bor</span>
                <span>{product.rating.rate} ⭐️</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default product;
