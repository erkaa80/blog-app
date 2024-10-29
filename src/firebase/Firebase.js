import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8H770oZH6N_HafzqBYB2HPl1BBh-vIEg",
  authDomain: "blog-app-61610.firebaseapp.com",
  projectId: "blog-app-61610",
  storageBucket: "blog-app-61610.appspot.com",
  messagingSenderId: "471790230462",
  appId: "1:471790230462:web:9f0eede9c6ebba9d05b7ef",
  measurementId: "G-3PYYPVDJLK",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const signUpFunction = (firstName, lastName, email, password) => {
  return createUserWithEmailAndPassword(auth, email, password).then(() => {
    return updateProfile(auth.currentUser, {
      displayName: `${firstName} ${lastName}`,
    });
  });
};

export const signInFunction = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signOutFunction = () => {
  return signOut(auth);
};
