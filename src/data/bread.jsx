import panDeCampo from "../assets/img/bread/panDeCampo.jpg";
import panDeCampoTwo from "../assets/img/bread/panDeCampo1.jpg";
import MigaPanDeCampo from "../assets/img/bread/MigaPanDeCampo.jpg";
import PanDeCenteno from "../assets/img/bread/PanDeCenteno.jpg";

const breads = [
  {
    title: {
      en: "sourdough bread",
      es: "Pan de Campo",
    },

    description: {
      en: "Traditional sourdough bread with natural fermentation.",
      es: "Pan artesanal con fermentación a base de masa madre.",
    },

    images: [
      panDeCampo,
      panDeCampoTwo,
      MigaPanDeCampo,
    ],
  },

  {
    title: {
      en: "sourdough rye bread",
      es: "Pan de centeno con masa madre",
    },

    description: {
      en: "Rye bread with a beautiful aroma and very nutritious thanks to the rye sourdough.",
      es: "pan de centeno con hermoso aroma y muy nutritivo gracias a la masa madre de centeno.",
    },

    images:[
     PanDeCenteno
    ]
  },
];

export default breads;