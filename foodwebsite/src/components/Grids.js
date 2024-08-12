import React, { useState } from 'react'
import '../components/Grids.css'

const Grids = () => {
    const [show, setShow] = useState(false)

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    {show ?
                        <>
                            <div className='col-12 col-lg-6'>
                                <h1 className='hedding text-center'>Taj Mahal</h1>
                                <p>
                                    The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal.
                                </p>
                            </div>
                            <div className='col-12 col-lg-6'>
                                <h1 className='hedding text-center'>Mysore Palace</h1>
                                <p>
                                    Mysore Palace, also known as Amba Vilas Palace, is a historical palace and a royal residence. It is located in Mysore, Karnataka, India. It used to be the official residence of the Wadiyar dynasty and the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills eastward. Mysore is commonly described as the 'City of the Palaces', and there are seven palaces including this one. However, the Mysore Palace refers specifically to the one within the new fort.
                                </p>
                            </div>
                            <div className='col-12 col-lg-6'>
                                <h1 className='hedding text-center'>The Golden Temple</h1>
                                <p>
                                    The Golden temple is famous for its full golden dome, it is one of the most sacred pilgrim spots for Sikhs. The Mandir is built on a 67-ft square of marble and is a two storied structure. Maharaja Ranjit Singh had the upper half of the building built with approximately 1200 kg of gold leaf.
                                </p>
                            </div>
                            <div className='col-12 col-lg-6'>
                                <h1 className='hedding text-center'>About Hyderabad</h1>
                                <p>
                                    Hyderabad is the capital and largest city of the Indian state of Telangana. It occupies 650 km2 (250 sq mi) on the Deccan Plateau along the banks of the Musi River, in the northern part of Southern India. With an average altitude of 542 m (1,778 ft), much of Hyderabad is situated on hilly terrain around artificial lakes, including the Hussain Sagar lake, predating the city's founding, in the north of the city centre. According to the 2011 census of India, Hyderabad is the fourth-most populous city in India with a population of 6.9 million residents within the city limits, and has a population of 9.7 million residents in the metropolitan region, making it the sixth-most populous metropolitan area in India. With an output of US$74 billion, Hyderabad has the fifth-largest urban economy in India.
                                </p>
                            </div>
                            <div className='col-12 text-end'>
                                <button className='btn btn-dark' onClick={() => setShow(false)}>show colour palette</button>
                            </div>
                        </>
                        : null}
                </div>
            </div>
            {!show ?
                <div className='container'>
                    <h1 className='hedding text-center'>Bootstrap colour Palette</h1>
                    <div className='row bg-color'>
                        <div className='col-12 col-md-6 col-lg-4 col-xl-3 mb-3'>
                            <div className='bg-primary box-color'>
                                <p className='button-type'>Primary</p>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4 col-xl-3 mb-3'>
                            <div className='bg-success box-color'>
                                <p className='button-type'>success</p>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4 col-xl-3 mb-3'>
                            <div className='bg-info box-color'>
                                <p className='button-type'>infor</p>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4 col-xl-3 mb-3'>
                            <div className='bg-warning box-color'>
                                <p className='button-type'>warning</p>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4 col-xl-3 mb-3'>
                            <div className='bg-danger box-color'>
                                <p className='button-type'>Danger</p>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4 col-xl-3 mb-3'>
                            <div className='bg-secondary box-color'>
                                <p className='button-type'>secondary</p>
                            </div>
                        </div>
                        <div className='col-12 mb-3 text-end'>
                            <button className='btn btn-dark' onClick={() => setShow(true)}>show grid content</button>
                        </div>
                    </div>
                </div>
                : null}

        </div>
    )
}

export default Grids