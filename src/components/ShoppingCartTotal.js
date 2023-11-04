import React from "react";

const ShoppingCartTotal = ({ cart }) => {
  const totalAmount = cart.reduce((total, item) => total + item.price, 0);
  return (
    <div className="shopping-cart-total">
      <h4>Total Amount: ${totalAmount.toFixed(2)}</h4>
    </div>
  );
};

export default ShoppingCartTotal;
