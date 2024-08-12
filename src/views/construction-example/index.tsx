import { useEffect, useState } from "react";
import Wrapper from "@/@core/components/shared/sections/wrapper-section";
import Recognition from "./contents/Recognition";

const ConstructionContent = () => {
  return (
    <Wrapper bg="#F5F7FA" maxWidth={"100%"}>
      <Recognition />
    </Wrapper>
  );
};

export default ConstructionContent;
