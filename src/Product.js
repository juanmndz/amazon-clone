import React from "react";

function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <p>The lean startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <p>⭐️</p>
          <p>⭐️</p>
          <p>⭐️</p>
        </div>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/51YI9x6fqrL._SX324_BO1,204,203,200_.jpg"
        alt=""
      />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
