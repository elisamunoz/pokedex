import React from "react";
import { useSelector } from "react-redux";
import Section from "../../components/Section";
import StatInfo from "../../components/StatInfo";
import { ContentWrapper } from "./BaseStats.styles"
import { pokemonStat } from "../../../types/pokemon";
import { getSelectedPokemon } from '../../../state/selectors/selectedPokemon.selectors';

interface Props {
  statsValue?: pokemonStat[];
}

export const BaseStatsSection = ({
  statsValue,
}: Props) => {
  const selectedPokemon = useSelector(getSelectedPokemon);
  return (
    <Section
      title='Base Stats'
    >
      <ContentWrapper>
        {statsValue?.map(stat => {
          return (
            <StatInfo key={stat.name} label={stat.name} value={stat.value} />
          )
        })}
      </ContentWrapper>
    </Section>
  )
};

export default BaseStatsSection;
