import React from "react";
import { useHistory } from "react-router-dom";

export default function MainPage() {
  const history = useHistory();

  const logOut = () => {
    localStorage.setItem("myKey", null);
    console.log(localStorage.getItem("myKey"));
    history.push("/");
  };

  return (
    <div>
      <h2> mainPage </h2>
      <button onClick={logOut}> Выйти </button>
    </div>
  );
}
