import React, { useEffect, useState } from "react";
import type { HeadFC, PageProps } from "gatsby"
import { getPokemonList } from "../functions/api/utils"
import Select from "../ui/components/Select"
import { StyledBody } from "../styles/app.styles"
import type { PokemonType } from "../functions/api/utils";
import '../styles/global.css';

const IndexPage: React.FC<PageProps> = () => {
  const [pokemonList, setPokemonList] = useState<PokemonType[]>([])

  useEffect(() => {
    const fetchPokemons = async() => {
      const pokemons = await getPokemonList()
      setPokemonList(pokemons);
    }
    fetchPokemons()  

  }, [])

   const onhandleSelectChange = (selectedValue: number) => {
    console.log(selectedValue)
  }

  return (
    <StyledBody>
      <Select 
        onChange={onhandleSelectChange}
        defaultValue="Default Value" 
        instructionOption="Choose an option"
        options={pokemonList.map(pok => ({
          value: pok.number,
          label: pok.name,
        }))}
      />
    </StyledBody>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
