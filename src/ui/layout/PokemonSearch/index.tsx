import React from "react";
import Body from "../../components/Body";
import SvgIcon from "../../components/Svg";
import Thumbnail from "../../components/Thumbnail";
import { pokeBall } from "../../../images/svgPaths";
import { PokemonSearchWrapper, ThumbnailsWrapper, TextWrapper, SearchBar, Title } from "./PokemonSearch.styles"


interface Props {
  onClickGetPokemon: VoidFunction;
}

export const BaseStatsSection = ({
  onClickGetPokemon
}: Props) => {
  
  return (
    <PokemonSearchWrapper>
      <TextWrapper>
        <SvgIcon path={pokeBall.path} viewBox={pokeBall.viewBox} color="#fff" />
        <Title>Pokédex</Title>
      </TextWrapper>
      <SearchBar></SearchBar>
      
      <Body>
        <ThumbnailsWrapper>
          <Thumbnail 
            number="#001"
            name="Kakuna"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"
          />
          <Thumbnail 
            number="#001"
            name="Kakuna"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"
          />
          <Thumbnail 
            number="#001"
            name="Kakuna"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"
          />
          <Thumbnail 
            number="#001"
            name="Kakuna"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"
          />
          <Thumbnail 
            number="#001"
            name="Kakuna"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"
          />
          <Thumbnail 
            number="#001"
            name="Kakuna"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"
          />
          <Thumbnail 
            number="#001"
            name="Kakuna"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"
          />
          <Thumbnail 
            number="#001"
            name="Kakuna"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"
          />
          <Thumbnail 
            number="#001"
            name="Kakuna"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"
          />
          <Thumbnail 
            number="#001"
            name="Kakuna"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"
          />
          <Thumbnail 
            number="#001"
            name="Kakuna"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"
          />
          <Thumbnail 
            number="#001"
            name="Kakuna"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"
          />
        </ThumbnailsWrapper>
      </Body>
    </PokemonSearchWrapper>
  )
};

export default BaseStatsSection;
