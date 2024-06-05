import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Images/logo2.jpg';
import Home from './Home';


const Appbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg nav-bgclr">
                <div class="container-fluid">
                    <div className='logImag ms-4'>
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-img.png" alt='images' class="d-block w-100" />
                    </div>
                    <Link className="navbar-brand ms-auto" to="/login">Login /</Link>
                    <Link className="navbar-brand" to="/register">Register</Link>
                </div>
            </nav>          
        </div>
    )
}

export default Appbar