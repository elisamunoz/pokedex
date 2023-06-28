import { PokemonType } from "../types/pokemon"

export const addZerosToStart = (number: number = 0, totalLength:number = 3):string => number.toString().length < 3 
  ? `#${number.toString().padStart(totalLength, "0")}`
  : `#${number.toString()}`

export const sortPokemonsOrder = (pokemons: PokemonType[], ascendent:boolean = true, byNumber:boolean = true) => {
  if (ascendent && byNumber) {
    return pokemons.toSorted((pk1, pk2) => pk1.number < pk2.number ? -1 : 1)
  } else if (ascendent && !byNumber) {
    return pokemons.toSorted((pk1, pk2) => pk1.name < pk2.name ? -1 : 1)
  } else if (!ascendent && byNumber) {
    return pokemons.toSorted((pk1, pk2) => pk1.number > pk2.number ? -1 : 1)
  } else if (!ascendent && !byNumber) {
    return pokemons.toSorted((pk1, pk2) => pk1.name > pk2.name ? -1 : 1)
  }
  return 
}

