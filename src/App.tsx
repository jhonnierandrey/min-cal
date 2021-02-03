import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {Display} from './components';

class App extends Component {
  state = {
    total : null,
    next: null,
    operation: null,
  }

  render() {
    return (
      <div className="component-app">
        <Display value={this.state.next || this.state.total || '0'} />
      </div>
    );
  }
}

export default App;
