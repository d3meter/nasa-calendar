import React, { useState, useEffect } from "react";
import "./css/Favorites.css"
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Favorites() {
  const [logState, setLogState] = useState("logged out");

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogState(`logged in`);
      } else {
        setLogState(`logged out`);
      }
    });
  }, []);

  return (
    <div className='Favorites'>
      {logState === "logged in" ? (
        <div>favorites</div>
      ) : (
        <div>Sorry...you need to login first.</div>
      )}
    </div>
  )
}

export default Favorites