import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RecipesList from './components/RecipesList';
import { Switch, Route, Router } from 'react-router';
import RecipeDetail from './components/RecipeDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="app-header">
          <h1>Recipes</h1>
            <Switch>
            <Route path="/detail/:id" component={RecipeDetail}></Route>
              <Route path="/" component={RecipesList}></Route>
            </Switch>
        </header>
      </div>
    );
  }
}

export default App;
