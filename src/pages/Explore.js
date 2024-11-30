import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Explore = () => {
  const [guides, setGuides] = useState([
    {
      image: "/images/guide2.jpg",
      name: "John Doe",
      rating: 4.2,
      gender: "Male",
      language: "English, French",
      activity: "Trekking",
      location: "Paris, France",
      description: "Explore the hidden gems of Paris with an experienced local guide.",
      price: "$150",
      availability: [
        { date: "2024-12-01", time: "10:00 AM" },
        { date: "2024-12-02", time: "2:00 PM" },
      ]
    },
    {
      image: "/images/guide1.jpg",
      name: "Jane Smith",
      rating: 3.0,
      gender: "Female",
      language: "English, Japanese",
      activity: "Hiking",
      location: "Tokyo, Japan",
      description: "Let me take you through the cultural heart of Tokyo, Japan.",
      price: "$200",
      availability: [
        { date: "2024-12-07", time: "11:00 AM" },
        { date: "2024-12-02", time: "6:00 AM" },
      ]
    },
    {
      image: "/images/guide3.jpg",
      name: "Davina Lee",
      rating: 4.3,
      gender: "Female",
      language: "English, Chinese",
      activity: "Trekking",
      location: "Sydney, Australia",
      description: "Sydney's beauty awaits you! Join me for an unforgettable tour.",
      price: "$180",
      availability: [
        { date: "2024-12-07", time: "11:00 AM" },
        { date: "2024-12-02", time: "6:00 AM" },
      ]
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
      price: "$250",
      availability: [
        { date: "2024-12-07", time: "11:00 AM" },
        { date: "2024-12-02", time: "6:00 AM" },
      ]
    },
    {
      image: "/images/guide5.jpg",
      name: "Johny Gracea",
      rating: 3.8,
      gender: "Male",
      language: "German, English",
      activity: "Sight Seeing",
      location: "New York, US",
      description: "Experience the Time Square.",
      price: "$80",
      availability: [
        { date: "2024-12-07", time: "11:00 AM" },
        { date: "2024-12-02", time: "6:00 AM" },
      ]
    },
    {
      image: "/images/guide7.jpg",
      name: "Simone",
      rating: 4.2,
      gender: "Female",
      language: "Punjabi, English",
      activity: "Sight Seeing",
      location: "Victoria, BC",
      description: "Experience the royal times in Victoria.",
      price: "$150",
      availability: [
        { date: "2024-12-07", time: "11:00 AM" },
        { date: "2024-12-02", time: "6:00 AM" },
      ]
    },
    {
      image: "/images/guide6.jpg",
      name: "Grace Lavender",
      rating: 5.0,
      gender: "Male",
      language: "French, English",
      activity: "Trekking",
      location: "Melbourne, Australia",
      description: "Adventure is fun always.",
      price: "$350",
      availability: [
        { date: "2024-12-07", time: "11:00 AM" },
        { date: "2024-12-02", time: "6:00 AM" },
      ]
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
    const sortedGuides = [...guides].sort((a, b) => {
      if (order === "asc") {
        return a.rating - b.rating;
      } else if (order === "desc") {
        return b.rating - a.rating;
      }
      return 0;
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
    handleSearch({ target: { value: searchQuery } });
  };

  // Handle card click and navigate to guide profile
  const handleGuideClick = (guide) => {
    navigate(`/guide-profile`, { state: { guide } });
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <h1 style={styles.heroHeading}>Explore Our Tour Guides</h1>
        <p style={styles.heroSubheading}>Find the best guides for your next adventure.</p>
      </div>

    {/* Search Bar Section */}
    <div style={styles.searchBarSection}>
        <form onSubmit={handleSubmitSearch} style={styles.searchForm}>
          <div style={styles.searchInputContainer}>
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
          </div>
        </form>
      </div>

      {/* Sort Buttons Section */}
      <div style={styles.sortButtonsSection}>
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

      {/* Main Section */}
      <div style={styles.mainSection}>
        {/* Cards Section */}
        <div style={styles.cardsSection}>
          <h2 style={styles.sectionTitle}>Meet Our Top Guides</h2>
          <div style={styles.cardGrid}>
            {filteredGuides.map((guide, index) => (
              <div
                key={index}
                style={styles.card}
                onClick={() => handleGuideClick(guide)} // On card click, navigate to profile
              >
                <img src={guide.image} alt={guide.name} style={styles.cardImage} />
                <div style={styles.cardContent}>
                  <h3 style={styles.cardTitle}>{guide.name}</h3>
                  <div style={styles.cardRating}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} style={i < guide.rating ? styles.filledStar : styles.emptyStar}>
                        ★
                      </span>
                    ))}
                  </div>
                  <p style={styles.cardLocation}>{guide.location}</p>
                  <p style={styles.cardPrice}>{guide.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "100%",
    margin: "0 auto",
    padding: "20px",
    backgroundImage: "url('../images/coverPage.jpg')", // Full-screen background image
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
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
    fontSize: "36px",
    marginBottom: "10px",
  },
  heroSubheading: {
    fontSize: "18px",
    color: "#666",
  },
  searchBarSection: {
    marginBottom: "20px",
    textAlign: "center",
  },
  searchForm: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
  },
  searchInputContainer: {
    position: "relative",
    marginTop:"10px",
  },
  searchInput: {
    padding: "10px 40px 10px 20px", // Add padding for the icon
    fontSize: "16px",
    border: "1px solid #ddd",
    borderRadius: "50px", // Rounded corners
    width: "300px",
    outline: "none",
  },
  searchButton: {
    position: "absolute",
    right: "12px", // Position the search icon to the left inside the input field
    top: "45%",
    transform: "translateY(-50%)",
    backgroundColor: "transparent",
    border: "none",
    color: "#888",
    fontSize: "18px",
    cursor: "pointer",
  },
  sortButtonsSection: {
    textAlign: "center",
    marginBottom: "30px",
  },
  sortButton: {
    padding: "10px 20px",
    backgroundColor: "#f1f1f1",
    color: "darkblue",
    border: "1px solid #ddd",
    borderRadius: "5px",
    margin: "5px",
    cursor: "pointer",
    fontSize: "14px",
  },
  mainSection: {
    textAlign: "center",
  },
  cardsSection: {
    marginTop: "30px",
  },
  sectionTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    border: "1px solid #ddd",
    backgroundColor:"white",
    borderRadius: "10px",
    overflow: "hidden",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
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
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  cardRating: {
    marginBottom: "10px",
  },
  filledStar: {
    color: "#FFD700",
  },
  emptyStar: {
    color: "#ddd",
  },
  cardLocation: {
    fontSize: "14px",
    color: "#666",
  },
  cardPrice: {
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "10px",
  },
};

export default Explore;
