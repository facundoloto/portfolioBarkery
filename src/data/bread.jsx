import panDeCampo from "../assets/img/bread/panDeCampo.jpg";
import panDeCampoTwo from "../assets/img/bread/panDeCampo1.jpg";
import MigaPanDeCampo from "../assets/img/bread/MigaPanDeCampo.jpg";
import PanDeCenteno from "../assets/img/bread/PanDeCenteno.jpg";
import PanDeCampoThree from "../assets/img/bread/PanDeCampo2.jpg"
import PanBrioche from "../assets/img/bread/PanBrioche.jpg";
import PanBriocheTwo from "../assets/img/bread/PanBrioche2.jpg";

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
      PanDeCampoThree,
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
   {
    title: {
      en: "hamburger bun",
      es: "Pan Brioche hamburgesa",
    },

    description: {
      en: "",
      es: "",
    },

    images:[
     PanBrioche,
     PanBriocheTwo
    ]
  },
];

export default breads;