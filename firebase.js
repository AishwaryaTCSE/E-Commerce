
// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCbKbTL3RPI2KtUvGIhc9Cu6t9KAxiGJto",
    authDomain: "ecommerce-admin-panel-b682d.firebaseapp.com",
    databaseURL: "https://ecommerce-admin-panel-b682d-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ecommerce-admin-panel-b682d",
    storageBucket: "ecommerce-admin-panel-b682d.firebasestorage.app",
    messagingSenderId: "926384347782",
    appId: "1:926384347782:web:6648d215e0a0ca1b374f07",
    measurementId: "G-P7V34ZXL2S"
  };


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { app, database, auth };
