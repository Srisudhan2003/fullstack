// ForgetPassword.jsx
import React from 'react';
import '../../assets/css/Forgot.css'; // Assuming your CSS file is named ForgetPassword.css

const ForgetPassword = () => {
  return (
    <div className="forget-password-container">
      <h2>Forget Password</h2>
      <div>Please enter your email address to reset your password:</div>
      <div className="input-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>
      <div className="button-group">
        <button className="reset-button">Reset Password</button>
      </div>
    </div>
  );
};

export default ForgetPassword;
