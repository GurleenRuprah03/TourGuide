import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if location.state is available and has guide and selectedAvailability
  const { guide, selectedAvailability } = location.state || {};

  // If the required data is missing, show an error message
  if (!guide || !selectedAvailability) {
    return <div style={styles.errorMessage}>Error: Missing booking data.</div>;
  }

  const handleConfirmBooking = () => {
    // Navigate to the payment page with the necessary booking data
    navigate("/payment", {
      state: { guide, selectedAvailability },
    });
  };

  const handleCancelBooking = () => {
    // Navigate back to the guide profile page
    navigate("/guide-profile", {
      state: { guide },
    });
  };

  return (
    <div style={styles.container}>
      <h1>Booking Confirmation</h1>
      <p>
        <strong>Guide:</strong> {guide.name}
      </p>
      <p>
        <strong>Activity:</strong> {guide.activity}
      </p>
      <p>
        <strong>Location:</strong> {guide.location}
      </p>
      <p>
        <strong>Time:</strong> {selectedAvailability.date} at {selectedAvailability.time}
      </p>

      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={handleConfirmBooking}>
          Confirm Booking
        </button>
        <button style={styles.button} onClick={handleCancelBooking}>
          Cancel
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },
  buttonContainer: {
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
    margin: "10px",
  },
  errorMessage: {
    padding: "20px",
    fontSize: "18px",
    color: "red",
    textAlign: "center",
  },
};

export default BookingConfirmation;
