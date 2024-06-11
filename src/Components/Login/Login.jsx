import React, { useState } from "react";
import "./Login.css";
import { FaRegUserCircle, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (error && e.target.value.trim() !== "") {
      setError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (error && e.target.value.length >= 6) {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "") {
      setError("Username must not be empty");
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters long");
    } else {
      setError("");
      alert("Login successful");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="wrap">
      <form onSubmit={handleSubmit} autoComplete="off">
        <h1>Login</h1>
        <div className="input-box">
          <label>
            <h4>Username:</h4>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
              required
              autoComplete="off"
            />
          </label>
          <FaRegUserCircle className="icon" />
        </div>
        <div className="input-box">
          <label>
            <h4>Password:</h4>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
              autoComplete="off"
            />
          </label>
          <FaLock className="icon" />
        </div>
        <div className="remember-forget">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
        <div className="register-link">
          <p>
            Don't have an account? <Link to="/signup">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;

