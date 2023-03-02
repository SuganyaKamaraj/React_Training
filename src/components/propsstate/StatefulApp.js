import React, { Component } from 'react'

export default class StatefulApp extends Component {
    state = {

        data: [
            { 'accno': '26', 'name': 'Suganya', 'balance': '10K' },
            { 'accno': '27', 'name': 'Karthik', 'balance': '20K' },
            { 'accno': '28', 'name': 'Agila', 'balance': '30K' }
        ]
    }
    render() {
        return (
            <div className='bg-info'>

                <h3 className='bg-success text-warning'> Account Holder Details </h3>
                <table className='table table-hover table-striped'>
                    <tbody>
                        {
                            this.state.data.map((customer, index) =>
                                <TableRow key ={index} dataProp={customer} />
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
//---------------
const TableRow =(props) => {
    return(
    <tr>
        <td>{props.dataProp.accno} </td>
        <td>{props.dataProp.name} </td>
        <td>{props.dataProp.balance} </td>
    </tr>
    )
}
