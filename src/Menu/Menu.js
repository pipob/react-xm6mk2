import React from "react";
import "./Menu.css";

export default function Menu({userId, setPageId}) { 


  return(    
    <div>
      <h1 className="ml-auto" onClick={() => { alert(1) }}><i class="fas fa-bars"></i></h1>
      <nav  > 
        <ul class="list-group">
          <MenuList pageId="play" name="Play Game" icon="fab fa-playstation" setPageId={setPageId} />
          <MenuList pageId="deck" name="Deck Builder" icon="fas fa-layer-group" setPageId={setPageId} />
          <MenuList pageId="friend" name="Friend" icon="fas fa-user-friends" setPageId={setPageId} />
          <MenuList pageId="quit" name="Quit" icon="fas fa-sign-out-alt" setPageId={setPageId} />

        </ul>

      </nav>

    </div>
   
  )
}

const MenuList = ({pageId, name, icon, setPageId}) => {
  return(
    <li className="list-group-item"><a onClick={() => { setPageId(pageId) }}><i class={icon}></i> {name}</a> </li>
  )
}