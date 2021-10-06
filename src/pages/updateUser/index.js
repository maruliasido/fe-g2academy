import React, { Component } from 'react'
import RowInput from '../../components/row-input';

export default class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.usernameValue,
            password: this.props.passwordValue,
            city: this.props.cityValue
        }

    }

    setValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updateTrigger = () => {
        const { username, password, city } = this.state;
        const updatedUser = {
            username, password, city
        }
        this.props.updateTriggerForm(updatedUser);
    }

    render() {
        return (
            <div className="update">
                <h3>Masukan update data</h3>
                <RowInput label="Username" type="text" name="username" onChange={this.setValue} value={this.state.username} />
                <RowInput label="Password" type="password" name="password" onChange={this.setValue} value={this.state.password} />
                <RowInput label="Ulangi Password" type="password" name="password2" onChange={this.setValue} value={this.state.password} />
                <RowInput label="City" type="text" name="city" onChange={this.setValue} value={this.state.city} />
                <button onClick={this.updateTrigger}>Update</button>
            </div>
        )
    }
}