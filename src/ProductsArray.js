export const ProductsArray = [
  {
    id: 1,
    image: "https://i.imgur.com/19QyIKy.png",
    name: "BASIC",
    description: "Zdobądź solidne podstawy z dostępem do pełnego pakietu E-Booków",
    price: 99.99,
  },
  {
    id: 2,
    image: "https://i.imgur.com/19QyIKy.png",
    name: "PRO",
    description:
      "Otrzymaj dostęp do programu i nowoczesnego panelu, gdzie będziesz miec dostęp do wszystkiech wykupionych materiałów i zdobędziesz cenne wskazówki",
    price: 174.99,
  },
  {
    id: 3,
    image: "https://i.imgur.com/19QyIKy.png",
    name: "ENTER",
    description:
      "Pakiet PRO + Kompleksowa edukacja z dodatkowymi materiałami, wsparciem indywidualnym oraz dostępem do ekskluzywnych i zasobów.",
    price: 239.99,
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
