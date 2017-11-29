import React, { Component } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <Header />
        <TodoList />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
