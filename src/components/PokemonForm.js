import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleSubmit,pokeName,setPokeName,pokeHp,setPokeHp,pokeFront,setPokeFront,pokeBack,setPokeBack}) {

function handleName(e){
setPokeName(e.target.value)
}

function handleHp(e){
  setPokeHp(e.target.value)
}

function handleFront(e){
  setPokeFront(e.target.value)
  console.log(pokeFront)
}

function handleBack(e){
  setPokeBack(e.target.value)
  console.log(pokeBack)
}


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={handleName} fluid label="Name" placeholder="Name" name="name" value={pokeName}/>
          <Form.Input onChange={handleHp} fluid label="hp" placeholder="hp" name="hp" value={pokeHp} />
          <Form.Input
            onChange={handleFront}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={pokeFront}
          />
          <Form.Input
            onChange={handleBack}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={pokeBack}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
