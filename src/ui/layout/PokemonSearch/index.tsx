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


interface Props {
  onClickThumbnail: (pokemonNumber: number) =>  void;
}

export const BaseStatsSection = ({
  onClickThumbnail,
}: Props) => {
  const [query, setQuery] = useState('');
  const [orderByNumber, setOrderByNumber] = useState(true)
  const [sortAscendentOrder, setSortAscendentOrder] = useState(true)
  const pokemonList = useSelector(getPokemons);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target?.value;
    setQuery(value)
  }

  const filteredPokemons: PokemonType[] = pokemonList
    .filter((pokemon: PokemonType) => pokemon.name.includes(query))
  
  const handleOnClickSortBy = () => setOrderByNumber(!orderByNumber)
  const handleOnClickSort = () => setSortAscendentOrder(!sortAscendentOrder)

  const pokemonsFilteredAndSorted = sortPokemonsOrder(filteredPokemons, sortAscendentOrder, orderByNumber)

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
          <Button onClick={handleOnClickSortBy} name="order by">
            <SortByType>A</SortByType>
          </Button>
          <Button onClick={handleOnClickSort} name="ascendent descendent">
            <SortButton>V</SortButton>
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
