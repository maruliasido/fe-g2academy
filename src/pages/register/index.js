import React, { Component } from 'react'
import RowInput from '../../components/row-input';

export default class UpdateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            platNomor:"",
            tipe:""
        }

    }

    setValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    regisTrigger = () => {
        const { platNomor,tipe } = this.state;
        const newKendaraan= {
            platNomor,tipe
        }
        this.props.regisTriggerForm(newKendaraan);
    }
    render() {
        return (
            <div className="regist-form">
                <h3>Masukan Nomor Kendaraan</h3>
                <RowInput label="Plat Nomor" type="text" name="platNomor" onChange={this.setValue} value={this.state.platNomor} />
                <RowInput label="Tipe Kendaraan" type="text" name="tipe" onChange={this.setValue} value={this.state.tipe} />

                <button onClick={this.regisTrigger}>Input</button>
            </div>
        )
    }
}
