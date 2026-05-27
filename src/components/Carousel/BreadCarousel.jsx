import Carousel from "./Carousel";

import breads from "../../data/bread";

import { useTranslation } from "react-i18next";

export default function BreadCarousel() {
  const { t } = useTranslation();

  return (
    <Carousel
      title={t("gallery.breads")}
      items={breads}
    />
  );
}