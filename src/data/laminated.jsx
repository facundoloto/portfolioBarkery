import medialunas1 from "../assets/img/laminados/medialunas1.jpeg";
import medialunas2 from "../assets/img/laminados/medialunas2.jpeg";
import medialunas3 from "../assets/img/laminados/medialunas3.jpg";

import facturas1 from "../assets/img/laminados/facturas.jpg";
import facturas2 from "../assets/img/laminados/facturas2.jpg";

import panDeChoco1 from "../assets/img/laminados/PanDeChoco4.jpg";
import panDeChoco2 from "../assets/img/laminados/panDeChoco3.jpg";

const laminated = [
  {
    title: {
      en: "Medialunas",
      es: "Medialunas",
    },

    description: {
      en: "Argentinian laminated pastries.",
      es: "Medialunas artesanales argentinas.",
    },

    images: [
      medialunas1,
      medialunas2,
      medialunas3
    ]
  },
  {
    title: {
      en: "Pain Au Chocolat",
      es: "Pain Au Chocolat",
    },

    description: {
      en: "Pain au chocolat is part of the typical French Viennoiserie; it is made with croissant dough and cocoa paste, creating that two-tone chocolate color.",
      es: "Pain au chocolat es parte de la Viennoiserie tipica de francia, esta echo con masa de croissant y masa de cacao haciendo ese bicolor chocolate.",
    },

    images: [
      panDeChoco1,
      panDeChoco2,
    ]
  },
    {
    title: {
      en: "Facturas Argentinian",
      es: "Facturas",
    },

    description: {
      en: "Typical pastries laminated argentinian with Custard and quince.",
      es: "Facturas clasicas argentinas con membrillo y pastelera.",
    },

    images: [
      facturas1,
      facturas2,
    ]
  },
];

export default laminated;