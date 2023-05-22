import React, { useEffect, useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import { getPokemonList, getPokemonDetails } from "../functions/api/utils";
import Select from "../ui/components/Select";
import Tag from "../ui/components/TagList"
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

  return (
    <StyledBody>
      <Select 
        onChange={onhandleSelectChange}
        defaultValue="Default Value" 
        instructionOption="Choose an option"
        options={pokemonList.map(pokemon => ({
          value: pokemon.number,
          label: pokemon.name,
        }))}
      />
      <h1>{currentPokemonDetails.name}</h1>
      <img style={styles.size} src={currentPokemonDetails.imageUrl} />  
      <p>{currentPokemonDetails.description}</p>
      <p>{currentPokemonDetails.url}</p>

      {/* {currentPokemonDetails.type?.map((pokemonType, index) => (
        <Tag key={index} text={pokemonType} test={currentPokemonDetails.number % 2 === 0}/>
      ))
      } */}

    <Tag types={currentPokemonDetails.type} />
          


    </StyledBody>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
