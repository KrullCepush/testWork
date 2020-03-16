import React from "react";
import { useHistory } from "react-router-dom";

export default function AuthPage() {
  const history = useHistory();

  const logIn = () => {
    localStorage.setItem("myKey", "auth");
    console.log(localStorage.getItem("myKey"));
    history.push("/home");
  };

  return (
    <div>
      <h2> AuthPage </h2>
      <button onClick={logIn}> Войти </button>
    </div>
  );
}
