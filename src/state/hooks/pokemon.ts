import { useEffect } from "react";
import { getPokemonList, getPokemonDetails } from '../../functions/api/utils';
import { getPokemons, getTotalPokemons } from "../selectors/pokemons.selectors";
import { addPokemons, addPokemonDetails } from '../slices/pokemons.slice';
import { getNextIndex, getPrevIndex, setIndex } from "../slices/selectedPokemon.slice";
import { getSelectedPokemon } from "../selectors/selectedPokemon.selectors";
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
    const pokemonDetails = await getPokemonDetails(pokNumber, pokemonList)

    dispatch(addPokemonDetails(pokemonDetails))
  };
};

export const useSetPokemon = () => {
  const dispatch = useAppDispatch();
  const selectedPokemon = useAppSelector(getSelectedPokemon);
  const totalPokemons = useAppSelector(getTotalPokemons);

  const goPrev = () => {
    if(selectedPokemon > 1) {
      dispatch(getPrevIndex());
    } else {
      dispatch(setIndex(totalPokemons));
    }
  }
  const goNext = () => {
    if (selectedPokemon === totalPokemons) {
      dispatch(setIndex(1));      
    } else {
      dispatch(getNextIndex());
    }
  };
  const goTo = (pkNumber: number) => {
    dispatch(setIndex(pkNumber));
  };

  return {
    prev: goPrev,
    next: goNext,
    byIndex: goTo,
  }
};
