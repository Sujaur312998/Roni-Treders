import React, { Component } from 'react'
import { Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom'


class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            istoggle: false
        }
    }
    toggle = () => {
        this.setState({
            isToggle: !this.state.isToggle
        })
    }


    render() {

        return (
            <div className='customer_form'>
                <Navbar dark color="dark" light expand="md">
                    <div className='container'>
                        <NavbarBrand href="/">মের্সাস রনি ট্রেডার্স</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isToggle} navbar>
                            <Nav className="ml-auto" navbar>

                                <NavItem>
                                    <NavLink to="/home">হোম</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink to="/customer">গ্রাহক</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink to="/tali-khata">টালি খাতা</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink to="/cash-memo">ক্যাশ মেমো</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink to="/goods-list">পণ্য তালিকা</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink to="/log-in">Log In</NavLink>
                                </NavItem>

                            </Nav>
                        </Collapse>

                    </div>
                </Navbar>
            </div>
        )
    }
}

export default Navigation