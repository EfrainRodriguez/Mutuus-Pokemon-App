import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//redux
import {Provider} from 'react-redux'
import store from './store';

//styles
import './components/custom.css'

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
          <Route exact path="/" component={Home}/>
          <Route exact path="/profile" component={PokemonProfile}/>
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
