const Navigation = () => {
  return [
    {
      icon: null,
      title: "홈",
      path: "/",
    },
    {
      icon: null,
      title: "서비스",
      children: [
        {
          title: "DPS",
          icon: null,
          path: "/services/dps",
        },
        {
          title: "DAS",
          icon: null,
          path: "/services/das",
        },
        // {
        //   title: "Consulting/loT",
        //   icon: null,
        //   path: "/services/mobile-iot",
        // },
      ],
    },
    {
      icon: null,
      title: "제품",
      hasLink: true,
      path: "/products",
      children: [
        {
          title: "NEBULA Pick",
          icon: null,
          path: "/products/nebula-pick",
        },
        {
          title: "NEBULA Platform",
          icon: null,
          path: "/products/nebula-platform",
        },
        // {
        //   title: "NEBULA Mobile type",
        //   icon: null,
        //   path: "/products/NEBULA-mobile-type",
        // },
      ],
    },
    {
      icon: null,
      title: "구축 사례",
      hasLink: true,
      path: "/construction-example",
    },
    {
      icon: null,
      title: "회사",
      children: [
        // {
        //   title: "문의하기",
        //   icon: null,
        //   path: "/insight/contact-us",
        // },
        {
          title: "뉴스",
          icon: null,
          path: "/insight/latest-news",
        },
        {
          title: "오시는 길",
          icon: null,
          path: "/insight/recognition",
        },
      ],
    },
    {
      icon: null,
      title: "자주 묻는 질문",
      hasLink: true,
      path: "/customer-support/faq",
    },
  ];
};

export default Navigation;
