import React, { Component } from 'react'
import "./content.css"

export default class Content extends Component {
    render() {
        return (
            <div className="content">
                <table id="data">
                    <thead>
                        <tr>

                            <th >Nama</th>
                            <th >Username</th>
                            <th >Email</th>
                            <th >Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Andi</td>
                            <td>Budi</td>
                            <td>budi@gmail.com</td>
                            <td>Jakarta</td>
                        </tr>
                        <tr>
                            <td>Andi</td>
                            <td>Budi</td>
                            <td>budi@gmail.com</td>
                            <td>Jakarta</td>
                        </tr>
                        <tr>
                            <td>Andi</td>
                            <td>Budi</td>
                            <td>budi@gmail.com</td>
                            <td>Jakarta</td>
                        </tr>
                        <tr>
                            <td>Andi</td>
                            <td>Budi</td>
                            <td>budi@gmail.com</td>
                            <td>Jakarta</td>
                        </tr>
                        <tr>
                            <td>Andi</td>
                            <td>Budi</td>
                            <td>budi@gmail.com</td>
                            <td>Jakarta</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
