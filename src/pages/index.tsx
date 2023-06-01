import React, { useEffect, useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import Select from '../ui/components/Select';
import { useDispatch, useSelector } from "react-redux";
import LowerPokemonInfo from "../ui/layout/LowerPokemonInfo";
import UpperPokemonInfo from "../ui/layout/UpperPokemonInfo";
import { StyledBody, PokemonCard } from "../styles/app.styles";
import '../styles/global.css';
import { useFetchPokemons, useFetchPokemonDetails } from "../state/hooks/pokemon";
import { getNextIndex, getPrevIndex, setIndex } from "../state/slices/selectedPokemon.slice";
import { getSelectedPokemon, getSelectedPokemonDetails } from '../state/selectors/selectedPokemon.selectors';
import { getPokemons } from "../state/selectors/pokemons.selectors";

const IndexPage: React.FC<PageProps> = () => {
  useFetchPokemons();
  const fetchPokemonDetails = useFetchPokemonDetails();
  const dispatch = useDispatch();

  const pokemonList = useSelector(getPokemons);  
  const selectedPokemon = useSelector(getSelectedPokemon);
  const selectedPokemonDetails = useSelector(getSelectedPokemonDetails);

  const [isPokemonCardVisible, setIsPokemonCardVisible] = useState(true);

  useEffect(() => {
    fetchPokemonDetails(selectedPokemon);
  }, [selectedPokemon]);

  const handlePreviousButton = () => dispatch(getPrevIndex());
  const handleNextButton = () => dispatch(getNextIndex());
  const handleOnSelectChange = (selectedValue: number) => dispatch(setIndex(selectedValue));

  const [ mainType ] = selectedPokemonDetails?.type || [];

  const handleBackButton = () => {
    setIsPokemonCardVisible(!isPokemonCardVisible);
    console.log(isPokemonCardVisible);
  }

  return (
    <StyledBody type={mainType}>
      <Select 
        onChange={handleOnSelectChange}
        defaultValue="Default Value" 
        instructionOption="Choose an option"
        options={pokemonList.map(pokemon => ({
          value: pokemon.number,
          label: pokemon.name,
        }))}
      />
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
