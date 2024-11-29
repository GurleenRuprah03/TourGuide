import React, { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    date: "",
    participants: 1,
    notes: "",
  });

  const destinations = ["Paris", "New York", "Tokyo", "Sydney", "Dubai"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Details:", formData);
    alert("Your booking has been submitted!");
    // Reset form
    setFormData({
      name: "",
      email: "",
      destination: "",
      date: "",
      participants: 1,
      notes: "",
    });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Book Your Trip</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />

        {/* Destination */}
        <select
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          required
          style={styles.input}
        >
          <option value="" disabled>
            Select a Destination
          </option>
          {destinations.map((dest, index) => (
            <option key={index} value={dest}>
              {dest}
            </option>
          ))}
        </select>

        {/* Booking Date */}
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          style={styles.input}
        />

        {/* Number of Participants */}
        <input
          type="number"
          name="participants"
          placeholder="Number of Participants"
          min="1"
          value={formData.participants}
          onChange={handleChange}
          required
          style={styles.input}
        />

        {/* Additional Notes */}
        <textarea
          name="notes"
          placeholder="Additional Notes (Optional)"
          value={formData.notes}
          onChange={handleChange}
          style={styles.textarea}
        />

        {/* Submit Button */}
        <button type="submit" style={styles.button}>
          Submit Booking
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  heading: { textAlign: "center", marginBottom: "20px", fontSize: "24px" },
  form: { display: "flex", flexDirection: "column" },
  input: {
    marginBottom: "15px",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  textarea: {
    marginBottom: "15px",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    minHeight: "80px",
  },
  button: {
    padding: "10px 15px",
    backgroundColor: "#2ecc71",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default BookingForm;
