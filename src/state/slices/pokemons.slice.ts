import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PokemonType, PokemonDetailsType } from '../../types/pokemon';

export interface PokemonState {
  list: PokemonType[],
  species: any[],
  details: { [key: number]: PokemonDetailsType },
}

const initialState: PokemonState = {
  list: [],
  species: [],
  details: [],
};

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    addPokemons: (state, action: PayloadAction<PokemonType[]>) => {
      state.list = action.payload
    },
    addPokemon: (state, action: PayloadAction<PokemonType>) => {
      state.list = [
        ...state.list,
        action.payload
      ]
    },
    addPokemonDetails: (state, action: PayloadAction<PokemonDetailsType>) => {
      const pk = action.payload;

      state.details = {
        ...state.details,
        [pk.number]: pk,
      }
    },
    clear: () => initialState,
  }
})

export const { addPokemons, addPokemon, addPokemonDetails, clear } = pokemonsSlice.actions

export default pokemonsSlice.reducer