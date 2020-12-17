const firebaseConfig = {
  apiKey: "AIzaSyD1i2el7AZSTKFzNJ14Oh1HXKlj7vKSN4k",
  authDomain: "smn-react.firebaseapp.com",
  projectId: "smn-react",
  storageBucket: "smn-react.appspot.com",
  messagingSenderId: "138396078243",
  appId: "1:138396078243:web:120ae3ee13196a6ce4ef16"
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});