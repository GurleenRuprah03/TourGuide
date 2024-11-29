import React from 'react';
import { useLocation } from 'react-router-dom';

const BookingPage = () => {
  const location = useLocation();
  const { guide, bookingDetails } = location.state || {}; // Destructure state

  return (
    <div style={styles.container}>
      <div style={styles.confirmationSection}>
        <h2 style={styles.heading}>Booking Confirmation</h2>

        {/* Tour Guide Info */}
        <div style={styles.guideInfo}>
          <img
            src={guide?.image}
            alt={guide?.name}
            style={styles.guideImage}
          />
          <div style={styles.guideDetails}>
            <h3 style={styles.guideName}>{guide?.name}</h3>
            <p style={styles.guideDescription}>{guide?.description}</p>
            <p style={styles.guideLocation}>Location: {guide?.location}</p>
          </div>
        </div>

        {/* Booking Details */}
        <div style={styles.bookingInfo}>
          <h4 style={styles.infoTitle}>Booking Details:</h4>
          <p><strong>Tour Date:</strong> {bookingDetails?.date}</p>
          <p><strong>Time:</strong> {bookingDetails?.time}</p>
          <p><strong>Activity:</strong> {bookingDetails?.activity}</p>
          <p><strong>Total Price:</strong> ${bookingDetails?.price}</p>
        </div>

        {/* Confirmation Message */}
        <div style={styles.confirmationMessage}>
          <p>Your booking is confirmed! You will receive a confirmation email shortly.</p>
        </div>

        {/* Action Buttons */}
        <div style={styles.buttons}>
          <button style={styles.button} onClick={() => navigate('/')}>
            Go Back to Home
          </button>
          <button style={styles.button} onClick={() => navigate('/thank-you')}>
            Complete Booking
          </button>
        </div>
      </div>
    </div>
  );
};

// Styles for the Booking Confirmation Page
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    backgroundColor: '#f4f4f4',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  confirmationSection: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    padding: '30px',
    width: '80%',
    maxWidth: '900px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '20px',
  },
  guideInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '30px',
  },
  guideImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: '20px',
  },
  guideDetails: {
    textAlign: 'left',
  },
  guideName: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  guideDescription: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '5px',
  },
  guideLocation: {
    fontSize: '16px',
    color: '#555',
  },
  bookingInfo: {
    textAlign: 'left',
    marginBottom: '30px',
  },
  infoTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  confirmationMessage: {
    marginBottom: '30px',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s',
  },
};

export default BookingPage;
