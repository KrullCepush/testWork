import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";

import AuthPage from "./pages/authPage";
import MainPage from "./pages/mainPaige";

import { useSelector } from "react-redux";

function App() {
  const location = useLocation();
  const loggedIn = useSelector(state => state.authStatus);

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            {loggedIn ? <Redirect to="/home" /> : <AuthPage />}
          </Route>
          <Route exact path="/home">
            {!loggedIn ? <Redirect to="/" /> : <MainPage />}
          </Route>
        </Switch>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
