import React from "react";
import "./css/App.css";
import Main from "./pages";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import ChoosePlan from "./pages/ChoosePlan";
import FrontPage from "./components/FrontPage/FrontPage";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Login} />
      <Route path="/choose-plan" component={ChoosePlan} />
      <Route path="/LoggedIn" component={FrontPage} />
    </Switch>
  );
}

export default App;
