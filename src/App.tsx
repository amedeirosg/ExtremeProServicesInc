import "./App.css";
import { useState, useEffect } from "react";
import LandingPage from "./Components/LandingPage/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contexts from "./Contexts/Context.tsx";
function App() {
  var instagramLink = "https://www.instagram.com/extremeproservicesinc/";
  var tiktokLink = "https://www.tiktok.com/@extremeproservicesinc";
  

  return (
    <>
      <Contexts.Provider value={{ instagramLink, tiktokLink}}>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </Router>
      </Contexts.Provider>
    </>
  );
}

export default App;
