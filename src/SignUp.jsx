import React from 'react';
import './SignUp.css';

const SignUp = () => {
  return (
    <div className="sign-up-page">
      <h1>Sign Up</h1>
      <form>
        <div className="form-group">
          <label><b>Name:</b></label>
          <input type="text" name="name" required />
        </div>
        <div className="form-group">
          <label><b>Email:</b></label>
          <input type="email" name="email" required />
        </div>
        <div className="form-group">
          <label><b>Phone Number:</b></label>
          <input type="tel" name="phone" required />
        </div>
        <div className="form-group">
          <label><b>Address:</b></label>
          <input type="text" name="address" required />
        </div>
        <div className="form-group">
          <label><b>Password:</b></label>
          <input type="password" name="password" required />
        </div>
        <div className="form-group">
          <label><b>Confirm Password:</b></label>
          <input type="password" name="confirm-password" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="/signin">Sign In</a></p>
    </div>
  );
};

export default SignUp;