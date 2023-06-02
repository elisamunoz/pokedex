import type { RootState } from '../store'
import type { PokemonDetailsType } from '../../types/pokemon';
import { getPokemonsDetailsByNumber } from './pokemons.selectors';

export const getSelectedPokemon = (state: RootState): number =>
  state.selectedPokemon;

export const getSelectedPokemonDetails = (state: RootState): PokemonDetailsType => {
  const pkNumber = getSelectedPokemon(state);

  return getPokemonsDetailsByNumber(state, pkNumber);
}
