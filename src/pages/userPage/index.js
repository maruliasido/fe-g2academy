import React, { Component } from 'react'
import { connect } from 'react-redux'
import { decodeToken } from "react-jwt";
import { Home } from '..';
import { Redirect } from 'react-router';

class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogins: false,
            token: "",
            data: []
        }
    }
    //
    // generateList = () => {
    //     const totalData = this.props.datas.length;
    //     const currentPage;
    //     if (this.state.currentPage > 0) {
    //         currentPage = this.state.currentPage;
    //     } else {
    //         currentPage = 1;
    //     }

    //     let startNo = (currentPage -1 ) * this.state.dataPerPage;
    //     const endNo = currentPage * this.state.dataPerPage

    //     const dataSelected = this.props.datas.slice(startNo,endNo);
    // }

    // generatePagination = (totalData,dataPerPage,currentPage) =>{
    //     const
    // }


    renderList = () => {
        return this.state.data((data, index) => {
            return <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.username}</td>
                <td>{data.city}</td>
                <td><input type="button" name="details" value="Detail" /></td>
                <td><input type="button" name="update" onClick={() => this.toUpdate(index)} value="Update" /></td>
                <td><input type="button" name="delete" onClick={() => this.props.indexToDelete(index)} value="Delete" /></td>
            </tr>
        })
    }

    decodingJwt = (someToken) => {
        let string = decodeToken(someToken)
        console.log("tokenjwt", string + this.props.isLogins.toString())
        console.log(string);
        return string.sub
    }


    async componentDidMount() {
        await this.setState({
            isLogins: this.props.isLogin,
            token: this.props.tokens
        })

        //    await fetch('http://localhost:8080/api/user')
        //         .then(response => response.json())
        //         .then(json => this.setState({
        //             data:json
        //         }))
    }

    render() {
        if (this.props.isLogins === false) {
            return <Home />
        } else {
            return (
                <div>
                    <h1>Hello {this.decodingJwt(this.props.tokens)} </h1>
                    <table className="table-user">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Username</th>
                                <th>City</th>
                                <th>User Details</th>
                                <th>User Update</th>
                                <th>User Delete</th>
                            </tr>
                        </thead>
                        {/* <tbody>{this.renderList()}</tbody> */}
                    </table>

                    <div>
                        <button className="button-add" >Tambah Data</button>
                        <button className="button-add" >Logout</button>
                    </div>

                </div>
            )
        }
    }
}
const mapStateToProps = state => ({
    isLogins: state.statusLogin,
    tokens: state.token
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
