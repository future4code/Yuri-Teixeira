import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../Header/Header";
import Home from "../Home/Home";
import Login from "../Login/Login";
import ErroPage from "../ErroPage/ErroPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path={"/login"}>
          <Login />
        </Route>
        <Route>
          <ErroPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
