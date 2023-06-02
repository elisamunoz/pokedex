import React from "react";
import Button from "../Button";
import { ThumbnailWrapper, Number, Name, Image } from "./Thumbnail.styles";

interface Props {
  number: string,
  name: string,
  image: string,
  onClickThumbnail: VoidFunction
}

export const ThumbnailComponent = ({
  number,
  name,
  image,
  onClickThumbnail
}: Props) =>(
    <ThumbnailWrapper
      onClick={onClickThumbnail}
    >
      <Number>{number}</Number>
      <Image src={image} alt={`${name} image`}/>
      <Name>{name}</Name>    
    </ThumbnailWrapper>
  )

export default ThumbnailComponent;
