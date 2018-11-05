import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from './TodoList';
import { TodoInput } from './TodoInput';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoInput></TodoInput>
        <TodoList></TodoList>
      </div>
    );
  }
}

export default App;
