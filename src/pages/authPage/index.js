import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authFuncAC } from "../../store/actions";

export default function AuthPage() {
  const dispatch = useDispatch();
  const errorAuth = useSelector(state => state.errorAuth);

  const [inputs, setInputs] = useState({
    login: "",
    password: ""
  });

  const updateInputs = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const logIn = e => {
    e.preventDefault();
    dispatch(authFuncAC(inputs));
  };

  return (
    <div className="form">
      <h2> AuthPage </h2>

      <form onSubmit={logIn}>
        <div className="form__input">
          <label>Login</label>
          <input
            onChange={updateInputs}
            value={inputs.login}
            name="login"
            type="text"
          />
          {errorAuth.login && <span>{errorAuth.login}</span>}
        </div>

        <div className="form__input">
          <label>Password</label>
          <input
            onChange={updateInputs}
            value={inputs.password}
            name="password"
            type="password"
          />
          {errorAuth.password && <span>{errorAuth.password}</span>}
        </div>

        <button className="form__btn">Войти</button>
      </form>
    </div>
  );
}
