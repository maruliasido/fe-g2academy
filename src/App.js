import React, { Component } from 'react'
import { Navbar, Content } from "./template"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //get menuu
      menu: "home"
    }
  }

  //set
  changePage = (page) => {
    this.setState({
      menu: page
    })
  }

  render() {
    return (
      <div>
        {/* attribute di navbar untuk kasih default contentnya HOME */}
        <Navbar contentParam={this.changePage} />
        <Content menuu={this.state.menu} contentParam={this.changePage}   />
      </div>
    )
  }
}

 