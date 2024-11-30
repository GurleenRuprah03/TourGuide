import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const Dashboard = () => {
  const tourGuides = [
    {
      image: "/images/guide3.jpg", // Replace with real guide images
      name: "Davina Lee",
      rating: 4.3,
      description: "Sydney's beauty awaits you! Join me for an unforgettable tour",
    },
    {
      image: "/images/guide4.jpg",
      name: "Maria Garcia",
      rating: 5.0,
      description: "Experience the luxury and wonder of Dubai with an expert guide",
    },
    {
      image: "/images/guide7.jpg",
      name: "Simone",
      rating: 4.2,
      description: "Experience the royal times in Victoria",
    },
    {
      image: "/images/guide6.jpg",
      name: "Grace Lavender",
      rating: 5.0,
      description: "Adventure is fun always.",
    },
  ];

  const navigate = useNavigate(); // useNavigate hook for navigation

  // Navigate to explore page
  const handleExplore = () => {
    navigate("/explore");
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <h1 style={styles.heroHeading}>Welcome to Tour Vibe!</h1>
        <p style={styles.heroSubheading}>
          Find the best tour guides for your next adventure.
        </p>
        <button style={styles.exploreButton} onClick={handleExplore}>
          Explore Now
        </button>
      </div>

      {/* Tour Guides Section - Cards at the Bottom */}
      <div style={styles.guidesSection}>
        <h2 style={styles.sectionTitle}>Meet Our Top Guides</h2>
        <div style={styles.cardGrid}>
          {tourGuides.map((guide, index) => (
            <div key={index} style={styles.card}>
              <img
                src={guide.image}
                alt={guide.name}
                style={styles.cardImage}
              />
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{guide.name}</h3>
                <div style={styles.cardRating}>
                  {Array.from({ length: 5 }, (_, index) => (
                    <span
                      key={index}
                      style={{
                        color:
                          index < Math.floor(guide.rating)
                            ? "#FFD700"
                            : index === Math.floor(guide.rating) &&
                              guide.rating % 1 >= 0.5
                            ? "#FFD700"
                            : "#ccc",
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p style={styles.cardDescription}>{guide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Styling for the page
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
    width: "100%",
    backgroundImage: "url('../images/coverPage.jpg')", // Full-screen background image
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflow: "hidden",
    margin: "0",
    padding: "0",
  },

  // Hero Section Styling
  heroSection: {
    position: "relative",
    textAlign: "center",
    paddingTop: "15vh", // Center vertically
    color: "#fff",
    zIndex: 1,
    background: "rgba(0, 0, 0, 0.4)", // Dark overlay for better text contrast
    paddingBottom: "50px",
  },
  heroHeading: {
    fontSize: "60px", // Larger text for the heading
    fontWeight: "bold",
    color: "#fff", // White text
    marginBottom: "20px",
  },
  heroSubheading: {
    fontSize: "20px",
    color: "#fff", // White text
    marginBottom: "30px",
  },
  exploreButton: {
    padding: "20px 40px",
    backgroundColor: "#3498db", // Blue button
    color: "#fff",
    border: "none",
    borderRadius: "50px", // Rounded corners for the button
    cursor: "pointer",
    fontSize: "20px",
    transition: "background-color 0.3s ease",
  },

  // Guides Section Styling
  guidesSection: {
    textAlign: "center",
    padding: "40px 20px", // Padding around the cards
  },
  sectionTitle: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "40px", // Spacing between title and cards
    color: "#2c3e50", // Dark color for the title
  },
  cardGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px", // Spacing between cards
    flexWrap: "wrap", // Ensures the cards wrap when space is tight
  },

  // Card Styling
  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Light shadow
    width: "280px",
    height: "380px",
    overflow: "hidden",
    transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition for transform and box-shadow
    cursor: "pointer",
    marginBottom: "20px", // Space between rows of cards
  },
  cardImage: {
    width: "100%",
    height: "50%",
    objectFit: "cover",
  },
  cardContent: {
    padding: "15px",
    textAlign: "center",
  },
  cardTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    margin: "10px 0",
    color: "#333",
  },
  cardRating: {
    fontSize: "18px",
    color: "#FFD700", // Golden color for the stars
    marginBottom: "10px",
  },
  cardDescription: {
    fontSize: "14px",
    color: "#7f8c8d",
  },
};

export default Dashboard;
