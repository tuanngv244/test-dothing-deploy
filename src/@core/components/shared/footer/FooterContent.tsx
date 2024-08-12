import { ReactNode } from "react";
import Image from "next/image";
import Translations from "../../translations";
import Link from "next/link";
import { Box, Typography, useMediaQuery, styled, Divider } from "@mui/material";
import { WIDTH_MEDIUM } from "@/@core/configs";

const TextCopyright = styled(Typography)(({ theme }: { theme: any }) => ({
  color: theme.palette.text.copy,
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: 16,
    fontWeight: 400,
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
    letterSpacing: 0,
    marginBottom: 10,
    marginTop: 5,
  },
}));

const DividerWrapper = styled(Divider)(({ theme }) => ({
  width: "100%",
}));
const FooterDesktop = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        mx: [0, 0],
        marginTop: "1.5rem",
        marginBottom: "0.5rem",
      }}
    >
      <TextCopyright>
        {`Copyright © 2023 DOTHING Co., Ltd | All rights reserved`}
      </TextCopyright>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          "& :not(:last-child)": { mr: 6 },
          fontWeight: 700,
        }}
      >
        &nbsp;
      </Box>
    </Box>
  );
};

const FooterMobile = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        py: 2,
      }}
    >
      <DividerWrapper sx={{ mb: 4, borderColor: "#BDBDBD" }} />
      <TextCopyright sx={{ mt: 2 }}>
        {`Copyright © 2023 DOTHING Co., Ltd`} | All rights reserved.
      </TextCopyright>
    </Box>
  );
};

type FooterContentProps = {
  children?: ReactNode;
};

const FooterContent = (props: FooterContentProps) => {
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("md"));
  return <>{isMobile ? <FooterMobile /> : <FooterDesktop />}</>;
};

export default FooterContent;
