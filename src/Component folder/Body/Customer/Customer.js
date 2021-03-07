import React, { Component } from 'react'
import NewCustomerEntry from'./NewCustomerEntry'
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'

class Customer extends Component {
    render(){
        let customerlist= null
        return(
            <div className='container'>
                <NewCustomerEntry />
            </div>
        )
    }
}
export default Customer