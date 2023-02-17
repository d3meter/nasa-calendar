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

const app = initializeApp(firebaseConfig);

export const login = function (email, password) {
 const auth = getAuth();
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
   });
};

export const registration = function (email, password) {
 const auth = getAuth();
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
   });
};

export const logOut = async function () {
 const auth = getAuth();
 await signOut(auth);
};