import React from "react";

import DeckBuilder from './DeckBuilder'
import Menu from './Menu'

export default function Main({userId}) { 
  return(
    <div>
      <Menu />
      <DeckBuilder />
    </div>
  )
}

