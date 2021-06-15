import React,{useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({poke}) {
  const [front,setFront]=useState(true)

  function handleFront(){
    setFront(!front)
  }

  return (
    <Card>
      <div onClick={handleFront}>
        <div className="image">
          <img alt="oh no!" src= {front? poke.sprites.front : poke.sprites.back}/>
        </div>
        <div className="content">
          <div className="header">{poke.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {poke.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
