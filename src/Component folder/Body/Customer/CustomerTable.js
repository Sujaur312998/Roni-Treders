import React, { Component } from 'react'
import { Table } from 'reactstrap'
class CustomerTable extends Component {

    render() {
        //console.log(this.props)
        return (
            <div className="container" >
                <Table dark hover striped >
                    <thead >
                        <tr>
                            <td>#ID </td>
                            <td>গ্রাহকের নাম </td>
                            <td>গ্রাহকের পিতার নাম </td>
                            <td>গ্রাহকের ফোন নম্বার</td>
                            <td>গ্রাহকের NID নম্বার</td>
                            <td>গ্রাহকের ঠিকানা </td>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            this.props.customer.map((customers, index) => {
                                //console.log(customers);
                                return (
                                    <tr key={index}>
                                        <td> {index + 1} </td>
                                        <td> {customers.customer_name} </td>
                                        <td> {customers.customer_FatherName} </td>
                                        <td> {customers.Phone_No} </td>
                                        <td> {customers.NID}</td>
                                        <td> {customers.village}</td>
                                    </tr>)

                            })
                        }



                    </tbody>



                </Table>
            </div>
        )
    }
}

export default CustomerTable