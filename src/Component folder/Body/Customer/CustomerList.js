import React, { Component } from 'react'
import { customer } from '../../../Data/Customer'
import CustomerTable from './CustomerTable'

class CustomerList extends Component {
        render() {
            return (
                <div >
                    <h3 style={{padding:"10px"}}> Customer list</h3>
                    
                    <CustomerTable 
                        key={customer.id}
                        customer={customer.customer}
                    />
                </div>
            )
        }
    }

export default CustomerList