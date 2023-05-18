//  Fetches an array of objects with the first 150 pokemons

export type PokemonType = {
  name: string;
  url: string;
  number: number;
}
export const getPokemonList = async () : Promise<PokemonType[]>=> {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150`)
    .then((res) => res.json());

  return data.results.map((pokemon: PokemonType, index: number) => ({
    ...pokemon,
    number: index + 1,
  }))
} 

// export const getPokemonImage = async (pokemonNumber: number): Promise<string> => {
//   const data = await fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonNumber}.svg`)
//     .then((res) => res.json());

//   return data.results;
// }