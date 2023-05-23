import React from "react";
import Section from "../../components/Section";
import MeasureComponent from "../../components/Measure";
import { ContentWrapper } from "./About.styles"
import { POKEMON_TYPES } from '../../../constants';

export enum CONTENT_TYPES {
  WEIGHT = 'weight',
  HEIGHT =  'weight',
  MOVES = 'moves',
};

interface Props {
  weight?: number;
  height?: number;
  moves?: string[];
  mainType?: POKEMON_TYPES;
  contentType?: CONTENT_TYPES;
}

export const AboutSection = ({
  weight,
  height,
  moves,
  mainType
}: Props) => {

  return (
    <Section mainType={mainType} title='About'>
      <ContentWrapper>
        <MeasureComponent 
          content={weight}
          contentType={CONTENT_TYPES.WEIGHT} />
        <MeasureComponent 
          content={height}
          contentType={CONTENT_TYPES.HEIGHT} />
        <MeasureComponent 
          content={moves}
          contentType={CONTENT_TYPES.MOVES}
        />
        </ContentWrapper>
    </Section>
  )
};

export default AboutSection;
