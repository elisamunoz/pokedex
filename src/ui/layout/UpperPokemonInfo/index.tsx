import React from "react";
import Section from "../../components/Section";
import { addZerosToStart } from "../../../functions/utils"
import backIconImg from "../../../images/arrowBack.svg"

import { ContentWrapper, BackIcon, TextWrapper, Title, Number, Image } from "./UpperPokemonInfo.styles"

interface Props {
  name: string;
  number: number;
  imageUrl: string;
  // backIconImg: string;
}

export const UpperPokemonInfoSection = ({
  name,
  number,
  imageUrl
}: Props) => {
  const numberWithZeros = addZerosToStart(number)

  return (
    <Section>
      <ContentWrapper>
        <TextWrapper>
          {backIconImg}
          <BackIcon src={backIconImg} alt="back to previous screen"/>
          <Title>
            {name}
          </Title>
          <Number>
            #{numberWithZeros}
          </Number>
        </TextWrapper>
        <Image src={imageUrl} alt={`${name} image`}/>
      </ContentWrapper>
    </Section>
  )
};

export default UpperPokemonInfoSection;
