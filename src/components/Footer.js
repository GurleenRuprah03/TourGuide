import React, { useState } from "react";

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* About Section */}
        <div style={styles.column}>
          <h3 style={styles.heading}>About Tour Vibe</h3>
          <p style={styles.text}>
            Tour Vibe is your ultimate travel companion. Discover destinations,
            plan trips, and create unforgettable memories with ease.
          </p>
        </div>

        {/* Quick Links Section */}
        <div style={styles.column}>
          <h3 style={styles.heading}>Quick Links</h3>
          <ul style={styles.list}>
            {["Home", "Login", "Register", "Careers"].map((link, index) => (
              <li key={index}>
                <a
                  href={`/${link.toLowerCase()}`}
                  style={{
                    ...styles.link,
                    ...(hoveredLink === link ? styles.linkHover : {}),
                  }}
                  onMouseEnter={() => handleMouseEnter(link)}
                  onMouseLeave={handleMouseLeave}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us Section */}
        <div style={styles.column}>
          <h3 style={styles.heading}>Contact Us</h3>
          <p style={styles.text}>
            Email:{" "}
            <a
              href="mailto:support@tourvibe.com"
              style={{
                ...styles.link,
                ...(hoveredLink === "Email" ? styles.linkHover : {}),
              }}
              onMouseEnter={() => handleMouseEnter("Email")}
              onMouseLeave={handleMouseLeave}
            >
              support@tourvibe.com
            </a>
          </p>
          <p style={styles.text}>
            Phone:{" "}
            <a
              href="tel:+1234567890"
              style={{
                ...styles.link,
                ...(hoveredLink === "Phone" ? styles.linkHover : {}),
              }}
              onMouseEnter={() => handleMouseEnter("Phone")}
              onMouseLeave={handleMouseLeave}
            >
              +1 234 567 890
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={styles.bottomBar}>
        <p style={styles.text}>&copy; 2024 Tour Vibe. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#2c3e50", // Dark background
    color: "#ecf0f1", // Light text color
    padding: "20px 30px",
    boxShadow: "0 -2px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow at the top
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap", // Ensure responsiveness
    gap: "20px",
  },
  column: {
    flex: "1",
    minWidth: "250px", // Ensure minimum width for small screens
  },
  heading: {
    fontSize: "20px",
    marginBottom: "10px",
    color: "#ecf0f1",
  },
  text: {
    fontSize: "14px",
    marginBottom: "10px",
    color: "#bdc3c7",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  link: {
    textDecoration: "none",
    color: "#ecf0f1",
    padding: "5px 10px", // Add padding for a clickable area
    borderRadius: "5px", // Rounded edges for hover effect
    transition: "background-color 0.3s ease, color 0.3s ease", // Smooth hover effect
  },
  linkHover: {
    backgroundColor: "#34495e", // Shaded background on hover
    color: "#ffffff", // Change text color on hover
  },
  bottomBar: {
    marginTop: "20px",
    textAlign: "center",
    borderTop: "1px solid #34495e",
    paddingTop: "10px",
  },
};

export default Footer;
