import { i18n } from "i18next";

const renderImage = (options: {
  i18n: i18n;
  isMobile: boolean;
  suffixPath: string;
  desktopKr?: string;
  desktopEn?: string;
  desktopJa?: string;
  mobileKr?: string;
  mobileEn?: string;
  mobileJa?: string;
}) => {
  const {
    i18n,
    isMobile,
    suffixPath,
    desktopEn,
    desktopJa,
    desktopKr,
    mobileEn,
    mobileJa,
    mobileKr,
  } = options;
  let img = suffixPath;
  if (isMobile) {
    if (i18n.language === "en") {
      img += mobileEn;
    }
    if (i18n.language === "kr") {
      img += mobileKr;
    }
    if (i18n.language === "ja") {
      img += mobileJa || mobileKr;
    }
  } else {
    if (i18n.language === "en") {
      img += desktopEn;
    }
    if (i18n.language === "kr") {
      img += desktopKr;
    }
    if (i18n.language === "ja") {
      img += desktopJa || desktopKr;
    }
  }
  return img;
};

const truncDateFromServer = (date?: string | null, format?: string) => {
  if (!date) return "";
  const day = date.slice(6, 8);
  const month = date.slice(4, 6);
  const year = date.slice(0, 4);
  return `${year}-${month}-${day}`;
};

export { renderImage, truncDateFromServer };
