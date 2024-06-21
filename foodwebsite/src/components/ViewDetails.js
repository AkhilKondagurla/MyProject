import React, { useState } from 'react'
import "../components/ViewDetails.css"
import Image from "react-bootstrap/Image"

function ViewDetails() {
    const [showVedio, setShow] = useState(true)
    return (
        <React.Fragment>
            <div className="detailed-view-bg-container" >
                <h1 class="detailed-view-heading d-flex flex-row justify-content-start">
                    Detailed View History About Taj Mahal
                </h1>

                <div className='detailed-view-card-container'>
                    {showVedio ? (
                        <div>
                            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/tajmahal-c1-img.png" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/tajmahal-c2-img.png" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/tajmahal-c3-img.png" className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="d-flex flex-row justify-content-end mt-3">
                                <button className="btn btn-primary" onClick={() => setShow(false)}>View Video</button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="embed-responsive embed-responsive-16by9 ">
                                <iframe className="embed-responsive-item vedio-width" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen></iframe>
                            </div>
                            <div className="d-flex flex-row justify-content-end mt-3">
                                <button className="btn btn-primary" onClick={() => setShow(true)}>Show Images</button>
                            </div>
                        </div>
                    )}
                    <div className='detailed-view-text-container'>
                        <h1 className='detailed-view-card-headding'>
                            Taj Mahal
                        </h1>
                        <p className='detailed-view-card-headding-about-tajmahal'>
                            The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal. The tomb is the centrepiece of a 17-hectare (42-acre)complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.
                            Construction of the mausoleum was essentially completed in 1643 but work continued on other phases of the project for another 10 years. The Taj Mahal complex is believed to have been completed in its entirety in 1653 at a cost estimated at the time to be around 32 million rupees, which in 2015 would be approximately 52.8 billion rupees (U.S. $827 million). The construction project employed some 20,000 artisans under the guidance of a board of architects led by the court architect to the emperor, Ustad Ahmad Lahauri.
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ViewDetails