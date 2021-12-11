import * as firebase from "firebase/app"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxvgV6C3ZsrFalEjZlR90yshSg-Clt_68",
  authDomain: "awesome-todo-e586d.firebaseapp.com",
  databaseURL: "https://awesome-todo-e586d-default-rtdb.firebaseio.com",
  projectId: "awesome-todo-e586d",
  storageBucket: "awesome-todo-e586d.appspot.com",
  messagingSenderId: "61852000795",
  appId: "1:61852000795:web:b457a752ddbb7027960ebe",
  measurementId: "G-P1QQWEN1E9"
};

// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = getAuth();
const firebaseAuth = firebaseApp.auth

export { firebaseAuth }
