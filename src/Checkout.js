import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          alt="add"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdIDF_JsS2dUqPYnZ51fHjU9KVpYqcgsjLKw&usqp=CAU"
        />

        <div>
          <h2 className="checkout__title">Your shopping basket</h2>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
