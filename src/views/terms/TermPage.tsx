import React, { useState, useEffect } from "react";
import { Box, styled } from "@mui/material";
import Wrapper from "@/@core/components/shared/sections/wrapper-section";
import MuiContainer from "@/@core/style-libs/mui-container";
import { WIDTH_MEDIUM } from "@/@core/configs";
import TabLink from "./contents/TabLink";
import PolicyContent from "./contents/PageContent";

const BoxWrapper = styled(MuiContainer)(({ theme }) => ({}));

type TermPageProps = {
  tab: string;
  apiData?: any;
  categories: Array<any>;
  page?: string;
};

const TermPage = ({ tab, apiData, categories, page }: TermPageProps) => {
  const [data, setData] = useState<any>(null);

  const handleSelectData = (id: string) => {
    const result = apiData?.contents.filter((item: any) => item.id === id);
    if (result.length) {
      setData(result[0]);
    }
  };

  useEffect(() => {
    apiData && apiData?.contents && setData(apiData?.contents[0]);
  }, [apiData]);

  return (
    <Wrapper bg="#fff">
      <BoxWrapper width={WIDTH_MEDIUM}>
        {categories.length ? (
          <TabLink
            tab={tab}
            categories={categories}
            apiData={apiData}
            selectedItem={data?.id}
            handleSelectData={handleSelectData}
          />
        ) : (
          ""
        )}
        <PolicyContent data={data}/>
      </BoxWrapper>
    </Wrapper>
  );
};

export default TermPage;
