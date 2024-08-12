import React from "react";

const MultipleModal = (props: any, ref: any) => {
  const { Modals, ...otherProps } = props;
  let Component = Modals[props.value];
  if (!Component) return null;
  return <Component ref={ref} {...otherProps} />;
};

export default React.forwardRef(MultipleModal);
