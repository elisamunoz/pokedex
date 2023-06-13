import React from "react";
import { LoadingPage } from "./LoadingPage.styles"
import Loading from "../../components/Loading";
import pokeball from "../../../images/pokeball.svg"

interface Props {
  imageSvg?: string;
}

export const LoadingPageSection = ({
  imageSvg = pokeball
}: Props) => {
  
  return (
    <LoadingPage>
      <Loading src={imageSvg} alt="pokeball"/>
    </LoadingPage>
  )
};

export default LoadingPageSection;
