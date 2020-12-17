import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD1i2el7AZSTKFzNJ14Oh1HXKlj7vKSN4k",
  authDomain: "smn-react.firebaseapp.com",
  projectId: "smn-react",
  storageBucket: "smn-react.appspot.com",
  messagingSenderId: "138396078243",
  appId: "1:138396078243:web:120ae3ee13196a6ce4ef16"
};

firebase.initializeApp(firebaseConfig);

export default firebase;