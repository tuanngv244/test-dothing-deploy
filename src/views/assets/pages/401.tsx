import React from "react";
import Link from "next/link";
import { Button, styled, Typography, Box } from "@mui/material";

const BoxWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "90vw",
  },
}));

const Page401 = () => {
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
          <Typography variant="h1">401</Typography>
          <Typography
            variant="h5"
            sx={{ mb: 1, fontSize: "1.5rem !important" }}
          >
            You are not authorized! 🔐
          </Typography>
          <Typography variant="body2">
            You don&prime;t have permission to access this page. Go Home!
          </Typography>
        </BoxWrapper>
        <Link passHref href="/" style={{textDecoration: 'none'}}>
          <Button component="a" variant="contained" sx={{ px: 5.5 }}>
            Back to Home
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Page401;
