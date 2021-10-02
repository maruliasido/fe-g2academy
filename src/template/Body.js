import React, { Component } from 'react'
import Navbar from './component/Navbar.js'
import Content from './component/Content.js'
import './body.css'

export default class Body extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menu: "home"
        }
    }

    changePage = page => {
        this.setState({
            menu: page
        })
    }

    render() {
        return (
            <div className="body">
                <Navbar goToPage={this.changePage} />
                <Content menu={this.state.menu} goToPage={this.changePage} />
            </div>
        )
    }
}
