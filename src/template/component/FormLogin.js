import React, { Component } from 'react'

export default class FormLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            masuk: ''
        }
    }
    updateUsername = (e) => {
        this.setState({
            [e.target.name]: e.target.value

        })
    }

    login = () => {
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
        return (
            <div >

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
                        <input type="button" name="password" value="submit" onClick={this.login} />
                    </div>
                </form>
            </div>
        )
    }
}
