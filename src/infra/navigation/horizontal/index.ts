// ** Icon imports
import Apps from "mdi-material-ui/Apps";
import FormSelect from "mdi-material-ui/FormSelect";
import EmailOutline from "mdi-material-ui/EmailOutline";
import MessageOutline from "mdi-material-ui/MessageOutline";
import CalendarBlankOutline from "mdi-material-ui/CalendarBlankOutline";
import PaletteSwatchOutline from "mdi-material-ui/PaletteSwatchOutline";

const Navigation = () => {
  return [
    {
      icon: Apps,
      title: "홈",
      path: "/",
    },
    {
      icon: Apps,
      title: "서비스",
      children: [
        {
          title: "DPS",
          icon: EmailOutline,
          path: "/services/dps",
        },
        {
          title: "DAS",
          icon: MessageOutline,
          path: "/services/das",
        },
        // {
        //   title: "Consulting/loT",
        //   icon: MessageOutline,
        //   path: "/services/mobile-iot",
        // },
      ],
    },
    {
      icon: Apps,
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
        //   title: "NEBULA Mobile Type",
        //   icon: null,
        //   path: "/products/NEBULA-mobile-type",
        // },
      ],
    },
    {
      icon: PaletteSwatchOutline,
      title: "구축 사례",
      hasLink: true,
      path: "/construction-example",
    },
    {
      icon: FormSelect,
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
      icon: FormSelect,
      title: "자주 묻는 질문",
      hasLink: true,
      path: "/customer-support/faq",
      latest: true,
    },
  ];
};

export default Navigation;
