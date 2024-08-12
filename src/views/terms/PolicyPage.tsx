import React, { useState, useEffect } from "react";
import { styled } from "@mui/material";
import Wrapper from "@/@core/components/shared/sections/wrapper-section";
import MuiContainer from "@/@core/style-libs/mui-container";
import { WIDTH_MEDIUM } from "@/@core/configs";
import TabLink from "./contents/TabLink";
import TermContent from "./contents/PageContent";

const BoxWrapper = styled(MuiContainer)(({ theme }) => ({}));

type PolicyPageProps = {
  tab: string;
  apiData?: any;
  categories: Array<any>;
  page?: string;
};

const PolicyPage = ({ tab, apiData, categories, page }: PolicyPageProps) => {
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
        <TermContent data={data}/>
      </BoxWrapper>
    </Wrapper>
  );
};

export default PolicyPage;
