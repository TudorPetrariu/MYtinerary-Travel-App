import React from 'react';
import MyCities from './components/Cities'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import MYtinerary from './components/MYtinerary'
import LandingPage from './components/LandingPage'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './redux/store'
import { Provider } from 'react-redux'


export class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/LogIn" component={LogIn} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/MYtinerary" component={MYtinerary} />
          <Route exact path="/Cities" component={MyCities} />

        </BrowserRouter>
      </Provider>

    );
  }
}
export default App;
