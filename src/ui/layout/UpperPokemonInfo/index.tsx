import React from "react";
import Section from "../../components/Section";
import TransparentButton from "../../components/Button";
import SvgIcon from "../../components/Svg";
import { addZerosToStart } from "../../../functions/utils"
import { arrowBackIcon, arrowPreviousIcon, arrowNextIcon } from "../../../images/svgPaths"
import { ContentWrapper, TextWrapper, Text, Title, Number, Image, ButtonsWrapper } from "./UpperPokemonInfo.styles"

interface Props {
  name: string;
  number: number;
  imageUrl: string;
  onClickBackButton: VoidFunction;
  onClickNextButton: VoidFunction;
  onClickPreviousButton: VoidFunction
}

export const UpperPokemonInfoSection = ({
  name,
  number,
  imageUrl,
  onClickBackButton,
  onClickNextButton,
  onClickPreviousButton
}: Props) => {
  const numberWithZeros = addZerosToStart(number)

  return (
    <Section>
      <ContentWrapper>
        <TextWrapper>
          <TransparentButton name="back to main page" onClick={onClickBackButton}>
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
          <ButtonsWrapper>
          <TransparentButton name="previous Pokemon" onClick={onClickPreviousButton}>
            <SvgIcon path={arrowPreviousIcon} size={20}/>
          </TransparentButton>
          <TransparentButton name="next Pokemon" onClick={onClickNextButton}>
            <SvgIcon path={arrowNextIcon} size={20} />
          </TransparentButton>
          </ButtonsWrapper>
      </ContentWrapper>
    
    </Section>
  )
};

export default UpperPokemonInfoSection;
