import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCreditCard, FaPaypal, FaApple } from "react-icons/fa"; // For Icons

// Payment Page Component
const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { guide, selectedAvailability } = location.state;

  // State for payment method and popup visibility
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  // Handle payment method selection
  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  // Show payment form based on selected payment method
  const handleProceedToPayment = () => {
    if (selectedPaymentMethod) {
      setShowPaymentForm(true);
    } else {
      alert("Please select a payment method.");
    }
  };

  // Handle payment form submission
  const handlePaymentConfirmation = (paymentDetails) => {
    if (paymentDetails) {
      setPaymentConfirmed(true);
      setTimeout(() => {
        // Navigate to the payment success page after confirming payment
        navigate("/payment-success", {
          state: { guide, selectedAvailability },
        });
      }, 2000); // Simulate a delay for payment processing
    } else {
      alert("Please enter valid payment details.");
    }
  };

  return (
    <div style={styles.paymentPageContainer}>
      <h1 style={styles.pageTitle}>Payment for {guide.name}</h1>

      <div style={styles.paymentDetails}>
        <h3>Booking Details</h3>
        <p><strong>Guide:</strong> {guide.name}</p>
        <p><strong>Activity:</strong> {guide.activity}</p>
        <p><strong>Date & Time:</strong> {selectedAvailability.date} at {selectedAvailability.time}</p>
        <p><strong>Total Cost:</strong> ${guide.price}</p>
      </div>

      <div style={styles.paymentOptions}>
        <h3>Select Payment Method</h3>
        <label style={styles.paymentOption}>
          <input
            type="radio"
            name="paymentMethod"
            value="creditCard"
            checked={selectedPaymentMethod === "creditCard"}
            onChange={handlePaymentMethodChange}
          />
          <FaCreditCard style={styles.icon} />
          Credit/Debit Card
        </label>
        <label style={styles.paymentOption}>
          <input
            type="radio"
            name="paymentMethod"
            value="paypal"
            checked={selectedPaymentMethod === "paypal"}
            onChange={handlePaymentMethodChange}
          />
          <FaPaypal style={styles.icon} />
          PayPal
        </label>
        <label style={styles.paymentOption}>
          <input
            type="radio"
            name="paymentMethod"
            value="applePay"
            checked={selectedPaymentMethod === "applePay"}
            onChange={handlePaymentMethodChange}
          />
          <FaApple style={styles.icon} />
          Apple Pay
        </label>
      </div>

      <div style={styles.paymentButtonContainer}>
        <button style={styles.confirmButton} onClick={handleProceedToPayment}>
          Proceed with Payment
        </button>
      </div>

      {showPaymentForm && (
        <PaymentForm
          paymentMethod={selectedPaymentMethod}
          onConfirm={handlePaymentConfirmation}
        />
      )}

      {paymentConfirmed && (
        <div style={styles.paymentSuccessMessage}>
          <p>Your payment is being processed...</p>
        </div>
      )}
    </div>
  );
};

// Payment Form Popup Component
const PaymentForm = ({ paymentMethod, onConfirm }) => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    paypalEmail: "",
    applePayToken: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onConfirm(paymentDetails);
  };

  return (
    <div style={styles.paymentFormContainer}>
      <h2>Enter Payment Details for {paymentMethod}</h2>
      <form onSubmit={handleSubmit}>
        {paymentMethod === "creditCard" && (
          <>
            <div style={styles.inputContainer}>
              <label>Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={paymentDetails.cardNumber}
                onChange={handleInputChange}
                placeholder="Card Number"
                style={styles.inputField}
                required
              />
            </div>
            <div style={styles.inputContainer}>
              <label>Expiry Date</label>
              <input
                type="text"
                name="expiryDate"
                value={paymentDetails.expiryDate}
                onChange={handleInputChange}
                placeholder="MM/YY"
                style={styles.inputField}
                required
              />
            </div>
            <div style={styles.inputContainer}>
              <label>CVV</label>
              <input
                type="text"
                name="cvv"
                value={paymentDetails.cvv}
                onChange={handleInputChange}
                placeholder="CVV"
                style={styles.inputField}
                required
              />
            </div>
          </>
        )}

        {paymentMethod === "paypal" && (
          <div style={styles.inputContainer}>
            <label>PayPal Email</label>
            <input
              type="email"
              name="paypalEmail"
              value={paymentDetails.paypalEmail}
              onChange={handleInputChange}
              placeholder="Email"
              style={styles.inputField}
              required
            />
          </div>
        )}

        {paymentMethod === "applePay" && (
          <div style={styles.inputContainer}>
            <label>Apple Pay Token</label>
            <input
              type="text"
              name="applePayToken"
              value={paymentDetails.applePayToken}
              onChange={handleInputChange}
              placeholder="Apple Pay Token"
              style={styles.inputField}
              required
            />
          </div>
        )}

        <button type="submit" style={styles.submitButton}>
          Proceed to Pay
        </button>
      </form>
    </div>
  );
};

// Styles for the Payment Page and Form with Icons
const styles = {
  paymentPageContainer: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    maxWidth: "600px",
    margin: "0 auto",
  },
  pageTitle: {
    textAlign: "center",
    fontSize: "36px",
    marginBottom: "20px",
  },
  paymentDetails: {
    marginBottom: "20px",
  },
  paymentOptions: {
    marginBottom: "20px",
  },
  paymentOption: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    cursor: "pointer",
  },
  icon: {
    marginRight: "10px",
    fontSize: "24px",
    color: "#3498db",
  },
  paymentButtonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  confirmButton: {
    padding: "10px 20px",
    fontSize: "18px",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  paymentFormContainer: {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginTop: "20px",
  },
  inputContainer: {
    marginBottom: "15px",
  },
  inputField: {
    width: "96%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
    marginTop: "5px",
  },
  submitButton: {
    backgroundColor: "green",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    fontSize: "18px",
    width: "100%",
    cursor: "pointer",
  },
  paymentSuccessMessage: {
    textAlign: "center",
    marginTop: "20px",
    color: "#2ecc71",
  },
};

export default PaymentPage;
