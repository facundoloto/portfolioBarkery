import Carousel from "./Carousel";

import pastries from "../../data/pastries";

import { useTranslation } from "react-i18next";

export default function PastryCarousel() {
  const { t } = useTranslation();

  return (
    <Carousel
      title={t("gallery.pastries")}
      items={pastries}
    />
  );
}