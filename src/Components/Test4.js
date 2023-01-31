import React, { useState } from "react";
import Like from "./btn/Like";
import "../index.css";
import PokemonApi from "./PokemonApi";
import PokemonApiTypes from "./PokemonApiTypes";

const Test4 = () => {
    const [buttonState, setButtonState] = useState(true)
    const [buttonState2, setButtonState2] = useState(true)


    const handleChangeBtnState = ()=>{
        
        if(buttonState == true){
          setButtonState(false);
        }else{
          setButtonState(true);
        }
      }

      const handleChangeBtnState2 = ()=>{
        
        if(buttonState2 == true){
          setButtonState2(false);
        }else{
          setButtonState2(true);
        }
      }

      
  return (
    <div>
      <main>
        <section>
          <div className="flex jc-space-around">
            <h2>Section 1</h2>
            <button className="btn" onClick={handleChangeBtnState2}>Changer de style</button>
          </div>
            <PokemonApi btnStateProps2={buttonState2}/>
        </section>

        <section>
          <div className="flex jc-space-around">
            <h2>Section 2</h2>
            <button className="btn" onClick={handleChangeBtnState}>Changer de style</button>
          </div>
          <PokemonApiTypes btnStateProps={buttonState}/>
        </section>
      </main>
    </div>
  );
};

export default Test4;
