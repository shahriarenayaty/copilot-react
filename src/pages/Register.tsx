import React, { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  // Three state items for username, email, and mobile number error
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form validation and submission logic here
  };

  return (
    <div>
      <h1>Register Page</h1>
      <p>Please sign up using the form below.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => {
              const value = e.target.value;

              setUsername(value);
              //validate username, must be atleast 8 characters long, must have at least 1 Uppercase letter, 1 Lowercase letter, 1 number and 1 special character
              const regex =
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
              if (!regex.test(value)) {
                setUsernameError(
                  "Username must be atleast 8 characters long, must have at least 1 Uppercase letter, 1 Lowercase letter, 1 number and 1 special character"
                );
              } else {
                setUsernameError("");
              }
            }}
            required
          />
          {usernameError && (
            <p style={{ color: "red", fontSize: "0.8rem" }}>{usernameError}</p>
          )}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="mobile">UK Mobile Number:</label>
          <input
            type="tel"
            id="mobile"
            placeholder="+44 7123 456 789"
            required
            value={mobile}
            onChange={(e) => {
              const value = e.target.value;
              setMobile(value);
              //validate mobile number, must be a UK mobile number starting with +44 or 07 and must be 11 digits long
              const regex = /^(07|\+447)\d{9}$/;
              if (!regex.test(value)) {
                setMobileError(
                  "Mobile number must be a UK mobile number starting with +44 or 07 and must be 11 digits long"
                );
              } else {
                setMobileError("");
              }
              setMobile(e.target.value);
            }}
          />
          {mobileError && (
            <p style={{ color: "red", fontSize: "0.8rem" }}>{mobileError}</p>
          )}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
