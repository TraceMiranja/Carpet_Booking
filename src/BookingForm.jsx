import { useState } from 'react';
import axios from 'axios';

function BookingForm() {
  const [formData, setFormData] = useState({
    apartment: '',
    houseNumber: '',
    carpetSize: '',
    collectionTime: '',
    location: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make the API request with the form data
      const response = await axios.post(
        'https://cerulean-donkey-fez.cyclic.app/bookings',
        formData
      );

      console.log(response.data); // Handle success response

      // Clear form data
      setFormData({
        apartment: '',
        houseNumber: '',
        carpetSize: '',
        collectionTime: '',
        location: '',
      });
    } catch (error) {
      console.error(error); // Handle error
    }
  };

  return (
    <div>
      <h1>Booking Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Apartment:
          <input
            type="text"
            name="apartment"
            value={formData.apartment}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          House Number:
          <input
            type="text"
            name="houseNumber"
            value={formData.houseNumber}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Carpet Size:
          <input
            type="text"
            name="carpetSize"
            value={formData.carpetSize}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Collection Time:
          <input
            type="text"
            name="collectionTime"
            value={formData.collectionTime}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookingForm;