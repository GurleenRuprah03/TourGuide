import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  const handleGoogleSignIn = () => {
    console.log("Google Sign-In clicked!");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div style={styles.container}>
        <h2 style={styles.title}>Sign In</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <div style={styles.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.passwordInput}
            />
            <button 
              type="button" 
              onClick={togglePasswordVisibility} 
              style={styles.eyeButton}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button type="submit" style={styles.button}>Sign In</button>
        </form>

        <div style={styles.divider}>
          <hr style={styles.line} />
          <span>or</span>
          <hr style={styles.line} />
        </div>

        <div style={styles.googleButtonContainer}>
          <button style={styles.googleButton} onClick={handleGoogleSignIn}>
            <img src="/google-logo.png" alt="Google Logo" style={styles.googleLogo} />
            Sign in with Google
          </button>
        </div>

        <p style={styles.optionsText}>
          Don't have an account? <Link to="/signup" style={styles.link}>Sign Up</Link>
        </p>
        <p style={styles.optionsText}>
          Forgot your password? <Link to="/reset-password" style={styles.link}>Reset Password</Link>
        </p>
      </div>
    </>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "400px",
    margin: "auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    margin: "10px 0",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  passwordContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  passwordInput: {
    margin: "10px 0",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: '100%',
  },
  eyeButton: {
    position: 'absolute',
    right: '10px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '18px',
  },
  button: {
    padding: "10px",
    background: "#2980b9",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  },
  divider: {
    display: "flex",
    alignItems: "center",
    margin: "20px 0",
  },
  line: {
    flex: 1,
    height: "1px",
    backgroundColor: "#ccc",
  },
  googleButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  googleButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    background: "#fff",
    color: "#333",
    border: "1px solid #ccc",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "20px",
    fontSize: "16px",
    width: "80%",
  },
  googleLogo: {
    width: "20px",
    height: "20px",
    marginRight: "10px",
  },
  optionsText: {
    margin: "10px 0",
    fontSize: "14px",
  },
  link: {
    color: "#2980b9",
    textDecoration: "none",
  },
};

export default SignIn;