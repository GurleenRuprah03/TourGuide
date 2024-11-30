import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // Get the current path
  const [activeLink, setActiveLink] = useState(location.pathname); // Track the active link
  const [hoveredLink, setHoveredLink] = useState(null); // Track the hovered link

  const handleClick = (path) => {
    setActiveLink(path);
  };

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  // Define the paths and their labels
  const links = [
    { path: "/", label: "Home" },
    { path: "/signin", label: "Login" },
    { path: "/explore", label: "Explore" },
    { path: "/careers", label: "Careers" },
  ];

  return (
    <nav style={styles.navbar}>
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* Wrap the logo in a Link */}
        <Link to="/" onClick={() => handleClick("/")}>
          <img
            src="/logoo.png" // Reference the logo in the public folder
            alt="Tour Vibe Logo"
            style={styles.logoImage}
          />
        </Link>
      </div>
      <div style={styles.navItems}>
        {links.map(({ path, label }, index) => (
          <Link
            key={index}
            to={path}
            style={{
              ...styles.link,
              ...(activeLink === path ? styles.activeLink : {}),
              ...(hoveredLink === path ? styles.hoveredLink : {}),
            }}
            onClick={() => handleClick(path)}
            onMouseEnter={() => handleMouseEnter(path)}
            onMouseLeave={handleMouseLeave}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 30px",
    backgroundColor: "#2c3e50", // Dark background
    color: "#ecf0f1",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
    position: "sticky",
    top: 0,
    zIndex: 1000,
    height: "50px", // Fixed height for the navbar
  },
  logoImage: {
    height: "100%", // Ensure the logo takes full height of the navbar
    maxHeight: "60px", // Scale the logo within the fixed navbar height
    objectFit: "contain", // Ensure the logo scales proportionally
    cursor: "pointer", // Show pointer cursor on hover for the logo
  },
  navItems: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  link: {
    margin: "0 15px",
    textDecoration: "none",
    color: "#ecf0f1",
    fontSize: "18px",
    fontWeight: "500",
    padding: "5px 10px", // Add padding for the shading effect
    borderRadius: "5px", // Rounded edges for the shading background
    transition: "background-color 0.3s ease, color 0.3s ease", // Smooth transition for hover and click effects
  },
  activeLink: {
    backgroundColor: "#34495e", // Light shading effect for the active link
    color: "#ffffff", // Ensure text contrast
  },
  hoveredLink: {
    backgroundColor: "#3b4a58", // Slightly lighter background for hover effect
    color: "#ffffff", // Text remains white on hover
  },
};

export default Navbar;
