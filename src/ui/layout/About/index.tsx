import React from "react";
import Section from "../../components/Section";
import MeasureComponent from "../../components/Measure";
import Text from "../../components/Text"
import { ContentWrapper, MeasureWrapper, DescriptionWrapper } from "./About.styles"
import { POKEMON_TYPES } from '../../../constants';

export enum CONTENT_TYPES {
  WEIGHT = 'weight',
  HEIGHT =  'height',
  MOVES = 'moves',
};

interface Props {
  weight?: number;
  height?: number;
  moves?: string[];
  contentType?: CONTENT_TYPES;
  description?: string;
}

export const AboutSection = ({
  weight,
  height,
  moves,
  description
}: Props) => {

  return (
    <Section
      title='About'
    >
      <ContentWrapper>
        <MeasureWrapper>
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
        </MeasureWrapper>
        <DescriptionWrapper>
          <Text text={description}/>
        </DescriptionWrapper>
        
      </ContentWrapper>
    </Section>
  )
};

export default AboutSection;
