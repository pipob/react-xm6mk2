import React from "react";
import "./Menu.css";

export default function Menu({userId, setMainId}) { 
  

  let sidenav = {
    height: '100%',
    width: '0px'
  }
/*
  let main = {
    marginLeft : menuWidth
  }

*/
  return(
    
    <div>
      <h1 onClick={() => {  }}><i class="fas fa-bars"></i></h1>
      <nav  > 
        <ul>
          <MenuList pageId="play" name="Play Game" setData={setMainId} />
          <MenuList pageId="deck" name="Deck Builder" setData={setMainId} />
          <MenuList pageId="friend" name="Friend" setData={setMainId} />
          <MenuList pageId="quit" name="Quit" setData={setMainId} />

        </ul>

      </nav>

    </div>
   
  )
}

const MenuList = ({name,pageId,setData}) => {
  return(
    <li> <a onClick={() => { setData(pageId) }}>{name}</a> </li>
  )
}