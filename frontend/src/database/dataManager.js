import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { deleteDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5P7W0zfraUVzUwrSAJiL3gnx5ilbY9Bo",
  authDomain: "nasa-calendar.firebaseapp.com",
  projectId: "nasa-calendar",
  storageBucket: "nasa-calendar.appspot.com",
  messagingSenderId: "1082424051578",
  appId: "1:1082424051578:web:e16be5fc5ff99e512378c3",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export const getFavorites = async () => {
  const user = auth.currentUser;
  if (!user) {
    throw new Error("User not logged in");
  }

  const querySnapshot = await getDocs(
    collection(db, `users/${user.uid}/favorites`)
  );
  const favorites = [];
  querySnapshot.forEach((doc) => {
    const favoriteData = { id: doc.id, ...doc.data() };
    console.log(`${doc.id} => ${favoriteData}`);
    favorites.push(favoriteData);
  });
  return favorites;
};

export const addFavorite = async (data) => {
  try {
    const user = auth.currentUser;
    if (!user) {
      throw new Error("User not logged in");
    }

    const docRef = await addDoc(
      collection(db, `users/${user.uid}/favorites`),
      data
    );
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const removeFavorite = async (favoriteId) => {
  try {
    const user = auth.currentUser;
    if (!user) {
      throw new Error("User not logged in");
    }

    const favoriteRef = doc(db, `users/${user.uid}/favorites/${favoriteId}`);

    await deleteDoc(favoriteRef);
    console.log("Document deleted: ", favoriteId);
  } catch (e) {
    console.error("Error removing document: ", e);
  }
};
