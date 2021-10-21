import React, { Component } from 'react'
import RowInput from "../../components/row-input"
import { connect } from 'react-redux'
import { UserPage } from '..'
import { FirebaseContext } from "../../firebase"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            isLogin: false
        }
    }

    //magic isi value state dimana function ini diletakan
    setValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onRegisterFirebase = () => {
        const { username, password } = this.state
        this.props.firebase.createUser({
            email: username, password
        })
            .then(userCredential => {
                alert("User Created")
            })
            .catch(err => {
                alert(err.message)
            })
    }

    onLoginFirebase = () => {
        const auth = getAuth();
        const { username, password } = this.state
        signInWithEmailAndPassword(auth, username, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                this.props.history.push("/control-panel")
                // ...
            })
            .catch((err) => {
                alert(err.message)
            });
    }



    render() {
        return (
            <div className="login">
                <h3>Silakan Login</h3>
                <RowInput label="Username" type="text" name="username" onChange={this.setValue} value={this.state.username} />
                <RowInput label="Password" type="password" name="password" onChange={this.setValue} value={this.state.password} />
                <button onClick={this.onLoginFirebase}>Login with Firebase</button>
                <button onClick={this.onRegisterFirebase}>Register To Firebase</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    loginHandler: token => dispatch({ type: "LOGIN_OK", payload: token })

})

export default connect(mapStateToProps, mapDispatchToProps)(Login);