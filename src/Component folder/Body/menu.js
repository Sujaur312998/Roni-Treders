import React, { Component } from 'react'
import { connect } from 'react-redux'
import CustomerList from './Customer/CustomerList'

const mapStateToProps = state => {
    return {
        customer: state.customer
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}
class Menu extends Component {
    render() {
        return (
            <div>
                <CustomerList customer={this.props.customer}/>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu)