import React from "react";
import Section from "../../components/Section";
import SvgIcon from "../../components/Svg";
import { addZerosToStart } from "../../../functions/utils"
import { arrowBackIcon } from "../../../images/svgPaths"


import { ContentWrapper, BackIcon, TextWrapper, Title, Number, Image } from "./UpperPokemonInfo.styles"

interface Props {
  name: string;
  number: number;
  imageUrl: string;
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
          <SvgIcon path={arrowBackIcon} />
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
