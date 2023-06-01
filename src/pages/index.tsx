import React, { useEffect, useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import { getPokemonList, getPokemonDetails } from "../functions/api/utils";
import LowerPokemonInfo from "../ui/layout/LowerPokemonInfo";
import UpperPokemonInfo from "../ui/layout/UpperPokemonInfo";
import Select from "../ui/components/Select";
import { StyledBody, PokemonCard } from "../styles/app.styles";
import type { PokemonType, PokemonDetailsType } from "../types/pokemon";
import '../styles/global.css';

const IndexPage: React.FC<PageProps> = () => {
  const [pokemonList, setPokemonList] = useState<PokemonType[]>([])
  const [currentPokemonIndex, setCurrentPokemonIndex] = useState<number>(0);
  const [currentPokemonDetails, setCurrentPokemonDetails] = useState<PokemonDetailsType>({
    name: "",
    url: "",
    number: 0,
    imageUrl: '',
  })
  const [isPokemonCardVisible, setIsPokemonCardVisible] = useState(true)

  useEffect(() => {
    const fetchPokemons = async() => {
      const pokemons = await getPokemonList()
      setPokemonList(pokemons);
    }
    fetchPokemons()

  }, [])

  useEffect(() => {
    const fetchPokemonDetails = async() => {
      const pokNumber = pokemonList.at(currentPokemonIndex)?.number || 0;

      const pokemonDetails = await getPokemonDetails(pokNumber, pokemonList)
      setCurrentPokemonDetails({
        ...pokemonDetails
      })
    }
    fetchPokemonDetails()
  }, [currentPokemonIndex])

  const handleOnSelectChange = async (selectedValue: number) => {
    setCurrentPokemonIndex(selectedValue);
  }

  const [ mainType ] = currentPokemonDetails?.type || [];

  const handleBackButton = () => {
    setIsPokemonCardVisible(!isPokemonCardVisible)
    console.log(isPokemonCardVisible)
  }

  const handlePreviousButton = () => setCurrentPokemonIndex(currentPokemonIndex - 1)
  const handleNextButton = () => setCurrentPokemonIndex(currentPokemonIndex + 1)

  return (
    <StyledBody type={mainType}>
      {/* <Select 
        onChange={handleOnSelectChange}
        defaultValue="Default Value" 
        instructionOption="Choose an option"
        options={pokemonList.map(pokemon => ({
          value: pokemon.number,
          label: pokemon.name,
        }))}
      /> */}
      {isPokemonCardVisible &&
        <PokemonCard>
          <UpperPokemonInfo 
            onClickBackButton={handleBackButton}
            onClickNextButton={handleNextButton}
            onClickPreviousButton={handlePreviousButton}
            name={currentPokemonDetails.name}
            number={currentPokemonDetails.number}
            imageUrl={currentPokemonDetails.imageUrl}
          />
          <LowerPokemonInfo 
            types={currentPokemonDetails.type}
            statsValue={currentPokemonDetails.stats}
            weight={currentPokemonDetails.weight} 
            height={currentPokemonDetails.height}
            moves={currentPokemonDetails.moves}
            description={currentPokemonDetails.description}
          />
        </PokemonCard> 
      }
     
      
    </StyledBody>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
