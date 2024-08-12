import { AppBarContentProps } from "@/domains/types/app-bar-content.type";
import themeConfig from "@/infra/configs/themeConfig";
import {
  Box,
  IconButton,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Close from "../../icons/Close";
import Menu from "../../icons/Menu";
import LanguageDropdown from "../../shared/sections/language-dropdown";

const AppBarContent = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(2, 3),
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const RightAction = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

const AppBarContentVertical = (props: AppBarContentProps) => {
  const {
    settings,
    saveSettings,
    toggleNavVisibility,
    apiMainData,
    navVisible,
  } = props;

  const theme = useTheme();

  const router = useRouter();

  useEffect(() => {
    (document.querySelector("html") as HTMLElement).style.overflow = "";
  }, [router?.asPath]);

  return (
    <AppBarContent>
      <Stack
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        width={"100%"}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Image
            style={{ borderRadius: "11px" }}
            src={"/images/logos/logo-new.png"}
            width={219}
            height={42}
            alt={themeConfig.templateName}
          />
          {apiMainData?.slogan?.title ? (
            <Typography
              variant="caption"
              sx={{
                color: "#001A40",
                textTransform: "capitalize",
                fontWeight: 900,
                letterSpacing: "0",
                marginTop: -1,
              }}
            >
              {apiMainData.slogan.title}
            </Typography>
          ) : (
            ""
          )}
        </Link>
      </Stack>
      <RightAction>
        <LanguageDropdown settings={settings} saveSettings={saveSettings} />
        <IconButton
          color="inherit"
          sx={{ mr: 0, pr: 0, p: 0 }}
          onClick={toggleNavVisibility}
        >
          {!navVisible ? (
            <Menu color={theme.palette.text.link} />
          ) : (
            <Close color={theme.palette.text.link} width={4} />
          )}
        </IconButton>
      </RightAction>
    </AppBarContent>
  );
};

export default AppBarContentVertical;
