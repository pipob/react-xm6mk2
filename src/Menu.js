import React from "react";

export default function Menu({userId}) { 
  return(
    <div>
      <nav> 
        <ul>
          <MenuList name="play game" />

        </ul>

      </nav>

    {

      /*
    
      <div id="wrapper" class="">
        <div class="overlay" style={{display: "none"}}></div>
        <nav class="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
            <ul class="nav sidebar-nav">
                <li class="sidebar-brand">
                    <a href="#"> BLESM </a>
                </li>
                <li>
                    <a href="#"><i class="glyphicon glyphicon-camera"></i> Photo</a>
                </li>
                <li>
                    <a href="#"><i class="glyphicon glyphicon-facetime-video"></i> Video</a>
                </li>
                <li>
                    <a href="#"><i class="glyphicon glyphicon-headphones"></i> Music</a>
                </li>
                <li>
                    <a href="#"><i class="glyphicon glyphicon-cloud"></i> Cloud</a>
                </li>
                <li>
                    <a href="#"><i class="glyphicon glyphicon-th"></i> Apps</a>
                </li>
                <li>
                    <a href="#"><i class="glyphicon glyphicon-cog"></i> Settings</a>
                </li>
            </ul>
        </nav>
        <div id="page-content-wrapper">

            <div class="container">...YOUR CONTENT...</div>
        </div>
      </div>
    
    */
    }
    </div>
  )
}

const MenuList = ({name}) => {
  return(
    <li> <a>{name}</a> </li>
  )
}