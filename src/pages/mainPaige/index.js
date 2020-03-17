import React from "react";
import { useDispatch } from "react-redux";
import { logOutFunctionAC } from "../../store/actions";
import "./index.css";

export default function MainPage() {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logOutFunctionAC());
  };

  return (
    <div className="home">
      <h2 className="home__title"> Hello World! </h2>
      <p className="home__desc"> Все как бы работает, но надо тестить </p>
      <button onClick={logOut} className="home__btn">
        Выйти
      </button>
    </div>
  );
}
