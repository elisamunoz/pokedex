import React from "react";

interface Props {
  size?: number,
  color?: string,
  path: string,
}

export const SvgIconComponent = ({
  size = 48,
  color = "#fff",
  path
}: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 -960 960 960" width={size}>
      <g fill={color}>
          <path d={path}/>
        </g>
    </svg>
  )
};

export default SvgIconComponent;
