import React, { Component } from 'react'

export default class CP extends Component {
    render() {
        return (
            <div onClick={this.props.fn}>
                sukses
            </div>
        )
    }
}
