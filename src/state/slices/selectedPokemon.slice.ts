import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type pokemonOrder = number

const initialState: pokemonOrder = 1;

export const pokemonsSlice = createSlice({
  name: 'selectedPokemon',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<number>) => {
      state = action.payload;
    },
    reset: () => initialState,
  }
})

export const { set, reset } = pokemonsSlice.actions

export default pokemonsSlice.reducer