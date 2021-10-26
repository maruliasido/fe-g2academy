import { Component } from 'react'
import { Login, Home } from "./Screens"
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  changeText = (e) => {
    this.setState({
      text: e
    })
  }

  setLogin = status => this.setState({ isLoggedIn: status })


  render() {
    if (this.state.isLoggedin) {
      return <Home />
    } else {
      return <Login setLogin={this.setLogin} />
    }

  }
}


