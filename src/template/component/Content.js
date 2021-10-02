import React, { Component } from 'react'
import "./content.css"

export default class Content extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            masuk: ''
        }
    }
    updateUsername = (e) => {
        this.setState({
            [e.target.name]: e.target.value

        })
    }

    login = () => {
        console.log('aaa');
        if (this.state.username === 'admin' && this.state.password === "1234") {
            this.setState({
                masuk: 'sukses'
            })
        } else {
            this.setState({
                masuk: 'gagal'
            })
        }
    }

    render() {
        console.log(this.props.menu);

        if (this.state.masuk === 'sukses') {
            return (
                <div class="content">
                    Sukses login
                </div>
            )
        } else if (this.state.masuk === 'gagal') {

            return (alert("id/password salah"))
        }else if (this.props.menu === 'home') {
            return (
                <div className='content'>
                    Ini adalah Home Page
                </div>
            )
        } else if (this.props.menu === 'login') {
            return (
                <div className='content'>

                    <form className='form'>
                        <div>
                            <span>Username</span>
                            <input type="text" name="username" onChange={this.updateUsername} />
                        </div>
                        <div>
                            <span>Password</span>
                            <input type="password" name="password" onChange={this.updateUsername} />
                        </div>
                        <div>
                            <input type="button" value="submit" onClick={this.login} />
                        </div>
                    </form>
                </div>
            )
        }
    }
}
