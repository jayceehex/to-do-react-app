import React, { Component } from 'react';
import './App.css';
import List from './containers/List'
import TaskAdder from './containers/TaskAdder'
import Header from './components/Header';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <TaskAdder />
        <List />
      </React.Fragment>
    );
  }
}

export default App;
