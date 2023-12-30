import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function SignIn() {
  const history = useHistory();

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

      // Redirect to home page
      history.push('/');
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