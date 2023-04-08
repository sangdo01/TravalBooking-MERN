import React from 'react'
import "./booking.css"
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap'

const Booking = ({ tour, avgRating }) => {

    const { price, reviews } = tour

    const handleChange = e => {};

    return <div className="booking">
        <div className="booking__top d-flex align-items-center justify-content-between">
            <h3>${price} <span>/per person</span></h3>
            <span className="tour__rating d-flex align-items-center">
                <i class="ri-star-fill" ></i> {avgRating === 0 ? null : avgRating} ({reviews ?.lenght})
            </span>
        </div>
        {/*=========================== Booking form start ========================================*/}

        <div className="booking__form">
            <h5>Infomation</h5>
            <Form className='booking__info-form'>
                <FormGroup>
                    <input type="text" placeholder='Full Name' id='fullName' required onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <input type="number" placeholder='Phone' id='phone' required onChange={handleChange}/>
                </FormGroup>
                <FormGroup className='d-flex align-items-center gap-3'>
                    <input type="date" placeholder='' id='bookAt' required onChange={handleChange}/>
                    <input type="number" placeholder='Guest' id='guestSize' required onChange={handleChange}/>
                </FormGroup>
            </Form>
        </div>

        {/*=========================== Booking form end ========================================*/}
    </div>
}

export default Booking