import React, { Component } from 'react'
import Navbar from './component/Navbar.js'
import Content from './component/Content.js'
import './body.css'

export default class Body extends Component {
    render() {
        return (
            <div className="body">
               <Navbar></Navbar>
               <Content></Content>
               
            </div>
        )
    }
}
