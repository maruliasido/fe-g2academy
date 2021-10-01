import React, { Component } from 'react'
import Body from './template/Body.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div style={{backgroundImage: `url(img/background.jpg")`}}>
        <Body/>
      </div>
    );
  }

}

export default App;