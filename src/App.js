import React, { Component } from 'react';
import './App.css';
import List from './containers/List'
import TaskAdder from './containers/TaskAdder'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <TaskAdder />
        <List />
      </React.Fragment>
    );
  }
}

export default App;
