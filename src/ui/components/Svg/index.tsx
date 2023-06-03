import React from "react";
// import { ICON_TYPES } from "../../../types/pokemon"

interface Props {
  size?: number | string,
  color?: string,
  icon: {path: string, viewBox: string},
  onClick?: VoidFunction;
  className?: string
  // path: ICON_TYPES,
}

export const SvgIconComponent = ({
  size = 48,
  color = "#fff",
  icon,
  className,
  onClick
}: Props) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" height={size} viewBox={icon.viewBox} width={size} onClick={onClick}>
      <g fill={color}>
          <path d={icon.path} />
        </g>
    </svg>
  )
};

export default SvgIconComponent;
