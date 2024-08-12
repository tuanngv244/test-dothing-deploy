// ** Custom Navigation Components
import HorizontalNavLink from "./HorizontalNavLink";
import HorizontalNavGroup from "./HorizontalNavGroup";
import { ReactNode } from "react";

type resolveComponentProps = {
  children?: ReactNode;
  lastIndex?: any;
  nameClass?: string;
};

type HorizontalNavItemsProps = {
  horizontalNavItems?: any;
  children?: ReactNode;
  nameClass?: string;
};

const resolveComponent = (item: resolveComponentProps) => {
  if (item.children) return HorizontalNavGroup;

  return HorizontalNavLink;
};

const HorizontalNavItems = (props: HorizontalNavItemsProps) => {
  const RenderMenuItems = props.horizontalNavItems?.map(
    (item: any, index: number) => {
      const TagName = resolveComponent({ ...item });
      return <TagName {...props} key={index} item={item} />;
    }
  );

  return RenderMenuItems;
};

export default HorizontalNavItems;
