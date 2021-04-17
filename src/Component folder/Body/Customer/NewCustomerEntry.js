import React, { Component } from 'react';
import { FormGroup, Label, Col, Button } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form'
import {initialCustomerForm } from '../../../Redux/Forms'



const required = val => val && val.length
const isNumber = val => !isNaN(Number(val))
class NewCustomerEntry extends Component {
    handleSubmit = value => {
        console.log(value);
    }

    render() {
        return (
            <div className='container'>

                <h3 style={{ margin: '20px', textDecoration: 'underline', color: 'green' }}>নতুন গ্রাহক যুক্ত করুন </h3>

                <LocalForm onSubmit={value => this.handleSubmit(value)} style={{ textAlign: 'left' }}>
                    <FormGroup row style={{ padding: '8px' }}>
                        <Label md={2}> <strong>গ্রাহকের নাম :</strong></Label>
                        <Col md={6}>
                            <Control.text
                                model='.customerName'
                                name='customerName'
                                placeholder='Your name...'
                                className="form-control"
                                validators={{
                                    required
                                }}
                            />
                            <Errors style={{ fontSize: '10px'}}
                                className="text-danger"
                                model=".customerName"
                                show="touched"
                                messages={
                                    {
                                        required: "Required *"
                                    }
                                }
                            />
                        </Col>
                        <Label md={2}><strong>গ্রাহকের ডাক নাম :</strong></Label>
                        <Col md={2}>
                            <Control.text
                                model='.customerNickName'
                                name='customerNickName'
                                placeholder='Nick name...'
                                className="form-control"
                                validators={{
                                    required
                                }}
                            />
                            <Errors style={{ fontSize: '10px'}}
                                className="text-danger"
                                model=".customerNickName"
                                show="touched"
                                messages={
                                    {
                                        required: "Required *"
                                    }
                                }
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row style={{ padding: '10px' }}>
                        <Label md={2}><strong>পিতার নাম :</strong> </Label>
                        <Col md={6}>
                            <Control.text
                                model='.customerFaterName'
                                name='customerFaterName'
                                placeholder='Customer Father Name...'
                                className="form-control"
                                validators={{
                                    required
                                }}
                            />
                            <Errors style={{ fontSize: '10px'}}
                                className="text-danger"
                                model=".customerFaterName"
                                show="touched"
                                messages={
                                    {
                                        required: "Required *"
                                    }
                                }
                            />
                        </Col>
                        <Label md={2}><strong>পিতার ডাক নাম :</strong></Label>
                        <Col md={2}>
                            <Control.text
                                model='.customerFatherNickName'
                                name='customerFatherNickName'
                                placeholder='Nick name...'
                                className="form-control"
                                validators={{
                                    required
                                }}
                            />
                            <Errors style={{ fontSize: '10px'}}
                                className="text-danger"
                                model=".customerFatherNickName"
                                show="touched"
                                messages={
                                    {
                                        required: "Required *"
                                    }
                                }
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row style={{ padding: '10px' }}>
                        <Label md={2}> <strong>ফোন নম্বার :</strong> </Label>
                        <Col md={4}>
                            <Control.text
                                model=".phoneNum"
                                name='phoneNum'
                                placeholder='Customer Phone Number...'
                                className="form-control"
                                validators={{
                                    isNumber,required
                                }}
                            />
                            <Errors style={{ fontSize: '10px'}}
                                className="text-danger"
                                model=".phoneNum"
                                show="touched"
                                messages={
                                    {
                                        required: "Required *",
                                        isNumber: "Customer Phone Number "
                                    }
                                }
                            />
                        </Col>
                        <Label md={2}><strong> NID :</strong></Label>
                        <Col md={4}>
                            <Control.text
                                model='.NIDnumber'
                                name='NID'
                                placeholder='Customer NID Number...'
                                className="form-control"
                                validators={{
                                    isNumber,required
                                }}
                            />
                            <Errors style={{ fontSize: '10px'}}
                                className="text-danger"
                                model=".NIDnumber"
                                show="touched"
                                messages={
                                    {
                                        required: "Required *",
                                        isNumber: "Customer NID Card Number "
                                    }
                                }
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row style={{ padding: '10px' }}>
                        <Label md={2}><strong>ঠিকানা :</strong>  </Label>
                        <Col md={10}>
                            <Control.text
                                model='.address'
                                name='address'
                                placeholder='Customer Address...'
                                className="form-control"
                                validators={{
                                    required
                                }}
                            />
                            <Errors style={{ fontSize: '10px'}}
                                className="text-danger"
                                model=".address"
                                show="touched"
                                messages={
                                    {
                                        required: "Required *",
                                    }
                                }
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup check>
                        <Label check md={{ size: 10, offset: 2 }}>
                            <Control.checkbox
                                model='.agree'
                                name='agree'
                            />
                            <strong>Are you want to share your information with us?</strong>
                        </Label>

                    </FormGroup>

                    <FormGroup row style={{ padding: '10px' }} >
                        <Col md={{ offset: 2, size: 10 }}>
                            <Button type='submit' color='success'  >Submit</Button>
                        </Col>
                    </FormGroup>


                </LocalForm>

            </div>
        )
    }
}

export default NewCustomerEntry