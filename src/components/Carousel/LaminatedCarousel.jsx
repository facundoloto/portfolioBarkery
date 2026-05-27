import Carousel from "./Carousel";

import laminated from "../../data/laminated";

import { useTranslation } from "react-i18next";

export default function LaminatedCarousel() {
  const { t } = useTranslation();

  return (
    <Carousel
      title={t("gallery.laminated")}
      items={laminated}
    />
  );
}