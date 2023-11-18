import  { useState, useEffect } from 'react';
import * as classes from "./helloComponent.module.scss";
import {PokemonModel} from "./pokemon.model.js";
export const HelloComponent = () => {
  const API_URL= "https://pokeapi.co/api/v2/pokemon"
  const [ pokemon , setPokemon ] = useState(null)
  const randomId = Math.floor(Math.random() * 806 + 1)
  const [ pokemonID, setPokemonId ] = useState(randomId)
  useEffect(() => {
    fetch(`${API_URL}/${pokemonID}`)
      .then(res => res.json())
      .then((data: PokemonModel)  => {
        setPokemon(data)
      })
      .catch(err => {
        console.log('err', err);
      })
  }, []);

  return (
        pokemon &&  (
        <>
          <h1>Ejemplo Pokemon API - Bundling Parcel</h1>
          <div className={classes.container}>
            <div className={classes['card']}>

              <h2 className={classes['color-text']}>{pokemon?.name}</h2>
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