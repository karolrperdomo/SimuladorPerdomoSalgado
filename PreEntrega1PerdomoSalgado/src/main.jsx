import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCDZ2SvsPmkYR7IvtXvP8_yLqPqY3Wxw6g",
  authDomain: "entrega-final-comision-49905.firebaseapp.com",
  projectId: "entrega-final-comision-49905",
  storageBucket: "entrega-final-comision-49905.appspot.com",
  messagingSenderId: "668368112267",
  appId: "1:817955764694:web:6b1d60b4cb2f084a84cc77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
