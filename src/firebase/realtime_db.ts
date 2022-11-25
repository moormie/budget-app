import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDapVVPedkXhYth56JTF1wNYYioR8sJEGI",
  authDomain: "expenses-app-60690.firebaseapp.com",
  databaseURL:
    "https://expenses-app-60690-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "expenses-app-60690",
  storageBucket: "expenses-app-60690.appspot.com",
  messagingSenderId: "169660626510",
  appId: "1:169660626510:web:710aff699055c91d40751f",
  measurementId: "G-XQQE1PK1DT",
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
