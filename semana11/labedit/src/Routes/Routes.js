import { useHistory, BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
