import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
 apiKey: "AIzaSyB5P7W0zfraUVzUwrSAJiL3gnx5ilbY9Bo",
 authDomain: "nasa-calendar.firebaseapp.com",
 projectId: "nasa-calendar",
 storageBucket: "nasa-calendar.appspot.com",
 messagingSenderId: "1082424051578",
 appId: "1:1082424051578:web:e16be5fc5ff99e512378c3"
};

initializeApp(firebaseConfig);
const auth = getAuth();

export const login = function (email, password) {
 return signInWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
     const user = userCredential.user;
     console.log(user);
     return user;
   })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     console.log(errorCode, errorMessage);
     throw error;
   });
};

export const registration = function (email, password) {
 return createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
     const user = userCredential.user;
     console.log(user);
     return user;
   })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     console.log(errorCode, errorMessage);
     throw error;
   });
};

export const logOut = async function () {
 await signOut(auth);
};