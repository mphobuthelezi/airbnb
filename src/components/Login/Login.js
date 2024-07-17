import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="input-container">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
