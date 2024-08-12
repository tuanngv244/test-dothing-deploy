import { useEffect, useState } from "react";
import {
  Menu,
  MenuItem,
  IconButton,
  Typography,
  useMediaQuery,
  styled,
  useTheme,
  Theme,
} from "@mui/material";

// ** Third Party Import
import { useTranslation } from "react-i18next";
import Earth from "../../icons/Earth";
import { WIDTH_MEDIUM } from "@/@core/configs";
import Expand from "../../icons/Expand";
import authConfig from "@/infra/configs/auth";
import { getUserLanguage } from "@/infra/configs/i18n";

type LanguageDropdownProps = {
  settings?: any;
  saveSettings?: any;
};

type LangTypes = "kr" | "en";

const Labels = {
  en: {
    title: "EN",
    icon: "/images/icons/us.png",
  },
  kr: {
    title: "KR",
    icon: "/images/icons/kr.png",
  },
  ja: {
    title: "JA",
    icon: "/images/icons/kr.png",
  },
};

const TextLanguageButton = styled(IconButton)(({ theme }) => ({
  "&:hover": {
    borderRadius: 0,
    background: "transparent",
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.1rem !important",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 15,
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "10px !important",
    marginRight: 10,
    height: "32px",
    padding: "4px",
  },
}));

const TextLanguage = styled(Typography)(({ theme }) => ({
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: 16,
    fontWeight: 600,
    color: theme.palette.primary.main,
    marginLeft: 3,
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: 16,
    fontWeight: 400,
    color: "#fff",
    paddingLeft: 3,
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    color: theme.palette.primary.main,
  },
}));

const LanguageDropdown = ({
  settings,
  saveSettings,
}: LanguageDropdownProps) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { t, i18n } = useTranslation();
  const { layout, direction } = settings;

  const cachedLang = localStorage.getItem(authConfig.i18nextLng);
  const currentLang = cachedLang || getUserLanguage() || "en";
  const detectLang = currentLang === "vi" ? "en" : currentLang;

  const [lang, setLang] = useState(currentLang);

  const desktop = useMediaQuery((theme: any) => theme.breakpoints.up("md"));

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  const theme = useTheme();

  useEffect(() => {
    i18n.changeLanguage(detectLang);
    setLang(detectLang);
    if (!localStorage.getItem(authConfig.i18nextLng)) {
      localStorage.setItem(authConfig.i18nextLng, detectLang);
    }
  }, [currentLang]);

  const handleLangDropdownOpen = (event: React.BaseSyntheticEvent) => {
    setAnchorEl(event.currentTarget);
    document.body.style.paddingRight = "17px";
    if (!desktop) {
      document.body.style.paddingRight = "";
    }
    (document.querySelector("html") as HTMLElement).style.overflow = "hidden";
  };

  const handleLangDropdownClose = () => {
    setAnchorEl(null);
    document.body.style.paddingRight = "";
    (document.querySelector("html") as HTMLElement).style.overflow = "";
  };

  const handleLangItemClick = (lang: string) => {
    i18n.changeLanguage(lang);
    handleLangDropdownClose();
    localStorage.setItem(authConfig.i18nextLng, lang);
  };

  return (
    <>
      <TextLanguageButton
        color="inherit"
        aria-haspopup="true"
        aria-controls="customized-menu"
        onClick={handleLangDropdownOpen}
        sx={
          layout === "vertical"
            ? { mr: 0.75 }
            : { mx: 0.75, mr: desktop ? "-12px" : "0" }
        }
      >
        {i18n.language && (
          <>
            <Earth size={"16"} color={theme.palette.primary.main} />
            <TextLanguage>{Labels[lang as LangTypes]?.title}</TextLanguage>
          </>
        )}
        <Expand color={isMobile ? theme.palette.primary.main : "#89939E"} />
      </TextLanguageButton>
      <Menu
        className="menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleLangDropdownClose}
        sx={{ "& .MuiMenu-paper": { mt: 4, minWidth: 130 } }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: direction === "ltr" ? "right" : "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: direction === "ltr" ? "right" : "left",
        }}
      >
        <MenuItem
          sx={{ py: 2 }}
          selected={lang === "en"}
          onClick={() => {
            handleLangItemClick("en");
            saveSettings({ ...settings, direction: "ltr" });
          }}
        >
          {t("COMMON.english")}
        </MenuItem>
        <MenuItem
          sx={{ py: 2 }}
          selected={lang === "kr"}
          onClick={() => {
            handleLangItemClick("kr");
            saveSettings({ ...settings, direction: "ltr" });
          }}
        >
          {t("COMMON.korean")}
        </MenuItem>
        <MenuItem
          sx={{ py: 2 }}
          selected={lang === "ja"}
          onClick={() => {
            handleLangItemClick("ja");
            saveSettings({ ...settings, direction: "ltr" });
          }}
        >
          {t("COMMON.japan")}
        </MenuItem>
      </Menu>
    </>
  );
};

export default LanguageDropdown;
