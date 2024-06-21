import React from 'react';
import "../components/Dewali.css"
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const Dewali = () => {
    return (
        <React.Fragment>
            <div className='dewali-top-section'>
                <h1 className='top-section-hedding'>Celabrate Dewali with your friends...</h1>
            </div>
            <div className='dewali-items-sections'>
                <div className='d-flex flex-row justify-content-center'>
                    <div className='item-card'>
                        <Image src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/lamp-img.png" className='card-item-image' />
                        <h1 className='dewali-item-name'>
                            Diwali Air Balloon
                        </h1>
                        <p className='dewali-card-price'>Rs 369</p>
                    </div>

                    <div className='item-card'>
                        <Image src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/diya-img.png" className='card-item-image' />
                        <h1 className='dewali-item-name'>
                            Diwali lamp
                        </h1>
                        <p className='dewali-card-price'>Rs 50</p>
                    </div>

                    <div className='item-card'>
                        <Image src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/firework-img.png" className='card-item-image' />
                        <h1 className='dewali-item-name'>
                            Sparklers
                        </h1>
                        <p className='dewali-card-price'>Rs 150</p>
                    </div>

                    <div className='item-card'>
                        <Image src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/firecracker-img.png" className='card-item-image' />
                        <h1 className='dewali-item-name'>
                            Fire Crackers
                        </h1>
                        <p className='dewali-card-price'>Rs 560</p>
                    </div>

                </div>

                <div className='d-flex flex-row justify-content-center'>
                    <div className='item-card'>
                        <Image src="https://m.media-amazon.com/images/I/91v2hfbF8JL.jpg" className='card-item-image' />
                        <h1 className='dewali-item-name'>
                            Choclate Lady Boomb
                        </h1>
                        <p className='dewali-card-price'>Rs 300</p>
                    </div>

                    <div className='item-card'>
                        <Image src="https://t4.ftcdn.net/jpg/00/26/78/37/360_F_26783740_XMdN3JhjcM4oon1MWCEGLCuBBDX5QQ1o.jpg" className='card-item-image' />
                        <h1 className='dewali-item-name'>
                            Night Light Boomb
                        </h1>
                        <p className='dewali-card-price'>Rs 500</p>
                    </div>

                    <div className='item-card'>
                        <Image src="https://media.istockphoto.com/id/859040276/vector/diya-sale-background-with-crackers-and-mandala-decoration.jpg?s=1024x1024&w=is&k=20&c=IBpgp5tbPTE7SdXii-dMmV9TDtvzfJ52pmSRrO8ZJFE=" className='card-item-image' />
                        <h1 className='dewali-item-name'>
                            Greating Sparklers
                        </h1>
                        <p className='dewali-card-price'>Rs 1500</p>
                    </div>

                    <div className='item-card'>
                        <Image src="https://media.istockphoto.com/id/604020296/photo/fire-crackers-and-sweet-food-in-diwali-festival.jpg?s=1024x1024&w=is&k=20&c=AKWpJuIQ-xp_lo0DEUbxBd3oNhfKrqrDbm-UnDOoPto=" className='card-item-image' />
                        <h1 className='dewali-item-name'>
                            Fire Crackers
                        </h1>
                        <p className='dewali-card-price'>Rs 5000</p>
                    </div>

                </div>

                <div className='d-flex flex-row justify-content-center'>
                    <Button className="btn btn-info">
                        More...
                    </Button>
                </div>

            </div>
        </React.Fragment>

    )
}

export default Dewali