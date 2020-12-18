import React from "react";
import "./style.css";
//import db from "./init-firebase";

import DeckBuilder from './DeckBuilder'
import Login from './Login'

export default function App() {
  const [userId, setUserId] = React.useState('')

  console.log(userId);

 // let db_user = db.collection("users")

/*
  function add() {
    db.collection("users").add({
        first: "Ada",
        last: "Lovelace",
        born: 1815
    })
    .then(function(docRef) { console.log("Document written with ID: ", docRef.id); })
    .catch(function(error) { console.error("Error adding document: ", error); });
  }

  function del() {
    let query = db.collection('users').where('first','==','Ada');
    query.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        doc.ref.delete();
      });
    })
  }

  function get() {
    var userRef = db.collection("users").doc("szfSqyzt1CmdzqEwSoUA");
    userRef.get().then(function(doc) {
      if (doc.exists) { console.log("Document data:", doc.data()); } 
      else { console.log("No such document!"); }
    })

    var cardRef = db.collection("cards").where("name", "==", "rat")
    cardRef.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        console.log("Document data:", doc.data());  
      })
    })
  }

*/
  return (
    <div className="container">
      { 
        (userId)?
          <DeckBuilder />:
          <Login setUserId={setUserId}/> 
      }
      {
/*
      <button className="btn btn-success" onClick={() => {
        add()
      }}>Add New Data</button>
      <button className="btn btn-danger" onClick={() => {
        del()
      }}>Delete Data</button>
      <button className="btn btn-warning" onClick={() => {
        get()
      }}>Get Data</button>
*/
      }

    </div>
  );
}
