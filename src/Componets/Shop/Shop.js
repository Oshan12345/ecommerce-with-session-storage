// import React, { useState } from "react";
// import fakeProductsData from "../../Product-data/index";
// import ProductCart from "./ProductCart";
// import ShoppingCart from "./ShoppingCart";
// import {
//   getProductFormSessionStorage,
//   storeProducts,
//   removeItem,
// } from "../../LocalDatabase/Session";
// const Shop = () => {
//   console.log(getProductFormSessionStorage());

//   const first10Products = fakeProductsData.slice(0, 8);
//   const second10Products = fakeProductsData.slice(9, 17);
//   //const third10Products = fakeProductsData.slice(18, 26);

//   const [order, setOrder] = useState([]);

//   const addToCart = (product) => {
//     let newProduct = [...order, product];
//     setOrder(newProduct);
//   };

//   return (
//     <div className="container d-flex flex-column-reverse flex-sm-row">
//       <div className=" m-auto" style={{ maxWidth: "75%" }}>
//         <div>
//           <h5 className="text-center">Our best pick</h5>
//           <div className="row row-cols-1 row-cols-md-4 g-2">
//             {first10Products.map((product) => (
//               <ProductCart
//                 product={product}
//                 key={product.sku}
//                 addToCart={addToCart}
//               />
//             ))}
//           </div>
//         </div>
//         <div className="mt-5">
//           <h5 className="text-center">Latest products</h5>
//           <div className="row row-cols-1 row-cols-md-4 g-2">
//             {second10Products.map((product) => (
//               <ProductCart
//                 product={product}
//                 key={product.sku}
//                 addToCart={addToCart}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className=" m-2">
//         <ShoppingCart order={order} />
//       </div>
//     </div>
//   );
// };

// export default Shop;

import React, { useState } from "react";
import fakeProductsData from "../../Product-data/index";
import ProductCart from "./ProductCart";
import ShoppingCart from "./ShoppingCart";
import {
  getProductFormSessionStorage,
  storeProducts,
} from "../../LocalDatabase/Session";
const Shop = () => {
  const first10Products = fakeProductsData.slice(0, 8);
  const second10Products = fakeProductsData.slice(9, 17);
  //const third10Products = fakeProductsData.slice(18, 26);

  const [order, setOrder] = useState([]);

  const addToCart = (product) => {
    storeProducts(product, "ordered-item");
    //these two lines are not necessary .these are helpful for updating UI incase removeItem function is triggred. quit interesting thing .Need to ask it

    let newProduct = [...order, product];
    setOrder(newProduct);
  };

  return (
    <div className="container d-flex flex-column-reverse flex-sm-row">
      <div className=" m-auto" style={{ maxWidth: "75%" }}>
        <div>
          <h5 className="text-center">Our best pick</h5>
          <div className="row row-cols-1 row-cols-md-4 g-1">
            {first10Products.map((product) => (
              <ProductCart
                product={product}
                key={product.sku}
                addToCart={addToCart}
              />
            ))}
          </div>
        </div>
        <div className="mt-5">
          <h5 className="text-center">Latest products</h5>
          <div className="row row-cols-1 row-cols-md-4 g-1">
            {second10Products.map((product) => (
              <ProductCart
                product={product}
                key={product.sku}
                addToCart={addToCart}
              />
            ))}
          </div>
        </div>
      </div>
      <div className=" m-2">
        <ShoppingCart
          order={order}
          productCart={getProductFormSessionStorage}
        />
      </div>
    </div>
  );
};

export default Shop;
