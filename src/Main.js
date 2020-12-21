import React from "react";

import DeckBuilder from './DeckBuilder'


export default function Main({id,userId}) { 

  return(
    <div>
      <Menu setPageId={setPageId} setMenuwidth={setMenuwidth}/>
      { 
       // (id == "play")?<PlayGame />:null
        (id == "deck")?<DeckBuilder />:null
      }
    </div>
  )
}

