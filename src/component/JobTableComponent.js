import React, { Component } from 'react'
import { Table } from 'reactstrap';

export default class JobTableComponent extends Component {
    render() {
        return (
            <Table bordered striped>
                <thead>
                    <tr>
                        <th >ID</th>
                        <th>Catagory</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.data.map(data =>
                            <tr kay={data.id }>
                                <th scope="row" kay={data.id} >{data.id} </th>
                                <td kay={data.id}>{data.catagory}</td>
                                <td kay={data.id }>{data.description}</td>
                            </tr>
                        )
                    }
                </tbody>

            </Table>
        )
    }
}
