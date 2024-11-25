import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { collection, doc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8H770oZH6N_HafzqBYB2HPl1BBh-vIEg",
  authDomain: "blog-app-61610.firebaseapp.com",
  projectId: "blog-app-61610",
  storageBucket: "blog-app-61610.firebasestorage.app",
  messagingSenderId: "471790230462",
  appId: "1:471790230462:web:9f0eede9c6ebba9d05b7ef",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const signUpFunction = async (firstName, lastName, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    await updateProfile(user, {
      displayName: `${firstName} ${lastName}`,
    });

    await setDoc(doc(usersCollection, user.uid), {
      displayName: user.displayName,
      email: user.email,
      phoneNumber: user.phoneNumber || "",
      photoUrl: user.photoUrl || "",
    });
  } catch (error) {
    console.error("Error signing up:", error);
  }
};

export const signInFunction = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signOutFunction = () => {
  return signOut(auth);
};

export const database = getFirestore(app);
export const usersCollection = collection(database, "users");
export const contactsCollection = collection(database, "contacts");
export const blogsCollection = collection(database, "blogs");
export const tagsCollection = collection(database, "tags");
