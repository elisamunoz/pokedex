import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type pokemonOrder = number

const initialState: pokemonOrder = 1;

export const pokemonsSlice = createSlice({
  name: 'selectedPokemon',
  initialState,
  reducers: {
    set: (_, action: PayloadAction<number>) => action.payload,
    reset: () => initialState,
  }
})

export const { set, reset } = pokemonsSlice.actions

export default pokemonsSlice.reducer