import React from 'react';

function BookingForm() {
  return (
    <div>
      <h1>Booking Form</h1>
      <p>Username: {localStorage.getItem('username')}</p>
      <p>ID: {localStorage.getItem('id')}</p>
    </div>
  );
}

export default BookingForm;