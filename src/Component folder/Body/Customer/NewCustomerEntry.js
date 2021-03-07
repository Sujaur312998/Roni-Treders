import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Col,Button} from 'reactstrap';

class NewCustomerEntry extends Component {
    constructor(props){
        super(props)
        this.state={
            customerName:'',
            customerNickName:'',
            customerFaterName:'',
            customerFaterNickName:'',
            NID:'',
            address:'',
            phoneNum:'',
            agree: false
        }
        this.handleInputChange=this.handleInputChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }


    handleInputChange=event=>{
        const name=event.target.name
        const value= event.target.type==='check' ? event.target.checked : event.target.value

        this.setState({
            [name]: value
        })
    }

    handleSubmit=event=>{
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <div className='container'>
                
                <h3 style={{margin:'20px',textDecoration:'underline',color:'green'}}>নতুন গ্রাহক যুক্ত করুন </h3>
                
                <Form onSubmit={this.handleSubmit} style={{textAlign:'left'}}>
                    <FormGroup row style={{padding:'10px'}}>
                        <Label md={2}> <strong>গ্রাহকের নাম :</strong></Label>
                        <Col md={6}>
                            <Input  type='text' name='customerName' placeholder='Your name...'required
                                value={this.state.customerName}
                                onChange={this.handleInputChange}
                            />
                        </Col>
                        <Label md={2}><strong>গ্রাহকের ডাক নাম :</strong></Label>
                        <Col md={2}>
                            <Input  type='text'name='customerNickName' placeholder='Nick name...' 
                                value={this.state.customerNickName}
                                onChange={this.handleInputChange}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row style={{padding:'10px'}}>
                    <Label md={2}><strong>পিতার নাম :</strong> </Label>
                        <Col md={6}>
                                <Input  type='text'name='customerFaterName' placeholder='Customer Father Name...' required
                                    value={this.state.nickcustomerFaterNameName}
                                    onChange={this.handleInputChange}
                                />
                        </Col>
                        <Label md={2}><strong>পিতার ডাক নাম :</strong></Label>
                        <Col md={2}>
                            <Input  type='text'name='customerFaterNickName' placeholder='Nick name...' 
                                value={this.state.customerFaterNickName}
                                onChange={this.handleInputChange}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row style={{padding:'10px'}}>
                        <Label md={2}> <strong>ফোন নম্বার :</strong> </Label>
                        <Col md={4}>
                            <Input  type='number' name='phoneNum' placeholder='Customer Phone Number...'required
                                value={this.state.phoneNum}
                                onChange={this.handleInputChange}
                            />
                        </Col>
                        <Label md={2}><strong> NID :</strong></Label>
                        <Col md={4}>
                            <Input  type='number'name='NID' placeholder='Customer NID Number...' 
                                value={this.state.nickName}   
                                onChange={this.handleInputChange}

                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row style={{padding:'10px'}}>
                        <Label md={2}><strong>ঠিকানা :</strong>  </Label>
                        <Col md={10}>
                            <Input type='text' name='address' placeholder='Customer Address...'
                            value={this.state.address}
                            onChange={this.handleInputChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup check>
                        <Label check md={{size:10,offset:2}}>
                            <Input type='checkbox' 
                                name='agree'
                                checked={this.state.agree}
                                onChange={this.handleInputChange}
                            />
                            <strong>Are you want to share your information with us?</strong>
                        </Label>

                    </FormGroup>

                    <FormGroup row style={{padding:'10px'}} >
                        <Col md={{offset:2,size:10}}>
                            <Button type='submit' color='success'  >Submit</Button>
                        </Col>
                    </FormGroup>

                    
                </Form>
                
            </div>
        )
    }
}

export default NewCustomerEntry