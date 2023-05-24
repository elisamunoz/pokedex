import { useEffect } from "react";
import { getPokemonList } from '../../functions/api/utils';
import { useAppDispatch } from './';

import { addPokemons } from '../slices/pokemons.slice'

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
