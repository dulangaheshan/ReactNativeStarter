import React from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import Login from "./component/Auth/Login";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={Login} initial title="Login" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
