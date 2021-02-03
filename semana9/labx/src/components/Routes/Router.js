import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../Header/Header";
import Home from "../Home/Home";
import Login from "../Login/Login";
import AllTrips from "../AllTrips/AllTrips";
import DetailTrip from '../DetailTrip/DetailTrip'
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
        <Route exact path={"/alltrips"}>
          <AllTrips />
        </Route>
        <Route exact path={"/detailtrip/:id"}>
          <DetailTrip />
        </Route>
        <Route>
          <ErroPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
