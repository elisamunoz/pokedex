import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type pokemonOrder = number

const initialState: pokemonOrder = 1;

export const pokemonsSlice = createSlice({
  name: 'selectedPokemon',
  initialState,
  reducers: {
    setIndex: (_, action: PayloadAction<number>) => action.payload,
    getPrevIndex: (state) => state - 1,
    getNextIndex: (state) => state + 1,
    reset: () => initialState,
  }
})

export const { setIndex, reset, getPrevIndex, getNextIndex } = pokemonsSlice.actions

export default pokemonsSlice.reducer