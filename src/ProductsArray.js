export const ProductsArray = [
  {
    id: 1,
    image: "https://i.imgur.com/19QyIKy.png",
    name: "Podstawy tworzenia stron internetowych w React JS + AI i zdobywanie pierwszych klientów",
    price: 44.99,
  },
  {
    id: 2,
    image: "https://i.imgur.com/19QyIKy.png",
    name: "Podstawy tworzenia stron internetowych w React JS + AI i zdobywanie pierwszych klientów",
    price: 13.99,
  },
  {
    id: 3,
    image: "https://i.imgur.com/19QyIKy.png",
    name: "Podstawy tworzenia stron internetowych w React JS + AI i zdobywanie pierwszych klientów",
    price: 134.99,
  },
];

export const getProductData = (id) => {
  let productData = ProductsArray.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product data not found!");
    return undefined;
  }

  return productData;
};
