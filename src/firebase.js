import { initializeApp } from "firebase";

const app = initializeApp({
  apiKey: "AIzaSyDVJUXLeSeTKxb6a-My3Li_rCtIxC6N1aI",
  authDomain: "britecore-395e0.firebaseapp.com",
  databaseURL: "https://britecore-395e0.firebaseio.com",
  projectId: "britecore-395e0",
  storageBucket: "britecore-395e0.appspot.com",
  messagingSenderId: "290617707530"
});

export const db = app.database();
export const briteCoreRef = db.ref();