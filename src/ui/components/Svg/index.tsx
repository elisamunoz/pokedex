import React from "react";
// import { ICON_TYPES } from "../../../types/pokemon"

interface Props {
  size?: number | string,
  color?: string,
  path: string;
  viewBox: string;
  // path: ICON_TYPES,
}

export const SvgIconComponent = ({
  size = 48,
  color = "#fff",
  path,
  viewBox
}: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox={viewBox} width={size}>
      <g fill={color}>
          <path d={path}/>
        </g>
    </svg>
  )
};

export default SvgIconComponent;
