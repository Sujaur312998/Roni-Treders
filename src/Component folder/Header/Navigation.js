import React, { Component } from 'react'
import {Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink} from 'reactstrap';

class Navigation extends Component {

    constructor(){
        super();
        this.state={
            istoggle : false
        }
    }
    toggle=()=>{
        this.setState({
            isToggle: !this.state.isToggle
        })
    }


    render() {
        
        return (
            <div className='customer_form'>
                <Navbar dark color="dark" light expand="md">
                    <div className='container'>
                        <NavbarBrand  href="/">মের্সাস রনি ট্রেডার্স</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isToggle} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink  href="/home">হোম</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="/customer">গ্রাহক তালিকা</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="/tali-khata">টালি খাতা</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="/cash-memo">ক্যাশ মেমো</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="/goods-list">পণ্য তালিকা</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="/log-in">Log In</NavLink>
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