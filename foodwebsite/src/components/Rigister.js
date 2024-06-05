import { Axios } from 'axios'
import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap";
import Appbar from './Appbar';
import Image3 from '../Images/food.jpeg';
import Otp from './otp/Otp';

const Rigister = () => {
    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(true)
    }

    return (
        <div>
            < div className='login-image'>
                <div className='d-flex'>
                    <div className='col-md-2 mt-3 ms-3'>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control  type='text' placeholder='Enter Name'/>
                        </Form.Group>
                    </div>
                    <div className='col-md-2 mt-3 ms-3'>
                        <Form.Group>
                            <Form.Label>Mobile</Form.Label>
                            <Form.Control type='text' placeholder='Enter mobile' />
                        </Form.Group>
                    </div>
                    <div className='col-md-2 mt-3 ms-3 ms-2'>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='text' placeholder='Enter email' />
                        </Form.Group>
                    </div>
                    <div className='col-md-2 mt-3 ms-3'>
                        <Form.Group>
                            <Form.Label>Address</Form.Label>
                            <Form.Control type='text' placeholder='Enter Address'/>
                        </Form.Group>
                    </div>
                    <div className=' mt-5 ms-3'>
                        <Button>Register</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rigister