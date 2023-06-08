import { configureStore } from '@reduxjs/toolkit'
import pokemonsSlice from './slices/pokemons.slice';
import selectedPokemonSlice from './slices/selectedPokemon.slice';

type ConfiguredStore = ReturnType<typeof createStore>
type StoreGetState = ConfiguredStore["getState"]
export type RootState = ReturnType<StoreGetState>
export type AppDispatch = ConfiguredStore["dispatch"]


export const createStore = () => configureStore({
  reducer: {
    pokemons: pokemonsSlice,
    selectedPokemon: selectedPokemonSlice,
  },
})

export default createStore