import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Menu extends Component {
    render() {
        const target = this.props.target
        return (
            <Link className="menu" to={target}>
                {this.props.children}
            </Link>
        )
    }
}
