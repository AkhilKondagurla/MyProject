import React, { useState } from 'react'
import Img1 from "../Images/food-serve.png"
import Img2 from "../Images/fruits-img.png"
import Img3 from "../Images/offers-img.png"
import ExpImg1 from "../Images/em-ginger-fried-img.png"
import ExpImg2 from "../Images/em-veg-starters-img.png"
import ExpImg3 from "../Images/em-soup-img.png"
import ExpImg4 from "../Images/em-grilled-seafood-img.png"
import ExpImg5 from "../Images/em-hyderabadi-biryani-img.png"
import ExpImg6 from "../Images/em-mushroom-noodles-img.png"
import ExpImg7 from "../Images/em-gluten-img.png"
import ExpImg8 from "../Images/em-coffee-bourbon-img.png"
import logo1 from '../Images/hen.jpg'
const Restaurants = () => {
    return (
        <div className='container-fluid'>
            <div className='banner-section-bg d-flex flex-column justify-content-center'>
                <div className='text-center'>
                    <h1 className='banner-headding mb-3'>
                        Get Delicious Food Any Time
                    </h1>
                    <p className='banner-caption mb-4'>
                        Eat Smart & Healthy
                    </p>
                    <button className='custom-menu-button'>View Menu</button>
                    <button className='custom-outline-button'>Oder Now</button>
                </div>
            </div>
            <div className="wcu-section pt-5 pb-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className='wcu-section-hedding'>Why Choose Us?</h1>
                        <p className='wcu-section-description'>
                            We use both original recipes and classic versions of famous item.
                        </p>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className='wcu-card p-3 mb-3'>
                            <img src={Img1} className='wcu-section-img' />
                            <h1 className='wcu-card-title mt-3'>
                                Food service
                            </h1>
                            <p className='wcu-card-description'>
                                Experience fine dining at the comfort of your home. All our orders are carefully packed and arranged to give you the nothing less than perfect.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className='wcu-card p-3 mb-3'>
                            <img src={Img2} className='wcu-section-img' />
                            <h1 className='wcu-card-title mt-3'>
                                Fresh Food
                            </h1>
                            <p className='wcu-card-description'>
                                The Fresh Food group provides fresh-cut fruits and vegetables directly picked from our partner farms and farm houses so that you always get them tree to plate.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className='wcu-card p-3 mb-3'>
                            <img src={Img3} className='wcu-section-img' />
                            <h1 className='wcu-card-title mt-3'>
                                Best Offers
                            </h1>
                            <p className='wcu-card-description'>
                                Food Coupons & Offers upto <span className='wcu-offer'>50% OFF</span> and Exclusive Promo Codes on All Online Food Orders
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='exp-menu-section pt-5 pb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h1 className='exp-menu-headding'>Explore Menu</h1>
                        </div>
                        <div className='col-12 col-md-6 col-lg-3'>
                            <div className='shadow menu-item-card p-3 mb-3'>
                                <img src={ExpImg1} className='menu-item-image w-100' />
                                <h1 className='menu-card-title'>Non-veg Starters</h1>
                                <a href='#' className='menu-item-link'>View All
                                    <i class="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-3'>
                            <div className='shadow menu-item-card p-3 mb-3'>
                                <img src={ExpImg2} className='menu-item-image w-100' />
                                <h1 className='menu-card-title'>Veg Starters</h1>
                                <a href='#' className='menu-item-link'>View All
                                    <i class="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-3'>
                            <div className='shadow menu-item-card p-3 mb-3'>
                                <img src={ExpImg3} className='menu-item-image w-100' />
                                <h1 className='menu-card-title'>Soup</h1>
                                <a href='#' className='menu-item-link'>View All
                                    <i class="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-3'>
                            <div className='shadow menu-item-card p-3 mb-3'>
                                <img src={ExpImg4} className='menu-item-image w-100' />
                                <h1 className='menu-card-title'>Fish & sea Food</h1>
                                <a href='#' className='menu-item-link'>View All
                                    <i class="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-3'>
                            <div className='shadow menu-item-card p-3 mb-3'>
                                <img src={ExpImg5} className='menu-item-image w-100' />
                                <h1 className='menu-card-title'>Main Course</h1>
                                <a href='#' className='menu-item-link'>View All
                                    <i class="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-3'>
                            <div className='shadow menu-item-card p-3 mb-3'>
                                <img src={ExpImg6} className='menu-item-image w-100' />
                                <h1 className='menu-card-title'>Noodles</h1>
                                <a href='#' className='menu-item-link'>View All
                                    <i class="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-3'>
                            <div className='shadow menu-item-card p-3 mb-3'>
                                <img src={ExpImg7} className='menu-item-image w-100' />
                                <h1 className='menu-card-title'>Salad</h1>
                                <a href='#' className='menu-item-link'>View All
                                    <i class="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-3'>
                            <div className='shadow menu-item-card p-3 mb-3'>
                                <img src={ExpImg8} className='menu-item-image w-100' />
                                <h1 className='menu-card-title'>Desserts</h1>
                                <a href='#' className='menu-item-link'>View All
                                    <i class="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="healthy-food-section pt-5 pb-5">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-5">
                            <div class="text-center">
                                <img
                                    src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/healthy-food-plate-img.png"
                                    class="healthy-food-section-img"
                                />
                            </div>
                        </div>
                        <div class="col-12 col-md-7">
                            <h1 class="healthy-food-section-heading">
                                Fresh, Healthy, Organic, Delicious Fruits
                            </h1>
                            <p class="healthy-food-section-description">
                                Say no to harmful chemicals and go fully organic with our range of
                                fresh fruits and veggies. Pamper your body and your senses with
                                the true and unadulterated gifts from mother nature. with the true
                                and unadulterated gifts from mother nature.
                            </p>
                            <button class="custom-button">Watch Video</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="delivery-and-payment-section pt-5 pb-5">
                <div class="container d-flex">
                    <div class="row">
                        <div class="col-12 col-md-5 order-1 order-md-2">
                            <div class="text-center">
                                <img
                                    src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/delivery-payment-section-img.png"
                                    alt=""
                                    class="delivery-and-payment-section-img"
                                />
                            </div>
                        </div>
                        <div class="col-12 col-md-7 order-2 order-md-1">
                            <h1 class="delivery-and-payment-section-heading">
                                Delivery and Payment
                            </h1>
                            <p class="delivery-and-payment-section-description">
                                Enjoy hassle-free payment with the plenitude of payment options
                                available for you. Get live tracking and locate your food on a
                                live map. It's quite a sight to see your food arrive to your door.
                                Plus, you get a 5% discount on every order every time you pay
                                online.
                            </p>
                            <button class="custom-button">Order Now</button>
                            <div class="mt-3">
                                <img
                                    src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/visa-card-img.png"
                                    class="payment-card-img"
                                />
                                <img
                                    src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/master-card-img.png"
                                    class="payment-card-img"
                                />
                                <img
                                    src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/paypal-card-img.png"
                                    class="payment-card-img"
                                />
                                <img
                                    src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/american-express-img.png"
                                    class="payment-card-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="thanking-customers-section pt-5 pb-5 linear-gradiant-background">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-7 d-flex flex-column justify-content-center">
                            <h1 class="thanking-customers-section-heading">
                                Thank you for being a valuable customer to us.
                            </h1>
                            <p class="thanking-customers-section-description">
                                We have a surprise gift for you
                            </p>
                            <img
                                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png"
                                class="thanking-customers-section-img d-md-none"
                            />
                            <div>
                                <button class="custom-button" data-bs-toggle="modal" data-bs-target="#exampleModal">Redeem Gift</button>
                            </div>
                        </div>
                        <div class="col-12 col-md-5 d-none d-md-block">
                            <img
                                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png"
                                class="thanking-customers-section-img "
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="follow-us-section pt-5 pb-5">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h1 class="follow-us-section-heading">Follow Us</h1>
                            <div className='d-flex flex-row justify-content-center'>
                                <div className='follow-us-icon-container'>
                                    <i class="fa-brands fa-twitter icon"></i>
                                </div>
                                <div className='follow-us-icon-container'>
                                    <i class="fa-brands fa-facebook icon"></i>
                                </div>
                                <div className='follow-us-icon-container'>
                                    <i class="fa-brands fa-linkedin icon"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-section pt-5 pb-5">
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center">
                            <img src={logo1} class="food-munch-logo" />
                            <h1 class="footer-section-mail-id">akhilKondagurla9666@gmail.com</h1>
                            <p class="footer-section-address">
                                1-83, Buyyaram, (Jilleda Rode)-chowrasta, Vemanpelli, Mancherial, Telangana - 504219
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog mt-5">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title thanking-selection-model-title" id="exampleModalLabel">Gift Vocher</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <img
                                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/gift-voucher-img.png"
                                class="w-100"
                            />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Restaurants