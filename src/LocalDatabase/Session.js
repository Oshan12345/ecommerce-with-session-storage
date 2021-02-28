const getProductFormSessionStorage = (key) => {
  const getItem = sessionStorage.getItem(key);
  let productsArray = [];
  if (getItem === null) {
    productsArray = [];
  } else {
    productsArray = JSON.parse(getItem);
  }
  return productsArray;
};

//key-->ordered-item
const storeProducts = (item, key) => {
  let getItem = sessionStorage.getItem(key);
  let productsArray = [];
  if (getItem === null) {
    productsArray = [];
  } else {
    productsArray = JSON.parse(getItem);
  }
  productsArray.push(item);

  sessionStorage.setItem(key, JSON.stringify(productsArray));
  getProductFormSessionStorage(key);
};

const removeItem = (key, index) => {
  let productsArray = JSON.parse(sessionStorage.getItem(key));
  productsArray.splice(index, 1);

  sessionStorage.setItem(key, JSON.stringify(productsArray));

  getProductFormSessionStorage(key);
};

export { getProductFormSessionStorage, storeProducts, removeItem };
