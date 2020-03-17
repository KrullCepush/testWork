import React from "react";
import { Formik, Field, Form } from "formik";
import clsx from "clsx";

import FormSchema from "../../utils/FormSchema";

import { useSelector, useDispatch } from "react-redux";
import { authFuncAC } from "../../store/actions";
import "./index.css";

export default function AuthPage() {
  const dispatch = useDispatch();
  const errorAuth = useSelector(state => state.errorAuth);

  const logIn = data => {
    dispatch(authFuncAC(data));
  };

  return (
    <div className="form">
      <h2 className="form__title"> AuthPage </h2>

      <Formik
        initialValues={{
          login: "",
          password: ""
        }}
        validationSchema={FormSchema}
        onSubmit={values => logIn(values)}
        render={({ errors, touched }) => (
          <Form>
            <div className="form__input">
              <label htmlFor="login"> Login </label>
              <Field
                name="login"
                type="text"
                className={clsx(errorAuth.login && "form__input_error")}
              />
              <div className="form__input_text">
                {(touched.login && errors.login) || errorAuth.login}
              </div>
            </div>

            <div className="form__input">
              <label htmlFor="password"> password </label>
              <Field
                name="password"
                type="password"
                className={clsx(errorAuth.password && "form__input_error")}
              />
              <div className="form__input_text">
                {(touched.password && errors.password) || errorAuth.password}
              </div>
            </div>

            <button type="submit" className="form__btn">
              login
            </button>
          </Form>
        )}
      />
    </div>
  );
}
