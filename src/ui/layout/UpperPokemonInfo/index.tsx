import React from "react";
import Section from "../../components/Section";
import TransparentButton from "../../components/Button";
import SvgIcon from "../../components/Svg";
import { addZerosToStart } from "../../../functions/utils"
import { arrowBackIcon } from "../../../images/svgPaths"
import { ContentWrapper, TextWrapper, Text, Title, Number, Image } from "./UpperPokemonInfo.styles"

interface Props {
  name: string;
  number: number;
  imageUrl: string;
  handleBackButton: VoidFunction
}

export const UpperPokemonInfoSection = ({
  name,
  number,
  imageUrl,
  handleBackButton
}: Props) => {
  const numberWithZeros = addZerosToStart(number)

  return (
    <Section>
      <ContentWrapper>
        <TextWrapper>
          <TransparentButton onClick={handleBackButton}>
            <SvgIcon path={arrowBackIcon} />
          </TransparentButton>
          <Text>
            <Title> 
              {name}
            </Title>
            <Number>
              #{numberWithZeros}
            </Number>
          </Text>
        </TextWrapper>
        <Image src={imageUrl} alt={`${name} image`}/>
      </ContentWrapper>
    </Section>
  )
};

export default UpperPokemonInfoSection;
