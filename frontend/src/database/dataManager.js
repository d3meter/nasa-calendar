import { initializeApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
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
/*     console.log(`${doc.id} => ${JSON.stringify(favoriteData)}`); */
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

    const q = query(
      collection(db, `users/${user.uid}/favorites`),
      where("date", "==", data.date)
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      throw new Error("Favorite with the same date already exists.");
    }

    const docRef = await addDoc(
      collection(db, `users/${user.uid}/favorites`),
      data
    );
    console.log("Document written with ID: ", docRef.id);

    const updatedFavorites = await getFavorites();
    return updatedFavorites;
  } catch (error) {
    throw error;
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
    const updatedFavorites = await getFavorites();
    return updatedFavorites;
  } catch (error) {
    throw error;
  }
};
