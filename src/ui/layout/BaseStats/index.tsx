import React from "react";
import Section from "../../components/Section";
import StatBar from "../../components/StatBar";
import { ContentWrapper, TypesWrapper, Types, StatNumberWrapper, StatNumber } from "./BaseStats.styles"
import { POKEMON_TYPE_STATS, POKEMON_TYPES } from "../../../constants";
import { pokemonStat } from "../../../types/pokemon";

interface Props {
  statsValue?: pokemonStat[];
  mainType?: POKEMON_TYPES;
}

export const BaseStatsSection = ({
  statsValue,
  mainType
}: Props) => {
  
  return (
    <Section 
      mainType={mainType} 
      title='Base Stats'
    >
      <ContentWrapper> 
        <TypesWrapper>    
          {Object
            .values(POKEMON_TYPE_STATS)
            .map(statType => (
              <Types key={statType}>
                {statType}
              </Types>
          ))}

        </TypesWrapper>
        <StatNumberWrapper>
          {statsValue?.map(stat => (
            <StatNumber key={stat.name}>
              {stat.value}
          </StatNumber>
          )) 
          }
        </StatNumberWrapper>
        <StatBar statsValue={statsValue}/>
      </ContentWrapper>
    </Section>
  )
};

export default BaseStatsSection;
