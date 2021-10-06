import React, { Component } from 'react'

export default class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    

    renderList = () => {
        return this.props.datas.map((data, index) => {
            return <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.platNomor}</td>
                <td>{data.tipe}</td>
                <td>{data.masuk}</td>
                {/* <td>{data.waktuMasuk}</td> */}
                <td><input type="button" name="update" onClick={() => this.props.hitungBiaya(index)} value="Stop Waktu dan Hitung" /></td>
                <td>{"Rp "+data.totalBiaya}</td>
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
                            <th>Plat Nomor</th>
                            <td>Tipe Kendaran</td>
                            <th>Jam Masuk</th>
                            <th>Stop dan Hitung Biaya</th>
                            <th>Total Biaya</th>
                        </tr>
                    </thead>
                    <tbody>{this.renderList()}</tbody>
                </table>

                <div>
                    <button className="button-add" onClick={this.props.regisPage}>Input Kendaraan Baru</button>
                </div>

            </div>
        )
    }
}
