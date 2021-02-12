import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//redux
import {Provider} from 'react-redux'
import store from './store';

//styles
import './components/custom.css'

import {Redirect} from 'react-router-dom'

//components
import Navbar from './components/Navbar'
import Home from './components/Home';
import PokemonProfile from './components/pokemon_profile/PokemonProfile';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Navbar/>
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/profile" component={PokemonProfile}/>
          <Redirect to={'/home'}/>
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
