export const ProductsArray = [
  {
    id: 1,
    image: "https://i.imgur.com/19QyIKy.png",
    name: "BASIC",
    description: "Zdobądź solidne podstawy z dostępem do pakietu E-Booków",
    checklist: [
      "Dostęp do podstawowych kursów",
      "Projekty dla początkujących",
      "Kompleksowa edukacja",
      "Dostęp do zamkniętej grupy Discord"
    ],
    price: 44.49,
  },
  {
    id: 2,
    image: "https://i.imgur.com/19QyIKy.png",
    name: "PRO",
    description:
      "Otrzymaj dostęp do programu i nowoczesnego panelu, gdzie będziesz miec dostęp do wszystkiech wykupionych materiałów i zdobędziesz cenne wskazówki",
    checklist: [
      "Wszystko co w BASIC",
      "Dostęp do nowoczesnego panelu programu",
      "Kursy zaawansowane",
      "Projekty średniego poziomu",
      "Checklista i roadmapa nauki",
      "Cotygodniowe zadania z feedbackiem",
      "Early access do nowych materiałów"
    ],
    price: 114.99,
  },
  {
    id: 3,
    image: "https://i.imgur.com/19QyIKy.png",
    name: "ENTER",
    description:
      "Pakiet PRO + Kompleksowa edukacja z dodatkowymi materiałami, wsparciem indywidualnym oraz dostępem do ekskluzywnych i zasobów.",
    checklist: [
      "Wszystko co w PRO",
      "Kursy premium",
      "Dostęp do ekskluzywnych materiałów",
      "Indywidualne konsultacje",
      "Możliwość udziału w realnych projektach",
    ],
    price: 189.99,
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
