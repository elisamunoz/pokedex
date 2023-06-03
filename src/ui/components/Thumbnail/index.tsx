import React from "react";
import { ThumbnailWrapper, Number, Name, Image, Background } from "./Thumbnail.styles";

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
      <Background />
      <Number>{number}</Number>
      <Image src={image} alt={`${name} image`}/>
      <Name>{name}</Name>
      
    </ThumbnailWrapper>
  )

export default ThumbnailComponent;
