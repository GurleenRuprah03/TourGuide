import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const Explore = () => {
  const [guides, setGuides] = useState([
    {
      image: "/images/guide1.jpg",
      name: "John Doe",
      rating: 4.5,
      gender: "Male",
      language: "English, French",
      activity: "Trekking",
      location: "Paris, France",
      description: "Explore the hidden gems of Paris with an experienced local guide.",
    },
    {
      image: "/images/guide2.jpg",
      name: "Jane Smith",
      rating: 4.8,
      gender: "Female",
      language: "English, Japanese",
      activity: "Hiking",
      location: "Tokyo, Japan",
      description: "Let me take you through the cultural heart of Tokyo, Japan.",
    },
    {
      image: "/images/guide3.jpg",
      name: "David Lee",
      rating: 4.3,
      gender: "Male",
      language: "English, Chinese",
      activity: "Trekking",
      location: "Sydney, Australia",
      description: "Sydney's beauty awaits you! Join me for an unforgettable tour.",
    },
    {
      image: "/images/guide4.jpg",
      name: "Maria Garcia",
      rating: 5.0,
      gender: "Female",
      language: "Spanish, English",
      activity: "Safari",
      location: "Dubai, UAE",
      description: "Experience the luxury and wonder of Dubai with an expert guide.",
    },
  ]);

  const [filteredGuides, setFilteredGuides] = useState(guides);
  const [searchQuery, setSearchQuery] = useState(""); // For location and activity search
  const [selectedGender, setSelectedGender] = useState(""); // For gender selection
  const [selectedLanguage, setSelectedLanguage] = useState(""); // For language selection

  const navigate = useNavigate(); // useNavigate hook for navigation

  // Handle sorting by gender
  const handleGenderSort = (gender) => {
    setSelectedGender(gender);
    setFilteredGuides(
      guides.filter((guide) => guide.gender.toLowerCase() === gender.toLowerCase())
    );
  };

  // Handle sorting by language
  const handleLanguageSort = (language) => {
    setSelectedLanguage(language);
    setFilteredGuides(
      guides.filter((guide) =>
        guide.language.toLowerCase().includes(language.toLowerCase())
      )
    );
  };

  // Handle sorting by rating
  const handleRatingSort = (order) => {
    // 'asc' for ascending, 'desc' for descending
    const sortedGuides = [...guides].sort((a, b) => {
      if (order === "asc") {
        return a.rating - b.rating; // Sort by ascending rating
      } else if (order === "desc") {
        return b.rating - a.rating; // Sort by descending rating
      }
      return 0; // Default: no sorting
    });

    setFilteredGuides(sortedGuides); // Update filtered guides
  };

  // Handle location and activity search
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setFilteredGuides(
      guides.filter(
        (guide) =>
          guide.activity.toLowerCase().includes(e.target.value.toLowerCase()) ||
          guide.location.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    // Trigger search based on the query
    handleSearch({ target: { value: searchQuery } });
  };


  // Handle card click and navigate to guide profile
  const handleGuideClick = (guide) => {
    navigate(`/guide-profile`, { state: { guide } }); // Pass guide details as state
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <h1 style={styles.heroHeading}>Explore Our Tour Guides</h1>
        <p style={styles.heroSubheading}>
          Find the best guides for your next adventure.
        </p>
      </div>

      {/* Search Bar Section */}
      <div style={styles.searchBarSection}>
        <form onSubmit={handleSubmitSearch} style={styles.searchForm}>
          <input
            type="text"
            placeholder="Search by Activity or Location"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.searchInput}
          />
          <button type="submit" style={styles.searchButton}>
            🔍
          </button>
        </form>
      </div>

      {/* Main Section */}
      <div style={styles.mainSection}>
        {/* Sort Buttons Section (Left Side of Cards) */}
        <div style={styles.sortSection}>
          <button style={styles.sortButton} onClick={() => handleRatingSort("asc")}>
            Sort by Rating (Asc)
          </button>
          <button style={styles.sortButton} onClick={() => handleRatingSort("desc")}>
            Sort by Rating (Desc)
          </button>
          <button style={styles.sortButton} onClick={() => handleGenderSort("Male")}>
            Sort by Male
          </button>
          <button style={styles.sortButton} onClick={() => handleGenderSort("Female")}>
            Sort by Female
          </button>
          <button style={styles.sortButton} onClick={() => handleLanguageSort("English")}>
            Sort by English
          </button>
          <button style={styles.sortButton} onClick={() => handleLanguageSort("French")}>
            Sort by French
          </button>
          <button style={styles.sortButton} onClick={() => handleLanguageSort("German")}>
            Sort by German
          </button>
        </div>

        {/* Cards Section (Center of the Page) */}
        <div style={styles.cardsSection}>
          {/* Tour Guides Section - Cards */}
          <div style={styles.guidesSection}>
            <h2 style={styles.sectionTitle}>Meet Our Top Guides</h2>
            <div style={styles.cardGrid}>
              {filteredGuides.map((guide, index) => (
                <div key={index} 
                style={styles.card}
              onClick={() => handleGuideClick(guide)} // On card click, navigate to profile
              >
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
                    <p style={styles.cardActivity}>Activity: {guide.activity}</p>
                    <p style={styles.cardLocation}>Location: {guide.location}</p>
                    <p style={styles.cardLanguage}>Languages: {guide.language}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Styling for the Explore page
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
    width: "100%",
    backgroundImage: "url('/images/coverPage.jpg')", // Full-screen background image for Explore
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

  // Search Bar Section (Below Navbar, on the Right)
  searchBarSection: {
    position: "absolute",
    top: "25vh", // Below the heading section
    right: "20px",
    zIndex: 2, // Ensuring it's above other elements
    width: "300px",
    display: "flex",
    justifyContent: "center",
  },

  searchForm: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },

  searchInput: {
    width: "100%",
    padding: "12px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
  },

  searchButton: {
    background: "none",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
    paddingLeft: "10px",
  },

  // Main Section (Containing Sort and Search Section, and Guides Section)
  mainSection: {
    display: "flex",
    justifyContent: "center", // Center align the content horizontally
    padding: "20px",
  },

  // Sort Section - Left Side (Buttons)
  sortSection: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    padding: "20px",
    width: "200px",
  },

  sortButton: {
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s",
  },

  // Cards Section - Center of the Page
  cardsSection: {
    flex: 1,
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
  },

  guidesSection: {
    textAlign: "center",
    padding: "20px 0",
  },

  sectionTitle: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: "20px",
  },

  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // 3 cards per row
    gap: "20px",
    justifyItems: "center",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    width: "300px",
    textAlign: "center",
    transition: "transform 0.3s ease",
    cursor: "pointer", // Make cursor a pointer on hover
  },

  // Hover Effect
  cardHover: {
    transform: "scale(1.05)", // Scale up the card slightly
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)", // Increase shadow on hover
  },
  cardImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },

  cardContent: {
    padding: "15px",
  },

  cardTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  },

  cardRating: {
    marginBottom: "10px",
  },

  cardDescription: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "10px",
  },

  cardActivity: {
    fontSize: "16px",
    marginBottom: "5px",
  },

  cardLocation: {
    fontSize: "16px",
    marginBottom: "5px",
  },

  cardLanguage: {
    fontSize: "16px",
    color: "#555",
  },
};

export default Explore;
