import React from "react";
import { Breadcrumbs, Typography, Stack, styled, Link } from "@mui/material";
import Translations from "@/@core/components/translations";

const LinkText = styled(Link)(({ theme }) => ({
  fontSize: "20px",
  lineHeight: "32px",
  fontWeight: 400,
  color: "rgb(255 255 255 / 80%)",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

const MuiBreadcrumb = styled(Breadcrumbs)(({ theme }) => ({
  fontSize: "20px",
  lineHeight: "32px",
  fontWeight: 400,
  color: "rgb(255 255 255 / 80%)",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

const Text = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  lineHeight: "32px",
  fontWeight: 400,
  color: "rgb(255 255 255 / 80%)",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

const BreadcrumbSearch = () => {
  const breadcrumbs = [
    <LinkText underline="hover" key="1" color="inherit" href="/">
      <Translations text={"Home"} />
    </LinkText>,
    <Text key="3">
      <Translations text={"Search result"} />
    </Text>,
  ];
  return (
    <Stack>
      <MuiBreadcrumb separator=">" aria-label="breadcrumb">
        {breadcrumbs}
      </MuiBreadcrumb>
    </Stack>
  );
};

export default BreadcrumbSearch;
