import React, { Component } from 'react'
import { Home, Login, UserPage, Register, Update } from "../pages"

export default class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [{
                platNomor: "RI 1",
                totalBiaya: "---"

            }]
        }
    }
    //
    loginTrigger = (existUser) => {

        if (existUser.username === "admin" && existUser.password === "1234") {
            this.props.contentParam("userPage")
        } else {
            alert("ID or Password Invalid!!")
        }
    }

    regisTrigger = async (newKendaraan) => {
        let now = new Date().getTime()
        //

        let today = new Date();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        let sec = now / 1000
        const newData = this.state.data;
        newData.push(newKendaraan);

        this.setState({
            data: newData,

        })
        for (let index = 0; index < this.state.data.length; index++) {
            this.state.data[this.state.data.length - 1].waktuMasuk = sec;
            this.state.data[this.state.data.length - 1].masuk = time
        }

        this.props.contentParam("userPage")

    }
    hitungBiaya = (indexz) => {
        let waktu = new Date().getTime()
        let sec = waktu / 1000
        this.state.data[indexz].waktuKeluar = sec;
        let waktuParkir = this.state.data[indexz].waktuKeluar - this.state.data[indexz].waktuMasuk
        let waktuParkirMurni = 0

        if (waktuParkir <= 5) {
            waktuParkirMurni = 0
        } else if (waktuParkir > 5) {
            waktuParkirMurni = waktuParkir - 5
        }

        let baseTarif = 0
        let keliaptanTarif = 0
        if (this.state.data[indexz].tipe === "mobil") {
            baseTarif = 4000
            keliaptanTarif = 2000
        } else {
            baseTarif = 2000
            keliaptanTarif = 1000
        }


        let biayaParkir = baseTarif + (waktuParkirMurni * keliaptanTarif)
        let bulat = Math.ceil(biayaParkir)
        let ribu = Math.round(bulat / 1000) * 1000
        this.state.data[indexz].totalBiaya = ribu


        let newData = this.state.data
        console.log(biayaParkir)

        this.setState({
            data: newData
        })
        this.props.contentParam("userPage")
    }



    changeContentToRegis = () => {
        this.props.contentParam("regisPage")
    }

    //
    render() {
        if (this.props.menuu === "userPage") {
            return (
                <UserPage
                    datas={this.state.data}
                    regisPage={this.changeContentToRegis}
                    indexToUpdate={this.changeContentToUpdate}
                    hitungBiaya={this.hitungBiaya}
                />
            )
        } else if (this.props.menuu === "updatePage") {
            return (
                <Update updateTriggerForm={this.updateTrigger}
                    usernameValue={this.state.data[this.state.index].username}
                    passwordValue={this.state.data[this.state.index].password}
                    cityValue={this.state.data[this.state.index].city} />
            )
        } else if (this.props.menuu === "regisPage") {
            return (
                <Register regisTriggerForm={this.regisTrigger} />
            )
        } else if (this.props.menuu === "home") {
            return (
                <Home />
            )
        } else if (this.props.menuu === "login") {
            return (
                <Login loginTriggerForm={this.loginTrigger} />
            )
        } else {
            return (
                <Home />
            )
        }

    }
}
