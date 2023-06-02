import { useEffect } from "react";
import { getPokemonList, getPokemonDetails } from '../../functions/api/utils';
import { getPokemons } from "../selectors/pokemons.selectors";
import { addPokemons, addPokemonDetails } from '../slices/pokemons.slice';
import { useAppDispatch, useAppSelector } from './';

export const useFetchPokemons = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchPokemons = async() => {
      const pokemons = await getPokemonList();

      dispatch(addPokemons(pokemons));
    }
    fetchPokemons();
  }, []);
};

export const useFetchPokemonDetails = () => {
  const dispatch = useAppDispatch();
  const pokemonList = useAppSelector(getPokemons);   

  return async(pokNumber: number = 0) => {
    // if()
    const pokemonDetails = await getPokemonDetails(pokNumber, pokemonList)

    dispatch(addPokemonDetails(pokemonDetails))
  };
};

