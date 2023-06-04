import React, { useEffect, useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import { useDispatch, useSelector } from "react-redux";
import PokemonSearch from "../ui/layout/PokemonSearch"
import LowerPokemonInfo from "../ui/layout/LowerPokemonInfo";
import UpperPokemonInfo from "../ui/layout/UpperPokemonInfo";
import { StyledBody, PokemonCard } from "../styles/app.styles";
import '../styles/global.css';
import { useFetchPokemons, useFetchPokemonDetails } from "../state/hooks/pokemon";
import { getNextIndex, getPrevIndex, setIndex } from "../state/slices/selectedPokemon.slice";
import { getSelectedPokemon, getSelectedPokemonDetails } from '../state/selectors/selectedPokemon.selectors';
import { getPokemons } from "../state/selectors/pokemons.selectors";
import LoadingPage from "../ui/layout/LoadingPage";

const IndexPage: React.FC<PageProps> = () => {

  useFetchPokemons();
  const fetchPokemonDetails = useFetchPokemonDetails();
  const dispatch = useDispatch();

  const pokemonList = useSelector(getPokemons);
  const selectedPokemon = useSelector(getSelectedPokemon);
  const selectedPokemonDetails = useSelector(getSelectedPokemonDetails);
  
  const [isPokemonCardVisible, setIsPokemonCardVisible] = useState(false);

  useEffect(() => {
    fetchPokemonDetails(selectedPokemon);
  }, [selectedPokemon]);

  const handlePreviousButton = () => dispatch(getPrevIndex());
  const handleNextButton = () => dispatch(getNextIndex());

  const [ mainType ] = selectedPokemonDetails?.type || [];

  const handleBackButton = () => {
    setIsPokemonCardVisible(false)
  }

  const handleShowPokemonCard = (pkNumber: number) => {
    setIsPokemonCardVisible(true);
    dispatch(setIndex(pkNumber));
  }

  const isLoading = pokemonList.length === 0;

  return isLoading ? <LoadingPage /> : (
    <StyledBody type={mainType}>
      {!isPokemonCardVisible && 
        <PokemonSearch
          onClickThumbnail={handleShowPokemonCard}
        />
      }
      {isPokemonCardVisible &&
        <PokemonCard>
          <UpperPokemonInfo 
            onClickBackButton={handleBackButton}
            onClickNextButton={handleNextButton}
            onClickPreviousButton={handlePreviousButton}
            name={selectedPokemonDetails.name}
            number={selectedPokemonDetails.number}
            imageUrl={selectedPokemonDetails.imageUrl}
          />
          <LowerPokemonInfo 
            types={selectedPokemonDetails.type}
            statsValue={selectedPokemonDetails.stats}
            weight={selectedPokemonDetails.weight} 
            height={selectedPokemonDetails.height}
            moves={selectedPokemonDetails.moves}
            description={selectedPokemonDetails.description}
          />
        </PokemonCard> 
      }
    </StyledBody>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
