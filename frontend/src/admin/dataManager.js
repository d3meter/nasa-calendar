import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5P7W0zfraUVzUwrSAJiL3gnx5ilbY9Bo",
  authDomain: "nasa-calendar.firebaseapp.com",
  projectId: "nasa-calendar",
  storageBucket: "nasa-calendar.appspot.com",
  messagingSenderId: "1082424051578",
  appId: "1:1082424051578:web:e16be5fc5ff99e512378c3"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const getDataNasa = async () => {
  const querySnapshot = await getDocs(collection(db, "dataNasa"));
  const dataNasa = [];
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    dataNasa.push(doc.data());
  });
  return dataNasa;
};

export const addDataNasa = async () => {
  try {
    const docRef = await addDoc(collection(db, "dataNasa"), {
/*      first: "Ada",
     last: "Lovelace",
     born: 1815 */
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
