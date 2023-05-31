import React, { useEffect, useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import { getPokemonList, getPokemonDetails } from "../functions/api/utils";
import PokemonInfo from "../ui/layout/PokemonInfo";
import Select from "../ui/components/Select";
import { StyledBody } from "../styles/app.styles";
import type { PokemonType, PokemonDetailsType } from "../types/pokemon";
import '../styles/global.css';

const styles = {
  size: {
    width: "200px",
    height: "200px"
  }
}


const IndexPage: React.FC<PageProps> = () => {
  const [pokemonList, setPokemonList] = useState<PokemonType[]>([])
  const [currentPokemonDetails, setCurrentPokemonDetails] = useState<PokemonDetailsType>({
    name: "",
    url: "",
    number: 0,
    imageUrl: '',
  })

  useEffect(() => {
    const fetchPokemons = async() => {
      const pokemons = await getPokemonList()
      setPokemonList(pokemons);
    }
    fetchPokemons()  

  }, [])

  

  const onhandleSelectChange = async (selectedValue: number) => {
    const pokemonDetails = await getPokemonDetails(selectedValue, pokemonList)
    setCurrentPokemonDetails({
      ...pokemonDetails
    })
  }

  const [ mainType ] = currentPokemonDetails?.type || [];

  return (
    <StyledBody type={mainType}>
      <Select 
        onChange={onhandleSelectChange}
        defaultValue="Default Value" 
        instructionOption="Choose an option"
        options={pokemonList.map(pokemon => ({
          value: pokemon.number,
          label: pokemon.name,
        }))}
      />
      <PokemonInfo 
        types={currentPokemonDetails.type}
        statsValue={currentPokemonDetails.stats}
        weight={currentPokemonDetails.weight} 
        height={currentPokemonDetails.height}
        moves={currentPokemonDetails.moves}
        description={currentPokemonDetails.description}
      />
      <h1>{currentPokemonDetails.name}</h1>
      <img style={styles.size} src={currentPokemonDetails.imageUrl} />
    </StyledBody>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
