import React from "react";


const campoDeBatalla = '../src/campo-batalla.jpg'; 


const Screen = ({ pokemones, hoverPokemon, selectedPokemones, playerHealth, rivalHealth }) => {
  
  // Si ya hay dos Pokémon seleccionados, mostramos la batalla
  if (selectedPokemones?.length === 2) {
    const [player, rival] = selectedPokemones;

    return (
      <div
        style={{
          paddingTop: "5%",
          paddingBottom: "20%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="screen"
          style={{
            position: "relative",
            backgroundImage: `url(${campoDeBatalla})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Rival - arriba derecha */}
          <div style={{ position: "absolute", top: "10px", right: "10px", textAlign: "right" }}>
            <img src={rival.sprites.front_default} alt={rival.name} width="100" />
            <div style={{ width: '100px', height: '10px', background: 'gray', marginTop: '5px' }}>
              <div style={{
                width: `${rivalHealth}%`,
                height: '100%',
                background: 'green'
              }} />
            </div>
            <p style={{ fontFamily: "Pokemon Classic", fontSize: "11px", margin: '2px' }}>{rival.name}</p>
          </div>

          {/* Jugador - abajo izquierda */}
          <div style={{ position: "absolute", bottom: "10px", left: "10px", textAlign: "left" }}>
            <img src={player.sprites.back_default} alt={player.name} width="100" />
            <div style={{ width: '100px', height: '10px', background: 'gray', marginTop: '5px' }}>
              <div style={{
                width: `${playerHealth}%`,
                height: '100%',
                background: 'green'
              }} />
            </div>
            <p style={{ fontFamily: "Pokemon Classic", fontSize: "11px", margin: '2px' }}>{player.name}</p>
          </div>
        </div>
      </div>
    );
  }

  // Si no hay selección, mostramos la lista de Pokémon normal
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
            <div
              key={pokemon.name}
              style={{
                backgroundColor: hoverPokemon === pokemon.id ? "yellow" : "",
                textAlign: "center",
                width: "33.33%",
                padding: "10px",
                boxSizing: "border-box",
              }}
            >
              <img src={pokemon.sprites.front_default} alt="pokemones" />
              <p style={{ fontFamily: "Pokemon Classic", fontSize: "11px" }}>
                {pokemon.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Screen;
