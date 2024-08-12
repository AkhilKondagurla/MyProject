import React from 'react'
import logo from '../Images/food-munch-img.png'
import logo1 from '../Images/hen.jpg'


const Navbar = () => {
    return (
        <div>
            <div className='container-fluid'>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            <img
                                src={logo1}
                                class="food-munch-logo"
                            />
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item">
                                    <a class="nav-link active" id="navItem1" aria-current="page" href="#wcsSectiom">Why Choose Us?</a>
                                </li>
                                <li class="nav-item">
                                    <a className="nav-link" id="navItem2" href="#">Explore Menu</a>
                                </li>
                                <li class="nav-item">
                                    <a className="nav-link" id="navItem3" href="#">Delevery & Payment</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a className="nav-link" id="navItem4" href="#">Fallow Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar