import React from 'react'

const PokemonCard = ({pokeId,pokemon}) => {
  return (
    <>
      <div className='poke-container'>
        <div className='poke-card'>
          <figure>
            <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
            className='poke-logo'
            />
          </figure>
          <h1>{pokemon.name}</h1>
          <h4>{pokemon.types.map((curr)=>curr.type.name).join(", ")}</h4>
          <div className='poke-information'>
            <p className='poke-info'>Height: {pokemon.height}</p>
            <p className='poke-info'>Weight: {pokemon.weight}</p>
            <p className='poke-info'>Speed: {pokemon.stats[5].base_stat}</p>
            <p className='poke-info'>Attack: {pokemon.stats[1].base_stat}</p>
            <p className='poke-info'>Experience: {pokemon.base_experience}</p>
            <p className='poke-info'>Height: {pokemon.abilities[0].ability.name}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PokemonCard
