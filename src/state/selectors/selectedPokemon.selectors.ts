import type { RootState } from '../store'

export const selectPokemon = (state: RootState): number =>
  state.selectedPokemon;
