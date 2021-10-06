import React, { Component } from 'react'
import RowInput from "../../components/row-input"

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            city: ""
        }
    }

    //magic isi value state dimana function ini diletakan
    setValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    registTrigger = () => {
        const { username, password, address } = this.state
        const newUser = {
            username, password, address
        }
    }

    loginTrigger = () => {
        const { username, password } = this.state;
        const newUser = {
            username, password
        }
        this.props.loginTriggerForm(newUser);
        this.resetForm();

    }
    resetForm = () => {
        this.setState({
            username: "",
            password: ""
        })
    }


    render() {
        return (
            <div className="login">
                <h3>Silakan Login</h3>
                <RowInput label="Username" type="text" name="username" onChange={this.setValue} value={this.state.username} />
                <RowInput label="Password" type="password" name="password" onChange={this.setValue} value={this.state.password} />
                <button onClick={this.loginTrigger}>Login</button>
            </div>
        )
    }
}
