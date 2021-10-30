import React, { Component } from 'react';
import { Home, Login } from "./Screens";
import List from './Screens/List';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn:false
    }
  }

  setLogin = status => this.setState({
    isLoggedIn: status
  })

  setActiveScreen = () => {
    if (this.state.isLoggedIn) {
      return (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home">
            {props => <Home {...props} username="admin" />}
          </Stack.Screen>
          <Stack.Screen name="Calendar" component={Calendar} />
        </Stack.Navigator>
      )
    }
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="Login" >
        <Stack.Screen name="Login">
          {props => <Login {...props} setLogin={this.setLogin} />}
        </Stack.Screen>
      </Stack.Navigator>
    )
  }



  render() {
    if (this.state.isLoggedIn ===true) {
      return <List />
    } else {
      return <Login setLogin={this.setLogin} />
    }

  }
}


