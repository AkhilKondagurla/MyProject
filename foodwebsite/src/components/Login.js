import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [form, setForm] = useState({
        username: "",
        password: ""
    })
    const [showPassword, setShowPassword] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='row'>
            <form className='mt-5'>
                <div className='col-md-3 mb-3'> {/* Added mb-3 class for margin-bottom */}
                    <input type='text' name='username' placeholder='Username' className='form-control form-control-' on onChange={handleChange} value={form.username} />
                </div>
                <div className='col-md-3 mb-3'> {/* Added mb-3 class for margin-bottom */}
                    <input type={showPassword ? 'text' : 'password'} name='password' placeholder='Password' className='form-control form-control-lg' onChange={handleChange} value={form.password} />
                    <button type="button" onClick={togglePasswordVisibility}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>
                <div className='col-md-3'> {/* Removed mb-3 class */}
                    <input type='submit' value='LogIn' className='btn btn-primary btn-lg' /> {/* Changed name to value and added btn classes */}
                </div>
            </form>
        </div>
    )
}

export default Login