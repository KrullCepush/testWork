import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";

import AuthPage from "./pages/authPage";
import MainPage from "./pages/mainPaige";

function App() {
  const isAuth = useSelector(state => state.authStatus);

  return (
    <div>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            {isAuth ? <Redirect to="/home" /> : <AuthPage />}
          </Route>
          <Route exact path="/home">
            {!isAuth ? <Redirect to="/" /> : <MainPage />}
          </Route>
        </Switch>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
