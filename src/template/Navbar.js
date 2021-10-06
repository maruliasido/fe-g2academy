import React, { Component } from 'react'
import Menu from "../components/menu"
import "../app.css"

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="navbar">
                <Menu onClickFromChildren={() => this.props.contentParam("home")}>Home</Menu>
                <Menu onClickFromChildren={() => this.props.contentParam("login")}>Login</Menu>
            </div>
        )
    }
}
