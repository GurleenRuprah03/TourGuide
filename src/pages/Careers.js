import React, { useState } from "react";

const TourGuideSignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert("You must accept the terms and conditions.");
      return;
    }

  

    const guide = {
      firstName,
      lastName,
      email,
      password,
      age,
      gender,
    };

    alert("Guide Object: " + "First Name: " + guide.firstName + ", " + "Last Name: " + guide.lastName + ", " + "Email: " + guide.email + ", " + "Password: " + guide.password + ", " + "Age: " + guide.age + ", " + "Gender: " + guide.gender);

    alert("Tour Guide Sign-Up Data logged successfully!");

  };

  return (
    <div style={styles.container}>
      <h2>Register as a Tour Guide</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          style={styles.input}
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
          style={styles.input}
        >
          <option value="" disabled>
            Select Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <div style={styles.termsContainer}>
          <label>
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              style={styles.checkbox}
            />
            I agree to the{" "}
            <span
              style={styles.link}
              onClick={() => setShowModal(true)}
            >
              Terms and Conditions
            </span>
          </label>
        </div>
        <button type="submit" style={styles.button}>
          Sign Up
        </button>
      </form>

      {/* Terms and Conditions Popup */}
      {showModal && (
        <div style={styles.modalBackdrop}>
          <div style={styles.modal}>
            <h3 style={styles.modalTitle}>Terms and Conditions for Becoming a Tour Guide</h3>
            <div style={styles.modalContent}>
              <h4 style={styles.sectionTitle}>1. Introduction</h4>
              <p>
                Welcome to Tour Vibe! By registering as a Tour Guide on our platform, you agree to the following terms and conditions. These terms govern your use of our platform and services. If you do not agree to these terms, you may not use our services as a Tour Guide.
              </p>

              <h4 style={styles.sectionTitle}>2. Eligibility</h4>
              <p>
                - You must be at least 18 years of age to register as a Tour Guide.<br />
                - You must have any required licenses or certifications to operate as a tour guide in your jurisdiction.<br />
                - By signing up, you confirm that you can legally provide services and agree to a background verification process if requested.
              </p>

              <h4 style={styles.sectionTitle}>3. Guide Responsibilities</h4>
              <p>
                - <strong>Accurate Information:</strong> All information provided, including qualifications, tours offered, and availability, must be accurate and updated regularly.<br />
                - <strong>Quality of Service:</strong> You agree to provide high-quality, professional services to all customers, adhering to local laws and cultural sensitivities.<br />
                - <strong>Cancellations:</strong> You must notify customers of cancellations or changes at least 24 hours in advance unless there are extenuating circumstances.
              </p>

              <h4 style={styles.sectionTitle}>4. Commission and Fees</h4>
              <p>
                Tour Vibe deducts a 15% commission from the total fee for every tour booked through the platform. As an independent contractor, you are responsible for your own taxes, insurance, and expenses.
              </p>

              <h4 style={styles.sectionTitle}>5. User Feedback and Ratings</h4>
              <p>
                Customers can leave ratings and reviews of your services. While we encourage constructive feedback, reviews will not be removed unless proven to violate our content policies. Consistently poor ratings or complaints may result in suspension or removal from the platform.
              </p>

              <h4 style={styles.sectionTitle}>6. Safety and Conduct</h4>
              <p>
                You are required to maintain the safety and well-being of your customers during tours. Any form of harassment, discrimination, or illegal activity will result in immediate removal from the platform and potential legal action.
              </p>

              <h4 style={styles.sectionTitle}>7. Data Privacy</h4>
              <p>
                Any customer information shared with you through Tour Vibe must only be used for purposes of providing the agreed tour services. You agree to adhere to all applicable data protection laws and Tour Vibe's Privacy Policy.
              </p>

              <h4 style={styles.sectionTitle}>8. Liability</h4>
              <p>
                Tour Vibe acts as an intermediary between guides and customers. We are not responsible for any incidents or disputes that arise during tours unless they pertain to monetary or service-related disputes made directly on the app. You agree to indemnify and hold harmless Tour Vibe from any claims, damages, or liabilities related to your services as a Tour Guide.
              </p>

              <h4 style={styles.sectionTitle}>9. Termination</h4>
              <p>
                Tour Vibe reserves the right to terminate or suspend your account at any time for breaches of these terms. You may also deactivate your account at any time by notifying us in writing.
              </p>

              <h4 style={styles.sectionTitle}>10. Modifications to Terms</h4>
              <p>
                Tour Vibe reserves the right to update these terms and conditions. Notice of significant changes will be provided, and continued use of the platform constitutes acceptance of these updates.
              </p>

              <h4 style={styles.sectionTitle}>Acceptance of Terms</h4>
              <p>
                By clicking "Sign Up" or using the Tour Vibe platform as a guide, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
              </p>
            </div>
            <button
              onClick={() => setShowModal(false)}
              style={styles.closeButton}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: { padding: "20px", maxWidth: "500px", margin: "auto", fontFamily: "Arial, sans-serif" },
  form: { display: "flex", flexDirection: "column" },
  input: { margin: "10px 0", padding: "12px", fontSize: "16px", border: "1px solid #ddd", borderRadius: "4px" },
  button: { padding: "12px", background: "#2980b9", color: "#fff", border: "none", cursor: "pointer", borderRadius: "4px" },
  termsContainer: { margin: "10px 0", fontSize: "14px" },
  checkbox: { marginRight: "10px" },
  link: { color: "#2980b9", textDecoration: "underline", cursor: "pointer" },
  modalBackdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "600px",
    width: "90%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  },
  modalTitle: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  modalContent: {
    fontSize: "16px",
    lineHeight: "1.6",
    maxHeight: "400px", 
    overflowY: "scroll",
    paddingRight: "10px",
  },
  sectionTitle: {
    fontWeight: "bold",
    marginTop: "15px",
  },
  closeButton: {
    padding: "10px 15px",
    background: "#e74c3c",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
    marginTop: "20px",
  },
};

export default TourGuideSignUp;
