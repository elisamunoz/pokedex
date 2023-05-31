import React from "react";
import Section from "../../components/Section";
import TagList from "../../components/TagList";
import About, {CONTENT_TYPES} from "../../layout/About";
import BaseStats from "../BaseStats";
import { POKEMON_TYPES } from "../../../constants";
import { pokemonStat } from "../../../types/pokemon";

import { ContentWrapper } from "./PokemonInfo.styles"

interface Props {
  types?: POKEMON_TYPES[],
  statsValue?: pokemonStat[];
  weight?: number;
  height?: number;
  moves?: string[];
  contentType?: CONTENT_TYPES;
  description?: string;
}

export const PokemonInfoSection = ({
  types = [],
  statsValue,
  weight,
  height,
  moves,
  contentType,
  description
}: Props) => {
  return (
    <Section>
      <ContentWrapper>
        <TagList types={types} />
        <About
          weight={weight}
          height={height}
          moves={moves}
          contentType={contentType}
          description={description}
        />
        <BaseStats statsValue={statsValue}/>
      </ContentWrapper>
    </Section>
  )
};

export default PokemonInfoSection;
