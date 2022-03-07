import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

const Register = () => {
    // States for registration
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
   
    // Handling the name change
    const handleName = (e) => {
      setName(e.target.value);
      setSubmitted(false);
    };
   
    // Handling the email change
    const handleEmail = (e) => {
      setEmail(e.target.value);
      setSubmitted(false);
    };
   
    // Handling the password change
    const handlePassword = (e) => {
      setPassword(e.target.value);
      setSubmitted(false);
    };
   
    // Handling the form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      if (name === '' || email === '' || password === '') {
        setError(true);
      } else {
        setSubmitted(true);
        setError(false);
      }
    };
   
    // Showing success message
    const successMessage = () => {
      return (
        <div
          className="success"
          style={{
            display: submitted ? '' : 'none',
          }}>
          <h1>User {name} successfully registered!!</h1>
        </div>
      );
    };
   
    // Showing error message if error is true
    const errorMessage = () => {
      return (
        <div
          className="error"
          style={{
            display: error ? '' : 'none',
          }}>
          <h1>Please enter all the fields</h1>
        </div>
      );
    };
   
    return (
      <div className="register-form">
        <div className="title">User registeration</div>
   
        {/* Calling to the methods */}
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>
   
        <form>
          <div className="input-container">
              <label className="label">Username</label>
              <input onChange={handleName} className="input"
                value={name} type="text" />
          </div>

          <div className="input-container">
            <label className="label">Email</label>
            <input onChange={handleEmail} className="input"
              value={email} type="email" />
          </div>

          <div className="input-container">
            <label className="label">Password</label>
            <input onChange={handlePassword} className="input"
              value={password} type="password" />
          </div>

          <div className="button-container">
            <button onClick={handleSubmit} className="register-button" input type="submit">
              Register
            </button>
          </div>

          <div className="backTologin">
            <Link to="/">Back To Login</Link>
        </div>
        </form>
      </div>
    );

};
  
export default Register;