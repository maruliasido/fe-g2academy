import React, { Component } from 'react'
import { Text, StyleSheet, ImageBackground, View, TextInput, Alert } from 'react-native'
import { Button } from 'react-native-elements';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      passowrd: ""
    }
  }

  changeText = (e) => {
    this.setState({
      text: e
    })
  }

  buttonLoginPressed = () => {
    const { username, password } = this.state
    if (username === "admin" && password === "admin") {
      Alert.alert("Information", "Login Success!!")
      return this.props.setLogin(true)
    }

    return Alert.alert("Warning", "Invalid username/password!!")
  }



  render() {
    return (
      <ImageBackground style={styles.img} source={require("..//Assets//Images//form.jpg")} >
        <View style={styles.mainContainer}>
          <Text style={stylesBody.head}>Silakan Login</Text>
          <TextInput
            style={stylesBody.input}
            placeholder={"Masukan Nama"}
            onChangeText={this.changeText}
            value={this.state.username} />
          <TextInput
            style={stylesBody.input}
            placeholder={"Masukan Password"}
            onChangeText={this.changeText}
            value={this.state.password} />
          <Button
            title={"Masuk"}
            buttonStyle={stylesBody.button}
            onPress={this.buttonLoginPressed} />
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  img: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },

})

const stylesBody = StyleSheet.create({
  head: {
    fontSize: 30,
  },
  input: {
    width: "80%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: "gray",
    padding: 5
  },
})


