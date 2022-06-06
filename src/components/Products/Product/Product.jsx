import React from "react";

const Product = (props) => {
  // Note: this id should come from api
  console.log(props.data);
  const product = { id: 1 };
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{props.data.name}</h3>
      <h6 data-cy="product-description">{props.data.description}</h6>
      <button data-cy="product-add-item-to-cart-button"></button>
      <div>
        <button data-cy="product-increment-cart-item-count-button">+</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button">-</button>
        <button data-cy="product-remove-cart-item-button">
          Remove from cart
        </button>
      </div>
    </div>
  );
};

export default Product;
