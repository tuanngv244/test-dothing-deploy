import React, { forwardRef } from "react";
import { Grow, Fade, Slide, Collapse, Zoom } from "@mui/material";

type TransitionCompProps = {
  checked?: boolean;
  children: React.ReactNode;
  type: string;
  orientation?: string;
  direction?: string;
  style?: React.CSSProperties
};

type TransitionProps = keyof typeof Transition;

const Transition = {
  f: Fade,
  g: Grow,
  s: Slide,
  c: Collapse,
  z: Zoom
};

// eslint-disable-next-line react/display-name
const Animation = forwardRef<any, any>((props, ref) => {
  let Component = Transition[props.type as TransitionProps];
  if (!Component) return null;

  return (
    <Component
      in={props.checked}
      orientation={props.orientation}
      direction={props.direction}
      style={props.style}
      ref={ref}
      {...props}
    >
      {props.children}
    </Component>
  );
});

const TransitionComp = ({
  checked = false,
  type = "f",
  children,
  direction,
  orientation,
  style
}: TransitionCompProps) => {
  if (direction) {
    return (
        <Animation direction={direction} checked={checked} type={type}>
          {children}
        </Animation>
      );
  }
  if (orientation) {
    return (
      <Animation orientation={orientation} checked={checked} type={type}>
        {children}
      </Animation>
    );
  }

  if ((type === 'z' || type === 'g') && style) {
    return (
        <Animation checked={checked} type={type} style={style}>
            {children}
        </Animation>
    )
  }

  return (
    <Animation checked={checked} type={type}>
      {children}
    </Animation>
  );
};

export default TransitionComp;
