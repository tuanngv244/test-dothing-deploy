import React, { Children, useState } from "react";
import { MenuItem, Select, styled } from "@mui/material";
import IconDown from "@/@core/components/icons/IconDown";
import { useTranslation } from "react-i18next";
import { DEFAULT_OPTIONS, DEFAULT_PER_PAGE } from "@/@core/configs";

const DropDownStyle = styled(Select)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: "20px",
  fontWeight: 400,
  background: theme.palette.primary.main,
  borderRadius: 60,
  padding: "0",
  border: "none",
  height: "36px",
  lineHeight: "25px",
  width: "100px",
  textIndent: "0px",
  "& fieldset": {
    borderColor: "transparent !important",
  },
  svg: {
    left: "4rem",
    position: "absolute",
  },
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    textIndent: "-50px",
  },
  [theme.breakpoints.down("sm")]: {
    marginRight: 16,
  },
}));

type DropdownMenuProps = {
  perPage: any;
  handleChangeRowsPerPages: any;
};

const DropdownMenu = ({
  perPage,
  handleChangeRowsPerPages,
}: DropdownMenuProps) => {
  const { t } = useTranslation();

  const [options, setOptions] = useState<any>(DEFAULT_OPTIONS);
  return (
    <DropDownStyle
      size="small"
      value={perPage}
      onChange={handleChangeRowsPerPages}
      IconComponent={IconDown}
    >
      {Children.toArray(
        options.map((el: any, index: number) => {
          if (options.length - 1 === index && parseInt(el, 10) !== 50) {
            return <MenuItem value={el}>{t("All")}</MenuItem>;
          }
          return (
            <MenuItem value={el}>
              {![10, 30, 50].includes(parseInt(el)) ? t("All") : el}
            </MenuItem>
          );
        })
      )}
    </DropDownStyle>
  );
};

export default DropdownMenu;
