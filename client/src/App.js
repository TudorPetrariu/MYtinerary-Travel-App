import React from 'react';
import MyCities from './components/Cities'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import LandingPage from './components/LandingPage'
import { BrowserRouter, Route } from 'react-router-dom'
import Itynerary from './components/Itynerary'

import { Provider } from 'react-redux'
import store from './redux/store'

export class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/LogIn" component={LogIn} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/Cities" component={MyCities} />
          <Route exact path="/Itynerary" component={Itynerary} />

        </BrowserRouter>

      </Provider>
    );
  }
}
export default App;