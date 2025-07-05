import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard';
import Loading from './Loading';
import "./Pokemon.css"
import "./Loading.css"
import "./Media.css"

const Pokemon = () => {
    const [pokemon,setPokemon] = useState([]);
    const [search,setSearch] = useState("");
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);


    const apiCall = async ()=>{
        const API = "https://pokeapi.co/api/v2/pokemon?limit=24";
        try{
            const res = await fetch(API);
            const data = await res.json();
    
            const URL = data.results.map( async (curr)=>{
                const res = await fetch(curr.url);
                const data = await res.json();
                return data;
            })
            const pokemons = await Promise.all(URL);
            setPokemon(pokemons);
            setLoading(false);
        }
        catch(error){
            setError(error);
            setLoading(false);
        }
    }
    
    const pokemonData = pokemon.filter((curr)=>
        curr.name.toLowerCase().includes(search.toLowerCase())
    )

    useEffect(()=>{
        apiCall();
    },[]);

    if(loading){
        return <Loading/>
    }

    if(error){
        return <h1>Error: {error.message}</h1>
    }
  return (
    <>
    <div className='container'>
        <header>
            <h1>Look For Pokemon</h1>
            <input type='text' placeholder='Search...' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        </header>
        <section className='pokemons'>
            {pokemonData.map((curr)=>{
                return <PokemonCard key={curr.id} pokemon={curr}/>
            })}
        </section>

    </div>
      
    </>
  )
}

export default Pokemon
