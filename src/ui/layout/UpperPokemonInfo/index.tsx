import React from "react";
import Section from "../../components/Section";
import TransparentButton from "../../components/Button";
import SvgIcon from "../../components/Svg";
import { addZerosToStart } from "../../../functions/utils"
import { arrowBackIcon, pokeBall, arrowPreviousIcon, arrowNextIcon } from "../../../images/svgPaths"
import { ContentWrapper, PokeballWrapper, TextWrapper, Text, Title, Number, Image, ButtonsWrapper } from "./UpperPokemonInfo.styles"
import pokemonPlaceholder from "../../../images/pokemonPlaceholder.svg"

interface Props {
  name: string;
  number: number;
  imageUrl: string;
  onClickBackButton: VoidFunction;
  onClickNextButton: VoidFunction;
  onClickPreviousButton: VoidFunction;
}

export const UpperPokemonInfoSection = ({
  name,
  number,
  imageUrl = pokemonPlaceholder,
  onClickBackButton,
  onClickNextButton,
  onClickPreviousButton
}: Props) => {
  const numberWithZeros = addZerosToStart(number)

  return (
    <Section>
      <ContentWrapper>
        <PokeballWrapper>
          <SvgIcon color="color-mix(in oklab, currentColor, #f2f2f2)" size="100%" icon={pokeBall} />
        </PokeballWrapper>       
        <TextWrapper>
          <TransparentButton name="back to main page" onClick={onClickBackButton}>
            <SvgIcon icon={arrowBackIcon} />
          </TransparentButton>
          <Text>
            <Title> 
              {name}
            </Title>
            <Number>
              {numberWithZeros}
            </Number>
          </Text>
        </TextWrapper>
        <Image src={imageUrl} alt={`${name} image`}/>
        <ButtonsWrapper>
          <TransparentButton name="previous Pokemon" onClick={onClickPreviousButton}>
            <SvgIcon icon={arrowPreviousIcon} size={20}/>
          </TransparentButton>
          <TransparentButton name="next Pokemon" onClick={onClickNextButton}>
            <SvgIcon icon={arrowNextIcon} size={20} />
          </TransparentButton>
        </ButtonsWrapper>
      </ContentWrapper>
    
    </Section>
  )
};

export default UpperPokemonInfoSection;
