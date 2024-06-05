import React from 'react';
import Image from '../Images/piza2.avif';
import Image2 from '../Images/veg.avif';
import Image3 from '../Images/hot-biryani.jpg';
import Appbar from './Appbar';

const Home = () => {
    return (
        <div>
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

export default Home