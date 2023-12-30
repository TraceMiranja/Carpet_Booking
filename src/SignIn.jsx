import React, { useState } from 'react';
import axios from 'axios';

function SignIn({ history }) {
  const [formData, setFormData] = useState({
    usernameOrEmail: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://cerulean-donkey-fez.cyclic.app/customers?username=${formData.usernameOrEmail}&email=${formData.usernameOrEmail}`
      );
      console.log(response.data); // Handle success response

      if (response.data.length > 0) {
        // User found, redirect to booking form
        history.push('/booking');
      } else {
        // User not found, handle error
        console.log('User not found');
        // You can display an error message to the user or handle it as per your requirements
      }
    } catch (error) {
      console.error(error); // Handle error
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username or Email:
          <input
            type="text"
            name="usernameOrEmail"
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;