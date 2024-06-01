import React from "react";
import './login.css'
const page = () => {
  return (
    <div>
      <div className="login-page">
        <div className="left-side">
          <div className="left-side-content">
            <h1>The Ultimate</h1>
            <h1 className="mobile-banking">Mobile Banking</h1>
            <h1>Experience.</h1>
          </div>
        </div>
        <div className="right-side">
          <div className="logo"></div>
          <h2 className="login-text">Login</h2>
          <div className="advice">
            Sign in to continue. Your password is yours, do not share it with
            anyone.
          </div>
          <form className="login-form">
            <input
              type="text"
              placeholder="User ID"
              className="input-field"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="input-field"
              required
            />
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          <div className="links">
            <div className="forgot-password-help">
              <a href="#forgot">
                <span className="forgot-password">Forgot Password?</span>
              </a>
              <a href="#help">
                <span className="need-help">Need Help?</span>
              </a>
            </div>
            <div className="dont-have-an-ac">
              <a href="#register">
                Don't have an account?
                <span className="register">Register</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page 
