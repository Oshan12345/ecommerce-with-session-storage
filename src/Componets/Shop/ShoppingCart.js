// import React from "react";

// const ShoppingCart = ({ order, productCart }) => {
//   console.log(productCart, "jjjjjj");
// const cart=productCart()

//   let totalPrice = order
//     .reduce((total, item) => total + item.price, 0)
//     .toFixed(2);
//   totalPrice = Number(totalPrice);
//   let shippingCost = order
//     .reduce((total, item) => total + item.shipping, 0)
//     .toFixed(2);
//   shippingCost = Number(shippingCost);

//   let tax = ((totalPrice + shippingCost) * 0.1).toFixed(2);
//   tax = Number(tax);
//   return (
//     <div>
//       <div
//         className="card text-dark bg-warning mb-3"
//         style={{ maxWidth: "250rem" }}
//       >
//         <div className="card-header">Your Shopping Info</div>
//         <div className="card-body">
//           <h5 className="card-title">Items : {order.length} </h5>
//           <p className="card-text">Price : {totalPrice}</p>
//           <p className="card-text">Shipping Cost : {shippingCost}</p>
//           <p className="card-text">Tax : {tax}</p>
//           <p className="card-text">
//             Total : {(totalPrice + shippingCost + tax).toFixed(2)}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShoppingCart;

import React from "react";
import { Link } from "react-router-dom";
const ShoppingCart = ({ order, productCart, button }) => {
  console.log("sagar", button);
  const cart = productCart("ordered-item");

  let totalPrice = cart
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);
  totalPrice = Number(totalPrice);
  let shippingCost = cart
    .reduce((total, item) => total + item.shipping, 0)
    .toFixed(2);
  shippingCost = Number(shippingCost);

  let tax = ((totalPrice + shippingCost) * 0.1).toFixed(2);
  tax = Number(tax);
  return (
    <div>
      <div
        className="card text-dark bg-warning mb-3 text-center"
        style={{ maxWidth: "250rem" }}
      >
        <div className="card-header">Your Shopping Info -</div>
        <div className="card-body">
          <h5 className="card-title">Items : {cart.length} </h5>
          <p className="card-text">Price : {totalPrice}</p>
          <p className="card-text">Shipping Cost : {shippingCost}</p>
          <p className="card-text">Tax : {tax}</p>
          <p className="card-text">
            Total : {(totalPrice + shippingCost + tax).toFixed(2)}
          </p>
          {button ? (
            <Link to="/confirm-order">
              <button className="btn btn-primary">Confirm your order </button>
            </Link>
          ) : (
            <Link to="/order-summery">
              <button className="btn btn-primary">Show order details </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
