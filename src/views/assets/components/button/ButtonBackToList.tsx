import React from "react";
import Link from "next/link";
import Translations from "@/@core/components/translations";
import { styled } from "@mui/material";
import ArrowBack from "@/@core/components/icons/ArrowBack";

const StyledLink = styled("span")(({ theme }) => ({
  marginTop: "1rem",
  textDecoration: "none",
  display: "inline-block",
  alignItems: "center",
  color: "rgb(64 64 64 / 80%)",
  fontSize: 28,
  fontWeight: 500,
  width: "auto",
  svg: {
    verticalAlign: "middle",
  },
  span: {
    paddingLeft: 15,
    verticalAlign: "middle",
  },
  [theme.breakpoints.down("xl")]: {
    marginTop: "1.5rem",
    fontSize: 22,
    svg: {
      width: "30px",
    },
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("sm")]: {
    marginTop: "0.5rem",
    fontSize: 16,
    svg: {
      width: "24px",
    },
  },
}));

type ButtonBackToListProps = {
  href: string;
  as: any;
  onClick?: any;
};

const ButtonBackToList = ({ href, as, onClick }: ButtonBackToListProps) => {
  return (
    <Link passHref href={href} as={as} style={{textDecoration: 'none'}}>
      <StyledLink onClick={onClick && onClick()}>
        <ArrowBack />
        <span>
          <Translations text={"Back to the List"} />
        </span>
      </StyledLink>
    </Link>
  );
};

export default ButtonBackToList;
