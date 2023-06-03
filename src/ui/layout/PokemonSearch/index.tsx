import React, { useState, ChangeEvent } from "react";
import { useSelector } from "react-redux";
import Body from "../../components/Body";
import SvgIcon from "../../components/Svg";
import Thumbnail from "../../components/Thumbnail";
import Button from "../../components/Button";
import { pokeBall } from "../../../images/svgPaths";
import { PokemonSearchWrapper, SortByType, SortButton, ThumbnailsWrapper, Header, UpperContent, SearchBarWrapper, SearchBar, Title } from "./PokemonSearch.styles"
import { PokemonType } from "../../../types/pokemon";
import { addZerosToStart, sortPokemonsOrder } from '../../../functions/utils'
import { getPokemons } from "../../../state/selectors/pokemons.selectors";
import { closeIcon, orderIcon, searchIcon, hashTagIcon, letterIcon } from "../../../images/svgPaths"


interface Props {
  onClickThumbnail: (pokemonNumber: number) =>  void;
}

export const BaseStatsSection = ({
  onClickThumbnail,
}: Props) => {
  const [query, setQuery] = useState('');
  const [isOrderByNumber, setIsOrderByNumber] = useState(true)
  const [isAscendent, setIsAscendent] = useState(true)
  const pokemonList = useSelector(getPokemons);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target?.value;
    setQuery(value)
  }

  const filteredPokemons: PokemonType[] = pokemonList
    .filter((pokemon: PokemonType) => pokemon.name.includes(query))
  
  const handleOnClickSortBy = () => setIsOrderByNumber(!isOrderByNumber)
  const handleOnClickSort = () => setIsAscendent(!isAscendent)

  const pokemonsFilteredAndSorted = sortPokemonsOrder(filteredPokemons, isAscendent, isOrderByNumber)

  return (
    <PokemonSearchWrapper>
      <Header>
        <UpperContent>
          <SvgIcon icon={pokeBall} color="#fff" />
          <Title>Pokédex</Title>
        </UpperContent>
        <SearchBarWrapper>
          <SearchBar 
            type="text"
            placeholder="Enter a Pokemon name"
            onChange={handleOnChange}
          />
          <Button onClick={handleOnClickSortBy} name="order by">
            <SortByType>
              <SvgIcon icon={!isOrderByNumber ? letterIcon : hashTagIcon} color="#DC0A2D" />
            </SortByType>
          </Button>
          <Button onClick={handleOnClickSort} name="ascendent descendent">
            <SortButton isAscendent={isAscendent}>
              <SvgIcon icon={orderIcon} color="#DC0A2D" />
            </SortButton>
          </Button>
        </SearchBarWrapper>     
      </Header>
      <Body>
        <ThumbnailsWrapper>
          {pokemonsFilteredAndSorted.map((pokemon: PokemonType) => {
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
