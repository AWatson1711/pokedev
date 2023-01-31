import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const PokemonApi = () => {
  const [pokemons, setPokemon] = useState();

  useEffect(() => {
    axios.get("https://pokebuildapi.fr/api/v1/pokemon/limit/6").then((response) => {
        setPokemon(response.data);
      });
  }, []);

  return (
    <div>
      {pokemons.map((pokemon) => {
       <h3>{pokemon.name}</h3>
      })}
    </div>
  );
};

export default PokemonApi;
