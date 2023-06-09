import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import { LoadingPage, Image } from "./LoadingPage.styles"
import pokeball from "../../../images/pokeball.svg"

interface Props {
  imageSvg?: string;
}

export const LoadingPageSection = ({
  imageSvg = pokeball
}: Props) => {
  
  return (
    <LoadingPage>
      <Image src={imageSvg} alt="pokeball" />
    </LoadingPage>
  )
};

export default LoadingPageSection;
