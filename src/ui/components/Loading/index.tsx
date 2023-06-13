import React from "react";
import { Loading } from "./Loading.styles";

interface Props {
  imageSvg?: string;
  className?: string;
}

export const LoadingComponent = ({
  imageSvg,
  className
}: Props) =>{
  return (
    <Loading src={imageSvg} className={className}/>
  )
}
export default Loading;
