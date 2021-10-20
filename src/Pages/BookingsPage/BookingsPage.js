import React from 'react';
import bookings from '../../images/bookings.jpg'

const BookingsPage = () => {
    return (
        <div className="container border border-dark my-3 py-5">
            <h1>Here you can see all your bookings</h1>
            <img src={bookings} alt="" style={{ width: "100%" }} />
        </div>
    );
};

export default BookingsPage;