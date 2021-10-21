import React, { Component } from 'react'

export default class index extends Component {
    constructor(props) {
        super(props)
    }
    renderList = () => {
        return this.props.datas.map((data, index) => {
            return <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.username}</td>
                <td>{data.address.city}</td>
            </tr>
        })
    }

    render() {
        return (
            <div>
                <table className="table-user">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Username</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>{this.renderList()}</tbody>
                </table>
            </div>
        )
    }
}
