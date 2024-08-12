import React from "react";
import Link from "next/link";
import { Button, styled, Typography, Box } from "@mui/material";

const BoxWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "90vw",
  },
}));

const Page404 = () => {
  return (
    <Box className="content-center">
      <Box
        sx={{
          p: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <BoxWrapper>
          <Typography variant="h1">404</Typography>
          <Typography
            variant="h5"
            sx={{ mb: 1, fontSize: "1.5rem !important" }}
          >
            Page Not Found ⚠️
          </Typography>
          <Typography variant="body2">
            We couldn&prime;t find the page you are looking for.
          </Typography>
        </BoxWrapper>
        <Link passHref href="/" style={{textDecoration: 'none'}}>
          <Button
            component="a"
            variant="contained"
            sx={{ px: 5.5, mt: 5, borderRadius: 30 }}
          >
            Back to Home
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Page404;
