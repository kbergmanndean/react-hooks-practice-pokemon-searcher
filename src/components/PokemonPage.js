import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemons, setPokemons]=useState([])
  const [searchText, setSearch]=useState("")
  const [pokeName, setPokeName]=useState("")
  const [pokeHp, setPokeHp]=useState("")
  const [pokeFront, setPokeFront]=useState("")
  const [pokeBack, setPokeBack]=useState("")
  
  useEffect(()=> {
    fetch ("http://localhost:3001/pokemon")
    .then(resp=>resp.json())
    .then(data=>setPokemons(data));
  },[])

  function handleSearch (e) {
    setSearch(e.target.value)
  }

  let displayPokemon= pokemons.filter(pokemon=>pokemon.name.toLowerCase().includes(searchText.toLowerCase()))
  
  function handleSubmit(e){
    e.preventDefault();
    const formData={name:pokeName, hp:pokeHp, sprites: {front:pokeFront, back:pokeBack}}
    setPokemons([...pokemons,formData])
    fetch("http://localhost:3001/pokemon",{
      method:"POST",
      headers:{"Content-Type":"application/json"
    },
      body: JSON.stringify(formData)
    }).then(r=>r.json())
    .then(data=>console.log(data))
  }


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm 
      pokeName={pokeName}
      setPokeName={setPokeName}
      pokeHp={pokeHp}
      setPokeHp={setPokeHp}
      pokeFront={pokeFront}
      setPokeFront={setPokeFront}
      pokeBack={pokeBack}
      setPokeBack={setPokeBack}
      handleSubmit={handleSubmit}/>
      <br />
      <Search handleSearch={handleSearch}/>
      <br />
      <PokemonCollection pokemons={displayPokemon} />
    </Container>
  );
}

export default PokemonPage;
