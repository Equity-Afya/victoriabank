"use client";
import { useState, useContext } from "react";
import axios from "axios";
import Link from "next/link"; // Import Link from Next.js
import { useRouter } from "next/navigation"; // Import useRouter from Next.js
import "./login.css";
import { UserContext } from "@/app/context/UserContext";

const Login = () => {
  const router = useRouter(); // Initialize useRouter

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { setUserData, setUserAccounts } = useContext(UserContext);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://192.168.88.56:9010/authentication/login",
        { userId, password }
      );
      console.log(response.data);
      if (response.data.statusCode === 200) {
        // Corrected the equality check
        setUserData(response.data);
        // Redirect to the dashboard page upon successful login
        router.push("/dashboard"); // Use router.push for navigation
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
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
        <p>Login</p>
        <div className="advice">
          Sign in to continue. Your password is yours, do not share it with
          anyone.
        </div>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="User ID"
            className="input-field"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="links">
          <div className="forgot-password-help">
            <Link href="#forgot">
              <span className="forgot-password">Forgot Password?</span>
            </Link>
            <Link href="#help">
              <span className="need-help">Need Help?</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
