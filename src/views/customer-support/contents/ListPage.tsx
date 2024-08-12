import React, { useEffect, useRef, forwardRef } from "react";
import Wrapper from "@/@core/components/shared/sections/wrapper-section";
import { useRouter } from "next/router";
import Announce from "./Announce";
import FAQs from "./FAQs";
import Contact from "./Contact";

type ListPageProps = {
  category: string;
  apiData: any;
  categories: Array<any>;
  page: string;
};

const Sections = {
  "contact-us": Contact,
  faq: FAQs,
  announcement: Announce,
};

type SectionsProps = keyof typeof Sections;

// eslint-disable-next-line react/display-name
const CustomerPage = forwardRef<any, any>((props, ref) => {
  let Component = Sections[props.page as SectionsProps];

  if (!Component) return null;
  return <Component {...props} ref={ref} />;
});

const ListPage = ({ page, categories, apiData, category }: ListPageProps) => {
  const ctxRef = useRef(null);

  useEffect(() => {
    if (page === "announcement" && category === "all") return;
    if (page === "faq" && category === "all") return;
    if (page === "contact-us") return;

    // window.scrollTo({
    //   top: ctxRef?.current?.offsetTop + 20 || 0,
    //   left: 0
    // })
  });

  return (
    <Wrapper bg="#fff" maxWidth={"100%"}>
      <CustomerPage
        page={page}
        category={category}
        apiData={apiData}
        categories={categories}
        ref={ctxRef}
      />
    </Wrapper>
  );
};

export default ListPage;
