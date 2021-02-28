import React from "react";
const ProductCart = ({ product, addToCart }) => {
  const { description, image, name, model, price, shipping } = product;
  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={
            image ||
            "http://img.bbystatic.com/BestBuy_US/images/products/3736/373642_rc.jpg"
          }
          className="card-img-top img-fluid m-auto"
          alt="..."
          style={{ height: "200px", width: "200px", objectFit: "contain" }}
        />
        <div className="card-body">
          <h6 className="card-title">{name.substring(0, 30)}...</h6>
          <p>Model: {model}</p>
          <p className="card-text">{description.substring(0, 70)}...</p>
          <p>Price : {price}</p>
          <p>Shipping : {shipping}</p>
        </div>
        <div className="text-center">
          <button
            className="btn btn-warning w-75  text-center"
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
