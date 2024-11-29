import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Dashboard from "./pages/Home";
import SignIn from "./pages/Login";
import SignUp from "./pages/Register";
import TourGuideSignUp from "./pages/Careers";
import Explore from "./pages/Explore";
import GuideProfile from "./pages/GuideProfile";
import BookingPage from "./pages/BookingPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/careers" element={<TourGuideSignUp />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/guide-profile" element={<GuideProfile />} />
        <Route
          path="/booking-confirmation"
          element={<BookingPage />}
        />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
