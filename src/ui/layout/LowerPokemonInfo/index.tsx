import React from "react";
import Section from "../../components/Section";
import TagList from "../../components/TagList";
import About, {CONTENT_TYPES} from "../About";
import BaseStats from "../BaseStats";
import { POKEMON_TYPES } from "../../../constants";
import { pokemonStat } from "../../../types/pokemon";
import { ContentWrapper, LoadingStyled } from "./LowerPokemonInfo.styles"
import pokeball from "../../../images/pokeball.svg"

interface Props {
  types?: POKEMON_TYPES[],
  statsValue?: pokemonStat[];
  weight?: number;
  height?: number;
  moves?: string[];
  contentType?: CONTENT_TYPES;
  description?: string;
  isPokemonLoading: boolean;
}

export const LowerPokemonInfoSection = ({
  types = [],
  statsValue,
  weight,
  height,
  moves,
  contentType,
  description,
  isPokemonLoading
}: Props) => {
  return (
    <Section>
      <ContentWrapper>
        {isPokemonLoading
          ? <LoadingStyled src={pokeball} alt="pokeball"/>
          : <>
              <TagList types={types} />
              <About
                weight={weight}
                height={height}
                moves={moves}
                contentType={contentType}
                description={description}
              />
              <BaseStats statsValue={statsValue}/>
            </>
        }
      </ContentWrapper>
    </Section>
  )
};

export default LowerPokemonInfoSection;
