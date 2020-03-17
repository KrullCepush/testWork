import React from "react";
import { useDispatch } from "react-redux";
import { logOutFunctionAC } from "../../store/actions";

export default function MainPage() {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logOutFunctionAC());
  };

  return (
    <div>
      <h2> Hello World! </h2>
      <p> Все как бы работает, но надо тестить </p>
      <button onClick={logOut}> Выйти </button>
    </div>
  );
}
