import React from "react";

const Screen = ({ pokemones }) => {
  console.log(pokemones);

  return (
    <div
      style={{
        paddingTop: "5%",
        paddingBottom: "20%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="screen">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {pokemones?.map((pokemon) => (
            <div key={pokemon.name} style={{ textAlign: "center", width: "33.33%",padding:"10px",boxSizing:"border-box", }}>
            <img src={pokemon.sprites.front_default} alt="pokemones" />
            <p style={{fontFamily: "Pokemon Classic", fontSize:"11px"}}>{pokemon.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Screen;