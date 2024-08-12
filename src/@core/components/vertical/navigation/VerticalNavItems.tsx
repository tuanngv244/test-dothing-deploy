import VerticalNavLink from "./VerticalNavLink";
import VerticalNavGroup from "./VerticalNavGroup";
import VerticalNavSectionTitle from "./VerticalNavSectionTitle";
import React from "react";

type NavItemProps = {
  sectionTitle?: any;
  children: React.ReactNode;
};

type VerticalNavItemsProps = {
  verticalNavItems?: any;
  groupActive?: any;
  setGroupActive?: any;
  currentActiveGroup?: any;
  setCurrentActiveGroup?: any;
  parent?: any;
  navVisible?: any;
  isSubToSub?: any;
};

const resolveNavItemComponent = (item: NavItemProps) => {
  if (item.sectionTitle) return VerticalNavSectionTitle;
  if (item.children) return VerticalNavGroup;

  return VerticalNavLink;
};

const VerticalNavItems = (props: VerticalNavItemsProps) => {
  const { verticalNavItems } = props;
  const RenderMenuItems = verticalNavItems?.map((item: any, index: number) => {
    const TagName = resolveNavItemComponent(item);
    return <TagName {...props} key={index} item={item} />;
  });

  return <>{RenderMenuItems}</>;
};

export default VerticalNavItems;
