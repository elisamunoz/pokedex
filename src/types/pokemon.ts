import { POKEMON_TYPES } from "../constants";

export type PokemonType = {
  name: string;
  url: string;
  number: number;
  imageUrl: string;
}

export type pokemonStat = {
  name: string;
  value: number;
}

export interface PokemonDetailsType extends PokemonType {
  type?: POKEMON_TYPES[];
  height?: number;
  weight?: number;
  moves?: Array<string>
  description?: string;
  stats?: Array<pokemonStat>; 
}

/****************** */
// API Pokemon Types
/****************** */

export type pokemonAbilityAPI = {
  slot: number;
  isHidden: boolean;
  ability: {
    name: string;
    url: string;  
  };
}
export type pokemonTypeAPI = {
  slot: number;
  type: {
    name: POKEMON_TYPES;
    url: string;  
  };
}

export type pokemonStatsAPI = {
  base_stat: number;
  stat: {
    name: string;
    url: string;  
  };
}

export interface pokemonAPI extends PokemonType {
  height: number;
  weight: number;
  abilities: pokemonAbilityAPI[];
  types: pokemonTypeAPI[];
  stats: pokemonStatsAPI[];
  imageUrl: string;
  description: string;
}
