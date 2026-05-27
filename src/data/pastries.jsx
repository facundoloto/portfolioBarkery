import Alfajores from "../assets/img/pasteleria/Alfajores1.jpg";
import AlfajoresTwo from "../assets/img/pasteleria/Alfajores2.jpg";

import CheescakeOne from "../assets/img/pasteleria/Cheescake.jpg";
import CheescakeTwo from "../assets/img/pasteleria/Cheescake2.jpg";

import muffinCacao from "../assets/img/pasteleria/muffinCacao.jpg";

import tiramisu from "../assets/img/pasteleria/tiramisu.jpg";

import PastaFlora from "../assets/img/pasteleria/PastaFlora.jpg";

const pastries = [
  {
    title: {
      en: "Alfajores",
      es: "Alfajores",
    },

    description: {
      en: "Traditional artisan alfajores filled with dulce de leche.",
      es: "Alfajores artesanales rellenos con dulce de leche.",
    },

    images: [
      Alfajores,
      AlfajoresTwo,
    ],
  },

  {
    title: {
      en: "Cheesecake",
      es: "Cheesecake",
    },

    description: {
      en: "Creamy cheesecake with a smooth texture.",
      es: "Cheesecake cremoso con textura suave.",
    },

    images: [
      CheescakeOne,
      CheescakeTwo,
    ],
  },

  {
    title: {
      en: "Chocolate Muffin",
      es: "Muffin de Cacao",
    },

    description: {
      en: "Soft chocolate muffin with intense cacao flavor.",
      es: "Muffin suave con intenso sabor a cacao.",
    },

    images: [
      muffinCacao,
    ],
  },

  {
    title: {
      en: "Tiramisu",
      es: "Tiramisú",
    },

    description: {
      en: "Classic Italian dessert with coffee and cream layers.",
      es: "Postre italiano clásico con capas de café y crema.",
    },

    images: [
      tiramisu,
    ],
  },

  {
    title: {
      en: "Pasta Flora",
      es: "Pasta Flora",
    },

    description: {
      en: "Traditional tart filled with sweet potato.",
      es: "Tarta tradicional rellena con dulce de batata.",
    },

    images: [
      PastaFlora,
    ],
  },
];

export default pastries;