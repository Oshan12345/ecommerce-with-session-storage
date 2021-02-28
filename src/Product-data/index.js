import products from "./product";

const fakeProductsData = [...products];
const SuffleProducts = (a) => {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
};

SuffleProducts(fakeProductsData);

export default fakeProductsData;
