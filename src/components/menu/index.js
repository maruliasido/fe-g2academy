import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <div className="menu" onClick={this.props.onClickFromChildren}>
                {this.props.children}
            </div>
        )
    }
}
