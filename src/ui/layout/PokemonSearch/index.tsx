import React, { ChangeEvent } from "react";
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
  onChange: (value: string) => void,
}

export const BaseStatsSection = ({
  onClickThumbnail,
  pokemons,
  onChange
}: Props) => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target?.value;
    onChange(inputValue)
  }
  return (
    <PokemonSearchWrapper>
      <Header>
        <UpperContent>
          <SvgIcon path={pokeBall.path} viewBox={pokeBall.viewBox} color="#fff" />
          <Title>Pokédex</Title>
        </UpperContent>
        <SearchBarWrapper>
          <SearchBar 
            type="text"
            placeholder="Enter a Pokemon name"
            onChange={handleOnChange}
          />
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
