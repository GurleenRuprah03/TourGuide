import React from "react";
import Slider from "react-slick";
import "../styles/Carousel.css"; // For custom styling


const Carousel = () => {
  const images = [
    {
      src: "/images/paris.png",
      alt: "Paris",
      caption: "Explore the beauty of Paris",
    },
    {
      src: "/images/tokyo.png",
      alt: "Tokyo",
      caption: "Discover the charm of Tokyo",
    },
    {
      src: "/images/sydney.png",
      alt: "Sydney",
      caption: "Experience the wonders of Sydney",
    },
    {
      src: "/images/dubai.png",
      alt: "Dubai",
      caption: "Visit the luxurious Dubai",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div style={styles.container}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} style={styles.slide}>
            <img src={image.src} alt={image.alt} style={styles.image} />
            <div style={styles.caption}>{image.caption}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};


const styles = {
    container: { maxWidth: "800px", margin: "auto", padding: "20px" },
    slide: { position: "relative", textAlign: "center", display: "flex", justifyContent: "center", },
    image: {
        width: "100%", // Makes the image fill the container's width
        height: "400px", // Set a fixed height for consistency
        objectFit: "cover", // Ensures the image fills the container proportionally
        borderRadius: "10px",
        display: "block",
    },
    caption: {
      position: "absolute",
      bottom: "10%", // Adjust position relative to the slide
      left: "50%",
      transform: "translateX(-50%)", // Center the caption horizontally
      backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent background
      color: "#fff",
      padding: "10px 20px",
      borderRadius: "5px",
      fontSize: "18px",
      zIndex: 1, // Ensure caption is above the image
      whiteSpace: "nowrap", // Prevent text wrapping
      maxWidth: "90%",
    },
  };
  

export default Carousel;
