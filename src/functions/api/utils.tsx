//  Fetches an array of objects with the first 150 pokemons
import type { PokemonType, PokemonDetailsType, pokemonStat, pokemonAPI } from "../../types/pokemon";

export const getPokemonList = async (): Promise<PokemonType[]>=> {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150`)
    .then((res) => res.json());

  return data.results.map((pokemon: PokemonType, index: number) => {
    const pokemonNumber = index + 1;

    return ({
    ...pokemon,
    number: pokemonNumber,
    imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonNumber}.svg`,
  })})
} 

export const getPokemonDetails = async(pokemonNumber: number, pokemonList: PokemonType[]): Promise<PokemonDetailsType> => {
  const pokemon = getPokemonByNumber(pokemonNumber, pokemonList);

  const pokemonDetails = await getPokemonInformation(pokemonNumber)
  const description = await getPokemonDescription(pokemonNumber)

  const type = pokemonDetails.types.map((pokeType) => pokeType.type.name)
  const height = pokemonDetails.height
  const weight = pokemonDetails.weight
  const moves = pokemonDetails.abilities.map((ability) => ability.ability.name)
  const stats = pokemonDetails.stats.map((stat): pokemonStat => ({
    name: stat.stat.name,
    value: stat.base_stat,
  }))

  return {
    url: pokemon.url,
    name: pokemon.name,
    number: pokemon.number,
    imageUrl: pokemon.imageUrl,
    type,
    height,
    weight,
    moves,
    description,
    stats,  
  }
}

 const getPokemonInformation = async(index: number): Promise<pokemonAPI> => {
  return await fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`)
    .then((res) => res.json());
}

const getPokemonDescription = async(index: number): Promise<string> => {
  const description = await fetch(
  `https://pokeapi.co/api/v2/pokemon-species/${index}`
  ).then((res) => res.json());

  return description.flavor_text_entries[0].flavor_text.replace(/[\n\f]/g, " ");
}

const getPokemonByNumber = (pokemonNumber: number, pokemonList: PokemonType[]): PokemonType =>
 pokemonList.find(pok => pok.number === pokemonNumber) as PokemonType;



