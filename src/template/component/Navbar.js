import React, { Component } from 'react'
import './navbar.css';
import Menu from './Menu';

export default class Navbar extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    render() {
        return (
            <div className="header">
               <Menu fn={() => this.props.goToPage("home")}>Home</Menu>
               <Menu fn={() => this.props.goToPage("login")} >Login</Menu>  
            </div>
        )
    }
}
