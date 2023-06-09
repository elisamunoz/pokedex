import React, { useEffect, useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
// import { useDispatch, useSelector } from "react-redux";
import PokemonSearch from "../ui/layout/PokemonSearch"
import LowerPokemonInfo from "../ui/layout/LowerPokemonInfo";
import UpperPokemonInfo from "../ui/layout/UpperPokemonInfo";
import { StyledBody, PokemonCard } from "../styles/app.styles";
import { useAppSelector } from "../state/hooks";
import '../styles/global.css';
import { useFetchPokemons, useFetchPokemonDetails, useSetPokemon } from "../state/hooks/pokemon";
import { getSelectedPokemon, getSelectedPokemonDetails } from '../state/selectors/selectedPokemon.selectors';
import { getPokemons } from "../state/selectors/pokemons.selectors";
import LoadingPage from "../ui/layout/LoadingPage";

const IndexPage: React.FC<PageProps> = () => {

  useFetchPokemons();
  const fetchPokemonDetails = useFetchPokemonDetails();

  const pokemonList = useAppSelector(getPokemons);
  const selectedPokemon = useAppSelector(getSelectedPokemon);
  const selectedPokemonDetails = useAppSelector(getSelectedPokemonDetails);
  const setPokemon = useSetPokemon();
  
  const [isPokemonCardVisible, setIsPokemonCardVisible] = useState(false);

  useEffect(() => {
    fetchPokemonDetails(selectedPokemon);
  }, [selectedPokemon]);

  const [ mainType ] = selectedPokemonDetails?.type || [];

  const handleBackButton = () => {
    setIsPokemonCardVisible(false)
  }

  const handleShowPokemonCard = (pkNumber: number) => {
    setIsPokemonCardVisible(true);
    setPokemon.byIndex(pkNumber);
  }

  const isLoading = pokemonList.length === 0;
  const isPokemonLoading = selectedPokemonDetails.description === undefined
  
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
            onClickNextButton={setPokemon.next}
            onClickPreviousButton={setPokemon.prev}
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
              isPokemonLoading={isPokemonLoading}
            />
        </PokemonCard> 
      }
    </StyledBody>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
