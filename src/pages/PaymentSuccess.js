import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const location = useLocation();
  const { guide, selectedAvailability } = location.state;
  const navigate = useNavigate();

  return (
    <div style={styles.successPageContainer}>
      <h1 style={styles.pageTitle}>Payment Successful!</h1>
      <p>Your booking with {guide.name} has been confirmed.</p>
      <p><strong>Activity:</strong> {guide.activity}</p>
      <p><strong>Date & Time:</strong> {selectedAvailability.date} at {selectedAvailability.time}</p>
      <p><strong>Total Cost:</strong> ${guide.price}</p>

      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={() => navigate("/explore")}>
          Go Back to Explore
        </button>
        <button style={styles.button} onClick={() => navigate("/profile")}>
          View Your Profile
        </button>
      </div>
    </div>
  );
};

const styles = {
  successPageContainer: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    maxWidth: "600px",
    margin: "0 auto",
    textAlign: "center",
  },
  pageTitle: {
    fontSize: "36px",
    marginBottom: "20px",
    color: "#2ecc71",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default PaymentSuccess;
