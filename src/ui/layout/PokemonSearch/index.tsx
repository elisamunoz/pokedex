import React from "react";
import Body from "../../components/Body";
import SvgIcon from "../../components/Svg";
import Thumbnail from "../../components/Thumbnail";
import { pokeBall } from "../../../images/svgPaths";
import { PokemonSearchWrapper, ThumbnailsWrapper, Header, UpperContent, SearchBarWrapper, SearchBar, Title } from "./PokemonSearch.styles"
import { PokemonType } from "../../../types/pokemon";
import { addZerosToStart } from '../../../functions/utils'


interface Props {
  onClickThumbnail: VoidFunction;
  pokemons: PokemonType[];
}

export const BaseStatsSection = ({
  onClickThumbnail,
  pokemons
}: Props) => {
  
  return (
    <PokemonSearchWrapper>
      <Header>
        <UpperContent>
          <SvgIcon path={pokeBall.path} viewBox={pokeBall.viewBox} color="#fff" />
          <Title>Pokédex</Title>
        </UpperContent>
        <SearchBarWrapper>
          <SearchBar placeholder="Enter a Pokemon name"></SearchBar>
        </SearchBarWrapper>     
      </Header>
      
      
      <Body>
        <ThumbnailsWrapper>
          {pokemons.map(pokemon => {
            const pokemonNumber = addZerosToStart(pokemon.number)
            return (
              <Thumbnail
                onClickThumbnail={onClickThumbnail}
                key={pokemon.number}
                number={pokemonNumber}
                name={pokemon.name}
                image={pokemon.imageUrl}
            />
            )})
          }
        </ThumbnailsWrapper>
      </Body>
    </PokemonSearchWrapper>
  )
};

export default BaseStatsSection;
