import React from "react";
import "./styles/modal.css";

function Modal({ product, close }) {
  if (!product) return null;

  return (
    <div className="modal-backdrop" onClick={close}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={close}>
          ✖
        </button>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "200px", height: "200px", objectFit: "contain" }}
        />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>
          <strong>${product.price}</strong>
        </p>
      </div>
    </div>
  );
}

export default Modal;
