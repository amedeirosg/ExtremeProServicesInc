import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import ServicesPage from "./Components/ServicesPage/ServicesPage.tsx";
import Reviews from "./Components/Reviews/Reviews.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contexts from "./Contexts/Context.tsx";
import { useRef } from "react";
function App() {
  var instagramLink = "https://www.instagram.com/extremeproservicesinc/";
  var tiktokLink = "https://www.tiktok.com/@extremeproservicesinc";
  var facebookLink =
    "https://www.facebook.com/people/Extreme-Pro-Services-Inc/61555781556888/?mibextid=LQQJ4d";
  var contentRef = useRef<HTMLDivElement | null>(null);
  var quoteRef = useRef<HTMLDivElement | null>(null);
  var formDeviceRef = useRef<HTMLDivElement | null>(null);
  var aboutRef = useRef<HTMLDivElement | null>(null);
  var contactMobileRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <Contexts.Provider
        value={{
          facebookLink,
          instagramLink,
          tiktokLink,
          contentRef,
          quoteRef,
          formDeviceRef,
          aboutRef,
          contactMobileRef
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </Router>
      </Contexts.Provider>
    </>
  );
}

export default App;
