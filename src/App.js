import React, { Component } from 'react';
import ViewDisplay from './components/ViewDisplay'

class App extends Component {
  constructor(){
    super()

    this.state = {
      index: 0
    }
  }

  render() {
    return (
      <div className="App">
      <ViewDisplay />
      {/* component handling card display */}
      </div>
    );
  }
}

export default App;
