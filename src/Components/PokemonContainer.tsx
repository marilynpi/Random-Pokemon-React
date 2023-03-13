import React from 'react';
import { PokemonType, PokemonsType, POKEMON_COUNT } from '../App';
import { useState } from 'react';

export function PokemonContainer ( { list }: PokemonsType ){

    const [pokemon, setPokemon] = useState<PokemonType>(
        {
          name: '',
          image: '',
          url: '',
        }
    );
  
    let buttonHandle = async () => {
        let randNum = Math.abs(Math.floor(Math.random() * (0 - POKEMON_COUNT)));
        const response = await fetch(list[randNum].url);
        const data = await response.json();
        setPokemon({
          name: data.name,
          image: data.sprites.front_default,
          url: list[randNum].url,
        });
    }

    let Card  = () => {
        return (
            <section>
                <div className="card">
                    <h1 id='name'> {pokemon.name.toUpperCase()} </h1>
                    <img id='img-id' alt={pokemon.name} src={pokemon.image} />
                </div>
                <Button/>
            </section>
            
        )
    }

    let Button = () => {
        return (
            <div>
                <h1>&#x2193; Generate a Random Pokemon &#x2193;</h1>
                <button id='buttonText' onClick={buttonHandle}> Click Here </button>
            </div>
        )
    }

    return (
        (pokemon.name) ? <Card/> : <Button/>
    )
}


