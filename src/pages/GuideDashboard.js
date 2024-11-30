import React from "react";
import { Link } from "react-router-dom"; // For navigation between pages

const UserDashboard = () => {
  return (
    <div style={styles.dashboardContainer}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <div style={styles.sidebarHeader}>
          <img
            src="/logoo.png" // Replace with your logo's path
            alt="TourVibe Logo"
            style={styles.logoImage}
          />
        </div>
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li style={styles.navItem}><Link to="/dashboard" style={styles.navLink}>Dashboard</Link></li>
            <li style={styles.navItem}><Link to="/my-bookings" style={styles.navLink}>My Bookings</Link></li>
            <li style={styles.navItem}><Link to="/profile" style={styles.navLink}>Profile</Link></li>
            <li style={styles.navItem}><Link to="/settings" style={styles.navLink}>Settings</Link></li>
          </ul>
        </nav>
      </div>

      {/* Main Content Area */}
      <div style={styles.mainContent}>
        {/* User Greeting and Profile */}
        <div style={styles.greetingSection}>
          <span style={styles.greeting}>Welcome, User!</span>
          <div style={styles.userProfile}>
            <img src="/images/profile.png" alt="User Profile" style={styles.profileImage} />
            <span style={styles.username}>User Name</span>
          </div>
        </div>

        {/* Dashboard Overview */}
        <div style={styles.dashboardOverview}>
          <h3 style={styles.dashboardHeading}>Dashboard Overview</h3>
          <div style={styles.statsContainer}>
            <div style={styles.statsCard}>
              <h4>Upcoming Tours</h4>
              <p style={styles.statsValue}>3</p>
            </div>
            <div style={styles.statsCard}>
              <h4>Messages</h4>
              <p style={styles.statsValue}>5 New</p>
            </div>
            <div style={styles.statsCard}>
              <h4>Reviews</h4>
              <p style={styles.statsValue}>4.7</p>
            </div>
          </div>
        </div>

        {/* Recently Booked Tours */}
        <div style={styles.recentTours}>
          <h3 style={styles.recentHeading}>Recently Booked Tours</h3>
          <div style={styles.tourCard}>
            <h4>Paris City Tour</h4>
            <p>Tour Guide: John Doe</p>
            <p>Date: 12th December 2024</p>
          </div>
          <div style={styles.tourCard}>
            <h4>Rome Adventure</h4>
            <p>Tour Guide: Maria Garcia</p>
            <p>Date: 15th December 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  dashboardContainer: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#f4f6f9",
  },
  sidebar: {
    width: "240px",
    backgroundColor: "#2c3e50",
    color: "white",
    paddingTop: "20px",
  },
  sidebarHeader: {
    textAlign: "center",
    marginBottom: "40px",
    paddingBottom: "20px", // Optional: Add padding to give some space around the logo
  },
  logoImage: {
    width: "150px", // Adjust the size as needed
    height: "auto", // Maintain aspect ratio
  },
  nav: {
    padding: "0 20px",
  },
  navList: {
    listStyleType: "none",
    padding: "0",
  },
  navItem: {
    margin: "15px 0",
  },
  navLink: {
    color: "#ecf0f1",
    textDecoration: "none",
    fontSize: "18px",
  },
  mainContent: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#fff",
  },
  greetingSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "20px",
    borderBottom: "1px solid #ddd",
  },
  greeting: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  userProfile: {
    display: "flex",
    alignItems: "center",
  },
  profileImage: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginRight: "10px",
  },
  username: {
    fontSize: "18px",
    fontWeight: "500",
  },
  dashboardOverview: {
    marginTop: "20px",
  },
  dashboardHeading: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  statsContainer: {
    display: "flex",
    gap: "20px",
  },
  statsCard: {
    backgroundColor: "#3498db",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    flex: 1,
    textAlign: "center",
  },
  statsValue: {
    fontSize: "32px",
    fontWeight: "bold",
  },
  recentTours: {
    marginTop: "40px",
  },
  recentHeading: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  tourCard: {
    backgroundColor: "#ecf0f1",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px",
  },
};

export default UserDashboard;
