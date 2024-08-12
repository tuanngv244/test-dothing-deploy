import { forwardRef } from "react";
import { Button } from "@mui/material";

type ButtonsWithIconAndLabelProps = {
  iconPosType?: string;
  icon?: React.ReactNode;
  title: string;
};

const ButtonsWithIconAndLabel = ({
  iconPosType = "end",
  icon,
  title,
}: ButtonsWithIconAndLabelProps, ref: any) => {
  if (iconPosType === "end") {
    return (
      <Button variant="contained" endIcon={icon}>
        {title}
      </Button>
    );
  }

  return (
    <Button variant="contained" color="secondary" startIcon={icon}>
      {title}
    </Button>
  );
};

export default forwardRef(ButtonsWithIconAndLabel);
