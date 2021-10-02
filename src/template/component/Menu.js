import React, { Component } from 'react'
import './menu.css'

export default class Menu extends Component {
    render() {
        return (
            <div 
            className="menu"
            onClick={this.props.fn}>
                {this.props.children}
            </div>
        )
    }
}
