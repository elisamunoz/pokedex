import React from "react";
import { ThumbnailWrapper, Number, Name, Image } from "./Thumbnail.styles";
import { pokeBall } from "../../../images/svgPaths";

interface Props {
  number: string,
  name: string,
  image: string
}

export const ThumbnailComponent = ({
  number,
  name,
  image
}: Props) =>(
    <ThumbnailWrapper>
      <Number>{number}</Number>
      <Image src={image} alt={`${name} image`}/>
      <Name>{name}</Name>
    </ThumbnailWrapper>
  )

export default ThumbnailComponent;
