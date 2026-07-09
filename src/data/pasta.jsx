import RaviolesOne from "../assets/img/pastas/pastas.jpg";
import RaviolesTwo from "../assets/img/pastas/raviolesJyQ.jpg";
import RaviolesThree from "../assets/img/pastas/Sorrentinos.jpg";
import RaviolesFour from "../assets/img/pastas/pastasRellenasNegra.jpg";
import RaviolesFive from "../assets/img/pastas/pastaRellenaNegra2.jpg";
import Noodles from "../assets/img/pastas/FideosBicolor.jpg";



const pasta = [
    {
    title: {
      en: "Fresh Noodles",
      es: "Fideos caseros al huevo",
    },

    description: {
      en: "",
      es: "Fideos caseros al huevo bi-color con curcuma y tinta de calamar.",
    },

    images:[
      Noodles,
    ]
  },
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
      en: "Ravioli with Colour",
      es: "Ravioles Bi-Color",
    },

    description: {
      en: "Homemade ravioli with colour fillings with atun,muzarella and ricota.",
      es: "Ravioles caseros con masa Bi-Color con relleno de aut, muzarella y ricota.",
    },

    images:[
      RaviolesFour,
      RaviolesFive
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