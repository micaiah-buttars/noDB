import React, { Component } from 'react';
import './App.css';
import ConfidantView from './components/ConfidantView';

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
      <ConfidantView index={this.state.index}/>
      {/* component handling adding confidant to userArr */}
      </div>
    );
  }
}

export default App;
