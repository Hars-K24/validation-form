import React, { useState } from "react";
import "./Signup.css";
import { FaRegUserCircle, FaLock, FaEnvelope, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePincodeChange = (e) => {
    setPincode(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "") {
      setError("Username must not be empty");
    } else if (email.trim() === "") {
      setError("Email must not be empty");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email address");
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters long");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else if (address.trim() === "") {
      setError("Address must not be empty");
    } else if (pincode.trim() === "" || !/^\d{6}$/.test(pincode)) {
      setError("Pincode must be a 6 digit number");
    } else if (gender.trim() === "") {
      setError("Gender must be selected");
    } else {
      setError("");
      alert("Sign up successful");
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setAddress("");
      setPincode("");
      setGender("");
    }
  };

  return (
    <div className="wrap">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            required
            autoComplete="off"
          />
          <FaRegUserCircle className="Icon" />
        </div>
        <div className="input-box">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
            autoComplete="off"
          />
          <FaEnvelope className="Icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
            autoComplete="off"
          />
          <FaLock className="Icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
            autoComplete="off"
          />
          <FaLock className="Icon" />
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={handleAddressChange}
            required
            autoComplete="off"
          />
          <FaHome className="Icon" />
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Pincode"
            value={pincode}
            onChange={handlePincodeChange}
            required
            autoComplete="off"
          />
        </div>
        <div className="input-box">
        <label htmlFor="gender">Gender:</label> 
          <div className="gender-radio-buttons">
            <label>
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                checked={gender === 'male'}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                checked={gender === 'female'}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
        </div>
        </div>
        {error && <p className="error-message">{error}</p>}

        <div className="form-group">
       <div className="button-container">
         <button type="submit"><span>Register</span></button>
          <button type="reset">Reset</button>
         </div>
         </div>

        <div className="login-link">
          <p>
            Already have an account? <Link to="/">Login</Link>
          </p>
        </div>



      </form>
    </div>
  );
};

export default Signup;

