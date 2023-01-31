import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";
import BtnDark from "./btn/BtnDark";
import BtnHight from "./btn/BtnHight";
import Like from "./btn/Like";

const PokemonApiTypes = ({btnStateProps}) => {
  const [pokemonsTypeRandom, setPokemonsTypeRandom] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    axios.get("https://pokebuildapi.fr/api/v1/types")
    .then((getPokemonTypeRandom)=>setPokemonsTypeRandom(getPokemonTypeRandom.data))
    .catch((e)=>console.error(e))
  }, []);

  

  return (
    <div className="pokemonCardContainer flex wrap">
    {pokemonsTypeRandom.map((pokemonTypeRandom) => {
       return (
       <article>
          <img src={pokemonTypeRandom.image} alt={pokemonTypeRandom.name} />
          <h3>{pokemonTypeRandom.name}</h3>

          {btnStateProps ?(<BtnDark/>
          ):(<BtnHight/>)
        }
          
          <Like/>
       </article>
       )
      })}
      </div>
  );
};


export default PokemonApiTypes;
