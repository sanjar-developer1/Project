import "./styles/product.css";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import Modal from "./Modal";
function Product({ products }) {
  // fo'n o'zgarishi
  const { theme } = useTheme();
  const [active, setActive] = useState("All");

  // modal oyna
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

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
          {center.map((item) => (
            <p
              key={item}
              className={active === item ? "active" : ""}
              onClick={() => setActive(item)}
            >
              {item}
            </p>
          ))}
        </div>

        <div className="product-list">
          {products.map((product) => (
            <div className="product-item" key={product.id}>
              <div className="hover-btn-wrapper">
                <button
                  className="icon-button"
                  onClick={() => openModal(product)}
                >
                  <i className="fa-solid fa-eye"></i>
                </button>
              </div>

              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: "calc(330/14.4*1vw)",
                  height: "calc(236/14.4*1vw)",
                }}
              />
              <h3 className="product-title">{product.title.slice(0, 25)}...</h3>

              <div
                className="price-row"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <span
                  style={{
                    color: "red",
                    textDecoration: "line-through",
                  }}
                >
                  ${product.price + 1}
                </span>

                <span
                  style={{
                    fontWeight: "600",
                    color: "yellow",
                  }}
                >
                  ${product.price}
                </span>
              </div>

              <div className="count">
                <span className="product-count">
                  {product.rating.count} ta bor
                </span>
                <span className="product-rate">{product.rating.rate} ⭐️</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && <Modal product={selectedProduct} close={closeModal} />}
    </>
  );
}

export default Product;
