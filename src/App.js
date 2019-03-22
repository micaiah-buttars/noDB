import React, { Component } from 'react';
import ViewDisplay from './components/ViewDisplay'

class App extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div className="App">
      <ViewDisplay />
      </div>
    );
  }
}

export default App;
