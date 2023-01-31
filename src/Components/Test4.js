import React from "react";
import Like from "./Like";
import "../index.css";
import PokemonApi from "./PokemonApi";

const Test4 = () => {
  return (
    <div>
      <main>
        <section>
          <div className="flex jc-space-around">
            <h2>Section 1</h2>
            <button className="btn">Changer de style</button>
          </div>
          <PokemonApi />
        </section>

        <section>
          <div className="flex jc-space-around">
            <h2>Section 2</h2>
            <button className="btn">Changer de style</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Test4;
