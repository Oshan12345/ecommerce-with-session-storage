import React, { useState } from "react";
import {
  removeItem,
  getProductFormSessionStorage,
} from "../LocalDatabase/Session";
import ShoppingCart from "./Shop/ShoppingCart";
const OrderSummery = () => {
  const getOrderedProduct = getProductFormSessionStorage("ordered-item");
  const [order, setOrder] = useState([]);
  const removeItemFromCart = (index) => {
    removeItem("ordered-item", index);
    //these two lines are not necessary .these are helpful for updating UI incase removeItem function is triggred. quit interesting thing .Need to ask it
    let newProduct = [...order, index];
    setOrder(newProduct);
  };

  return (
    <div>
      <div className="container">
        <ShoppingCart
          productCart={getProductFormSessionStorage}
          button="confirm-order"
        />
      </div>

      <div className="container d-flex flex-column justify-content-center mt-5 mb-5">
        {getOrderedProduct.map((product, index) => (
          <SingleItem
            product={product}
            key={index}
            // removeItemFunction={{ removeItem, index }}
            removeItemFunction={{ removeItemFromCart, index }}
          />
        ))}
      </div>
    </div>
  );
};

const SingleItem = ({ product, removeItemFunction }) => {
  const { removeItemFromCart, index } = removeItemFunction;
  const {
    description,
    image,
    name,
    model,
    price,
    shipping,
    manufacturer,
  } = product;
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body">
          <div className=" align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row d-flex justify-content-between">
            <div className="mr-2 mb-3 mb-lg-0">
              <img
                src={image}
                width="150"
                height="150"
                alt=""
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="card-body w-50">
              <h6 className="card-title font-weight-semibold">{name}</h6>
              <ul className="list-inline list-inline-dotted mb-3 mb-lg-2">
                <li className="list-inline-item">Model : {model}</li>
                <li className="list-inline-item">
                  Manufacturer : {manufacturer}
                </li>
              </ul>
              <p className="mb-3">{description}</p>
            </div>
            <div className="mt-3 mt-lg-0 ml-lg-3 text-center">
              <h3 className="mb-0 font-weight-semibold"> price : ${price}</h3>
              <div>
                <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                <i className="fa fa-star"></i> <i className="fa fa-star"></i>
              </div>
              <div className="text-muted"> Shipping : {shipping}</div>
              <button
                type="button"
                className="btn btn-warning mt-4 text-white"
                onClick={() => removeItemFromCart(index)}
              >
                RemoveItem
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummery;
