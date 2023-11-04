import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = ({ products }) => {
  // console.log(products);
  const { id } = useParams();
  // console.log(id);

  const productId = parseInt(id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductDetail;
