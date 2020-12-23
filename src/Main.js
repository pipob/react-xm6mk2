import React from "react";

import DeckBuilder from './DeckBuilder'
import Menu from './Menu/Menu'


export default function Main({userId, pageId}) { 
  

  return(
    <div>      
      { 
       // (id == "play")?<PlayGame />:null
        (pageId == "deck")?<DeckBuilder />:null
      }
    </div>
  )
}

