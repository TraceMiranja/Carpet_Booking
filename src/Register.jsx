import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Register() {
  const history = useHistory();

  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    role: 'user',
    dateOfBirth: '',
    phoneNumber: '',
    location: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://cerulean-donkey-fez.cyclic.app/customers',
        formData
      );
      console.log(response.data); // Handle success response

      // Redirect to home page
      history.push('/');
    } catch (error) {
      console.error(error); // Handle error
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <br />
        <label>
          Username:
          <input type="text" name="username" onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <br />
        <label>
          Date of Birth:
          <input type="date" name="dateOfBirth" onChange={handleChange} />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="text" name="phoneNumber" onChange={handleChange} />
        </label>
        <br />
        <label>
          Location:
          <input type="text" name="location" onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;