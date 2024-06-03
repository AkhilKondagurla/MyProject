import React from 'react';
import Image from '../Images/piza2.avif';
import Image2 from '../Images/veg.avif';
import Image3 from '../Images/hot-biryani.jpg';
import Image4 from '../Images/logo2.jpg';
import { Link } from 'react-router-dom';

const Appbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <div className='logImag ms-4'>
                        <img src={Image4} alt='images' class="d-block w-100" />
                    </div>
                    <Link className="navbar-brand ms-auto" to="/login">SignIn /</Link>
                    <Link className="navbar-brand" to="/register">SignUp</Link>
                </div>
            </nav>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={Image3} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Image2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Image} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}

export default Appbar