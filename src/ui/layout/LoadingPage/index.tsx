import React from "react";
import { LoadingPage, Image } from "./LoadingPage.styles"
import pokeball from "../../../images/pokeball.png";

interface Props {

}

export const LoadingPageSection = ({
  
}: Props) => {
  
  return (
    <LoadingPage>
      <Image src={pokeball} />
    </LoadingPage>
  )
};

export default LoadingPageSection;
