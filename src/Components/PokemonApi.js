import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";
import BtnDark from "./btn/BtnDark";
import BtnHight from "./btn/BtnHight";
import Like from "./btn/Like";


const PokemonApi = ({btnStateProps2}) => {
  const [pokemonsRandom, setPokemonsRandom] = useState([]);
  
  


  useEffect(() => {
    axios.get("https://pokebuildapi.fr/api/v1/random/team")
    .then((getPokemonRandom)=>setPokemonsRandom(getPokemonRandom.data))
    .catch((e)=>console.error(e))
  }, []);
  

  return (
    <div className="pokemonCardContainer flex wrap">
    {pokemonsRandom.map((pokemonRandom) => {
       return (
       <article>
          <img src={pokemonRandom.image} alt={pokemonRandom.name} />
          
          <h3>{pokemonRandom.name}</h3>
          {btnStateProps2 ?(<BtnDark name={pokemonRandom.name}/>
          ):(<BtnHight name={pokemonRandom.name}/>)
        }
        <Like/>
       </article>
       )
      })}
      </div>
  );
};

export default PokemonApi;
