import React from 'react';
import { useState, useEffect } from 'react';
import { Header } from './Components/Header'
import { PokemonContainer } from './Components/PokemonContainer'
import './App.css';

export const POKEMON_COUNT: number = 1281;

export interface PokemonType {
  name: string;
  url: string;
  image: string;
}

export interface PokemonsType {
  list: Array<PokemonType>
};

export function App() {

  const [pokemons, setPokemons] = useState({
    list: []
  });

  const getPokemons = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=' + POKEMON_COUNT.toString());
    const data = await response.json();
    setPokemons({
      list: data.results
    });
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="App">
      <Header />
      {Boolean(pokemons.list?.length) ? <PokemonContainer list={pokemons.list} /> : <div className='loader'> Loading... </div>}
    </div>
  )
}
