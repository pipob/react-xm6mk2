import React from "react";
import "./style.css";
import db from "./init-firebase";

import DeckBuilder from './DeckBuilder'

export default function App() {
  console.log('123');

  let db_user = db.collection("users")


/*

  db.collection("users").add({
      first: "Ada",
      last: "Lovelace",
      born: 1815
  })
  .then(function(docRef) { console.log("Document written with ID: ", docRef.id); })
  .catch(function(error) { console.error("Error adding document: ", error); });
*/
  return (
    <div className="container">
      <DeckBuilder />
    </div>
  );
}
