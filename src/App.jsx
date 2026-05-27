import Header from "./components/Header";
import About from "./components/About";

import BreadCarousel from "./components/Carousel/BreadCarousel";
import LaminatedCarousel from "./components/Carousel/LaminatedCarousel";
import PastryCarousel from "./components/Carousel/PastryCarousel";
import PastaCarousel from "./components/Carousel/PastaCarousel";

import Footer from "./components/Footer";

export default function App() {
  return (
    <div
      className="
        min-h-screen

        bg-stone-100
        text-black

        dark:bg-stone-950
        dark:text-white

        transition-colors
        duration-300
      "
    >
      <Header />

      <About />

      <BreadCarousel />

      <LaminatedCarousel />

      <PastryCarousel />

      <PastaCarousel />

      <Footer />
    </div>
  );
}