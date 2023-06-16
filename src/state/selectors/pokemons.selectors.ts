import type { RootState } from '../store';
import type { PokemonType, PokemonDetailsType } from '../../types/pokemon';
import type { PokemonState } from '../slices/pokemons.slice';

export const getPokemonsData = (state: RootState): PokemonState =>
  state.pokemons;

export const getPokemons = (state: RootState): PokemonType[] =>
  state?.pokemons?.list || [];

export const getPokemonsDetails = (state: RootState): { [key: number]: PokemonDetailsType } =>
  state?.pokemons?.details;

export const getPokemonsDetailsByNumber = (state: RootState, pkNumber: number): PokemonDetailsType =>
  getPokemonsDetails(state)[pkNumber] || {};

export const getPokemonSpecies = (state: RootState): any[] =>
  state.pokemons.species || [];

export const getTotalPokemons = (state: RootState): number =>
  getPokemons(state).length
