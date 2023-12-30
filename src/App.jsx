import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Register from './Register';
import SignIn from './SignIn';
import BookingForm from './BookingForm';

function Home() {
  return <h1>Carpet Booking</h1>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/signin" component={SignIn} />
          <Route path="/booking" component={BookingForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;