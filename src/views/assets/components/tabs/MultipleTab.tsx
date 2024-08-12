import React from "react";

const MultipleTab = (props: any, ref: any) => {
  const { Tabs, ...otherProps } = props;
  let Component = Tabs[props.value];
  if (!Component) return null;
  return <Component ref={ref} {...otherProps} />;
};

export default React.forwardRef(MultipleTab);
