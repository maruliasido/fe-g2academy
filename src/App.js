import React, { Component } from 'react'
import { Navbar, Content } from "./template"
import { BrowserRouter as Router } from 'react-router-dom'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Router>
        {/* attribute di navbar untuk kasih default contentnya HOME */}
        <Navbar />
        <Content />
      </Router>
    )
  }
}

