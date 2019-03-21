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
      {/* component handling card display */}
      <ViewDisplay />

      {/* component handling adding confidant to userArr */}
      </div>
    );
  }
}

export default App;
