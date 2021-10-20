
   
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAinv-xiDm-qqVY64DCCyMLcjOu79boXsg",
  authDomain: "react-firebase-auth-afa31.firebaseapp.com",
  projectId: "react-firebase-auth-afa31",
  storageBucket: "react-firebase-auth-afa31.appspot.com",
  messagingSenderId: "395680745753",
  appId: "1:395680745753:web:5fb8ec2e6537133aa29d88"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);