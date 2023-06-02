import React, { useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import Body from "../../components/Body";
import SvgIcon from "../../components/Svg";
import Thumbnail from "../../components/Thumbnail";
import { pokeBall } from "../../../images/svgPaths";
import { PokemonSearchWrapper, ThumbnailsWrapper, Header, UpperContent, SearchBarWrapper, SearchBar, Title } from "./PokemonSearch.styles"
import { PokemonType } from "../../../types/pokemon";
import { addZerosToStart } from '../../../functions/utils'
import { getPokemons } from "../../../state/selectors/pokemons.selectors";


interface Props {
  onClickThumbnail: (pokemonNumber: number) =>  void;
}

export const BaseStatsSection = ({
  onClickThumbnail,
}: Props) => {
  const [query, setQuery] = useState('');
  const pokemonList = useSelector(getPokemons);
  
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target?.value;
    setQuery(value)
  }

  const filteredPokemons: PokemonType[] = pokemonList
    .filter((pokemon: PokemonType) => pokemon.name.includes(query))

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
          {filteredPokemons.map(pokemon => {
            const pokemonNumber = addZerosToStart(pokemon.number)

            return (
              <Thumbnail
                onClickThumbnail={() => onClickThumbnail(pokemon.number)}
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
