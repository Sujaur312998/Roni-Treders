import {combineReducers} from 'redux'
import * as actionType from './actionType'
import {customer} from '../Data/Customer'

const CustomerReducer=(Customerstate=customer,action)=>{
    switch (action.type){
        case actionType.AddCustomer:
            return Customerstate 

        default: 
            return Customerstate
    }
}

export const Reducer=combineReducers({
    customer: CustomerReducer
})