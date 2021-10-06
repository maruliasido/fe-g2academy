import React, { Component } from 'react'

export default class RowInput extends Component {
    render() {
        const {label,type,name,onChange,value,onClick} = this.props
        return (
            <div className="field">
                <span className="label">{label}</span>
                <input  type={type}
                name={name}
                onChange={onChange}
                value={value}
                onClick={onClick}/>
            </div>
        )
    }
}
