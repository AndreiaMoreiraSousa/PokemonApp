import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Main from './Components/Main';
import Pokeinfo from './Components/Pokeinfo';
import FavouritePokemons from './Components/FavouritePokemons';
import './Components/style.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/pokeinfo/:id' component={Pokeinfo} />
        <Route exact path='/favouritePokemons' component={FavouritePokemons} />
      </Switch>
    </Router>
  );
}

export default App;
