import React, { Component} from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './Home/Home'
import Customer from './Customer/Customer'
import TaliKhata from './Tali Khata/TaliKhata'
import CashMemo from './CashMemo/CashMemo'
import GoodsList from './GoodsList/GoodsList'
import Login from './Login'
import NewCustomerEntry from'./Customer/NewCustomerEntry'
import CustomerList from './Customer/CustomerList'

class Body extends Component {

    render(){
        return(
            <div>
                <Switch>
                    <Route path='/home' exact component={Home}></Route>
                    <Route path='/customer' exact component={Customer}></Route>
                    <Route path='/tali-khata' exact component={TaliKhata}></Route>
                    <Route path='/cash-memo' exact component={CashMemo}></Route>
                    <Route path='/goods-list' exact component={GoodsList}></Route>
                    <Route path='/log-in' exact component={Login}></Route>
                    <Route path='/customer-list' exact component={CustomerList}/>
                    <Route path='/addcustomer' exact component={NewCustomerEntry}/>
                </Switch>

            </div>
        )
    }
}

export default Body