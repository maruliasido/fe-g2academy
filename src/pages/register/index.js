import React, { Component } from 'react'
import RowInput from '../../components/row-input';

export default class UpdateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            city: ""
        }

    }

    setValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    regisTrigger = () => {
        const { username, password, city } = this.state;
        const newUser = {
            username, password, city
        }
        this.props.regisTriggerForm(newUser);
    }
    render() {
        if (this.props.toRegister === true && this.props.isLogin === true) {
            return (
                <div className="regist-form">
                    <h3>Masukan data untuk di-input</h3>
                    <RowInput label="Username" type="text" name="username" onChange={this.setValue} value={this.state.username} />
                    <RowInput label="Password" type="password" name="password" onChange={this.setValue} value={this.state.password} />
                    <RowInput label="Ulangi Password" type="password" name="password2" onChange={this.setValue} value={this.state.password} />
                    <RowInput label="City" type="text" name="city" onChange={this.setValue} value={this.state.city} />
                    <button onClick={this.regisTrigger}>Register</button>
                </div>
            )
        }
    }
}
