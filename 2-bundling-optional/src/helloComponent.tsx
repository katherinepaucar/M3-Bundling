import React, { useState, useEffect } from 'react';
import classes from "./helloComponent.scss"
import {PokemonModel} from "./pokemon.model";
export const HelloComponent = () => {

  const [ pokemon , setPokemon ] = useState(null)
  const randomId = Math.floor(Math.random() * 806 + 1)
  const [ pokemonID, setPokemonId ] = useState(randomId)
  useEffect(() => {
    fetch(`${process.env.API_URL}/${pokemonID}`)
      .then(res => res.json())
      .then((data: PokemonModel)  => {
        setPokemon(data)
      })
      .catch(err => {
  
      })
  }, []);

  return (
        pokemon &&  (
        <>
          <h1>Ejemplo Pokemon API</h1>
          <div className={classes.container}>
            <div className={classes.card}>

              <h2 className={classes.colorText}>{pokemon?.name}</h2>
              <img src={pokemon?.sprites?.front_default} />
              <ul>
                <li>Height: {pokemon?.height}</li>
                <li>Weight: {pokemon.weight}</li>
              </ul>
            
            </div>
          </div>
     </>
    )
      

  );
};