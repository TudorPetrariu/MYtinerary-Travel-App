import React from "react";
import MyCities from "./components/Cities";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import LandingPage from "./components/LandingPage";
import Itynerary from "./components/Itynerary";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import activities from "./components/activities";
import { Provider } from "react-redux";
import store from "./redux/store";
import test from "./components/test";

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/LogIn" component={LogIn} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/Cities" component={MyCities} />
            <Route path="/activities" component={activities} />
            <Route path="/test" component={test} />
            <Route path="/:name" component={Itynerary} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
