import { Axios } from 'axios'
import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap";



const Rigister = () => {
    const [form, setForm] = useState({
        username: "",
        password: "",
        name: "",
        mobile: "",
        email: "",
        address: ""
    })
    const [message, setMessage] = useState(false)
    const [show, setShow] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.values(form).some(value => value.trim() === '')) {
            setMessage("Please fill in all fields");
            setTimeout(() => {
                setMessage(false)
            }, 2000)
            return;
        }
        try {
            const body = {
                name: form.name,
                username: form.username,
                password: form.password,
                mobile: form.mobile,
                email: form.email,
                address: form.address
            }
            const response = await Axios.post(`${process.env.REACT_APP_DBLINK}/register`, body)
            setShow(response.status === 200)
            setForm({
                username: "",
                password: "",
                name: "",
                mobile: "",
                email: "",
                address: ""
            })
            setMessage("Registered Successfully")
            setTimeout(() => {
                setMessage(false)
            }, 2000)

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='row'>
            {show?
                <div>{message}</div> :
                <div style={{ color: "red" }}>{message}</div>
            }
            <Form className='mt-5 mb-5' onSubmit={handleSubmit}>
                <div className='col-md-3 mb-3'> {/* Added mb-3 class for margin-bottom */}
                    <Form.Control type='text' name='username' placeholder='Username' className='form-control form-control-' onChange={handleChange} value={form.username} />
                </div>
                <div className='col-md-3 mb-3'> {/* Added mb-3 class for margin-bottom */}
                    <Form.Control type='text' name='password' placeholder='Password' className='form-control form-control-lg' onChange={handleChange} value={form.password} />
                </div>
                <div className='col-md-3 mb-3'> {/* Added mb-3 class for margin-bottom */}
                <Form.Group>
                    <Form.Control type='text' name='name' placeholder='Name' className='form-control form-control-lg' onChange={handleChange} value={form.name} />
                    </Form.Group>
                </div>
                <div className='col-md-3 mb-3'> {/* Added mb-3 class for margin-bottom */}
                <Form.Group>
                    <Form.Control type='text' name='mobile' placeholder='Mobile' className='form-control form-control-lg' onChange={handleChange} value={form.mobile} />
                    </Form.Group>
                </div>
                <div className='col-md-3 mb-3'> {/* Added mb-3 class for margin-bottom */}
                <Form.Group>
                    <Form.Control type='text' name='email' placeholder='Email' className='form-control form-control-lg' onChange={handleChange} value={form.email} />
                    </Form.Group>
                </div>
                <div className='col-md-3 mb-3'> {/* Added mb-3 class for margin-bottom */}

                    <Form.Group>
                    <Form.Control type='text' name='address' placeholder='Address' className='form-control form-control-lg' onChange={handleChange} value={form.address} />
                    </Form.Group>
                </div>
                <div className='col-md-3'> {/* Removed mb-3 class */}
                    {/* <input type='submit' value='Register' className='btn btn-primary btn-lg' /> Changed name to value and added btn classes */}
                    <Button type="submit">Register</Button>
                </div>
            </Form>
        </div>
    )
}

export default Rigister