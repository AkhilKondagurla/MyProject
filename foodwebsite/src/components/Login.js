import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import Otp from './otp/Otp';

const Login = () => {
    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(true)
    }

    return (
        <div>
            <div className='container'>
                < div className='login-image'>
                    <div className='d-flex flex-column align-items-center justify-content-center'>
                        <div className='row'>
                            <div className='col-lg-3 mt-3 w-100'>
                                <Form.Group>
                                    <Form.Label style={{ color: "white" }}>Name</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </div>
                            <div className='col-lg-3 mt-3 w-100'>
                                <Form.Group>
                                    <Form.Label style={{ color: "white" }}>Mobile</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </div>
                            <div className='col-lg-3 mt-5 ms-3'>
                                <Button onClick={handleShow}>GetOtp</Button>
                            </div>
                        </div>

                        <div className='hedline ms-5 mt-5'>
                            <h1 >Get Delicious, Food Anytime</h1>
                        </div>
                    </div>


                </div>

                <Otp
                    show={show}
                    setShow={setShow}
                />
            </div>

        </div>
    )
}

export default Login