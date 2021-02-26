import { useHistory, BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home";
import DetailsPost from '../Pages/DetailsPost/DetailsPost'

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
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/detailspost/:id">
          <DetailsPost />
        </Route>
        <Route>
          <div>Error 404 - Page not found</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
