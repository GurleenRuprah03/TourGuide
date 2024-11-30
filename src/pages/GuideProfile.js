import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const GuideProfile = () => {
  const location = useLocation();
  const { guide } = location.state || {}; // Retrieve the guide details passed through navigation
  const navigate = useNavigate(); // Initialize navigate hook

  const [isChatVisible, setIsChatVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [selectedAvailability, setSelectedAvailability] = useState(null);

  // Handle booking the tour and navigating to the booking confirmation page
  const handleBookTour = () => {
    // Pass the entire guide object and selectedAvailability to the next page
    navigate("/bookingconfirmation", {
      state: {
        guide,  // Pass the full guide object
        selectedAvailability, // Pass selected availability
      },
    });
  };

  const handleChatWithGuide = () => {
    setIsChatVisible(!isChatVisible);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: "You", text: newMessage }]);
      setNewMessage(""); // Clear the message input field
    }
  };

  return (
    <div style={styles.profileContainer}>
      <div style={styles.profileHeader}>
        <img src={guide.image} alt={guide.name} style={styles.profileImage} />
        <div style={styles.profileDetails}>
          <h1 style={styles.profileName}>{guide.name}</h1>
          <p style={styles.profileRating}>
            {Array.from({ length: 5 }, (_, index) => (
              <span
                key={index}
                style={{
                  color:
                    index < Math.floor(guide.rating)
                      ? "#FFD700"
                      : index === Math.floor(guide.rating) && guide.rating % 1 >= 0.5
                      ? "#FFD700"
                      : "#ccc",
                }}
              >
                ★
              </span>
            ))}
          </p>
          <p><strong>Activity:</strong> {guide.activity}</p>
          <p><strong>Location:</strong> {guide.location}</p>
          <p><strong>Languages:</strong> {guide.language}</p>
          <p><strong>Description:</strong> {guide.description}</p>
          <p><strong>Price per tour:</strong> ${guide.price}</p>
        </div>
      </div>

      <div style={styles.availabilityContainer}>
        <h3>Available Times</h3>
        <div style={styles.availabilityList}>
          {guide.availability ? (
            guide.availability.map((availability, index) => (
              <div
                key={index}
                style={{
                  ...styles.availabilityItem,
                  backgroundColor:
                    selectedAvailability === availability ? "#3498db" : "#fff",
                  color: selectedAvailability === availability ? "#fff" : "#000",
                }}
                onClick={() => setSelectedAvailability(availability)}
              >
                <p>{availability.date}</p>
                <p>{availability.time}</p>
              </div>
            ))
          ) : (
            <p>No availability listed</p>
          )}
        </div>
      </div>

      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={handleBookTour}>
          Book This Guide
        </button>
      </div>

      {isChatVisible && (
        <div style={styles.chatboxContainer}>
          <div style={styles.chatboxHeader}>
            <h3>Chat with {guide.name}</h3>
          </div>
          <div style={styles.chatboxMessages}>
            {messages.map((msg, index) => (
              <p key={index} style={msg.sender === "You" ? styles.chatSender : styles.chatReceiver}>
                <strong>{msg.sender}:</strong> {msg.text}
              </p>
            ))}
          </div>
          <div style={styles.chatboxInput}>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              style={styles.chatInputField}
            />
            <button style={styles.chatSendButton} onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </div>
      )}

      {/* Floating Chat Button */}
      <button style={styles.floatingChatButton} onClick={handleChatWithGuide}>
        {isChatVisible ? "Close Chat" : "Chat with Guide"}
      </button>
    </div>
  );
};

// Styles for the Guide Profile page, Chatbox, and Availability form
const styles = {
  profileContainer: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  profileHeader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  },
  profileImage: {
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  profileDetails: {
    maxWidth: "600px",
  },
  profileName: {
    fontSize: "36px",
    fontWeight: "bold",
  },
  profileRating: {
    margin: "10px 0",
  },
  availabilityContainer: {
    marginTop: "20px",
    textAlign: "center",
  },
  availabilityList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  availabilityItem: {
    padding: "15px",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    transition: "background-color 0.3s",
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
  chatboxContainer: {
    position: "fixed",
    right: "20px",
    bottom: "20px",
    width: "300px",
    height: "400px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    zIndex: 100,
  },
  chatboxHeader: {
    backgroundColor: "#3498db",
    color: "#fff",
    padding: "10px",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chatboxMessages: {
    flex: 1,
    padding: "10px",
    overflowY: "scroll",
    backgroundColor: "#ecf0f1",
    borderBottom: "1px solid #ccc",
  },
  chatSender: {
    textAlign: "right",
    color: "#3498db",
  },
  chatReceiver: {
    textAlign: "left",
    color: "#2ecc71",
  },
  chatboxInput: {
    display: "flex",
    padding: "10px",
    backgroundColor: "#fff",
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
  },
  chatInputField: {
    flex: 1,
    padding: "8px",
    fontSize: "14px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
  },
  chatSendButton: {
    backgroundColor: "#3498db",
    color: "#fff",
    padding: "8px 12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    marginLeft: "10px",
  },
  floatingChatButton: {
    position: "fixed",
    right: "20px",
    bottom: "20px",
    backgroundColor: "#3498db",
    color: "#fff",
    padding: "12px 18px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    zIndex: 101,
  },
};

export default GuideProfile;
