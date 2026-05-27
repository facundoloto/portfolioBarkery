import RaviolesOne from "../assets/img/pastas/pastas.jpg";
import RaviolesTwo from "../assets/img/pastas/raviolesJyQ.jpg";
import RaviolesThree from "../assets/img/pastas/Sorrentinos.jpg";


const pasta = [
  {
    title: {
      en: "Fresh Ravioli",
      es: "Ravioles Frescos rellenos",
    },

    description: {
      en: "Homemade ravioli with artisan dough fillings with spinach and ricotta and the others with jam and cheese.",
      es: "Ravioles caseros con masa artesanal unos rellenos de espinica con ricota y los otros con jamon y queso .",
    },

    images:[
      RaviolesOne,
      RaviolesTwo
    ]
  },

  {
    title: {
      en: "Sorrentinos ",
      es: "Sorrentinos",
    },

    description: {
      en: "Sorrentinos filled with chard and chicken.",
      es: "Sorrentinos rellenos de acelga y pollo .",
    },

    images:[
      RaviolesThree
    ]
  },
];

export default pasta;