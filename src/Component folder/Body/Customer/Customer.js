import React, { Component } from 'react'

import {NavLink} from 'react-router-dom'

class Customer extends Component {
    render(){
        return(
            <div className='customer'>
                    <div className='container'>
                        <ul>
                            <li><NavLink to='/customer-list'>গ্রাহকের তালিকা</NavLink></li>
                            <li> <NavLink to='/addcustomer'>নতুন গ্রাহক যুক্ত করুন</NavLink></li>
                        </ul>
                    </div>
            </div>
            
        )
    }
}
export default Customer