import type { RootState } from '../store';
import type { PokemonType } from '../../types/pokemon';
import type { PokemonState } from '../slices/pokemons.slice';

export const selectPokemonsData = (state: RootState): PokemonState =>
  state.pokemons;

export const selectPokemons = (state: RootState): PokemonType[] =>
  state.pokemons.list;

export const selectPokemonSpecies = (state: RootState): any[] =>
  state.pokemons.species;
