import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import ServicesPage from './Components/ServicesPage/ServicesPage.tsx'
import Reviews from './Components/Reviews/Reviews.tsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contexts from "./Contexts/Context.tsx";
function App() {
  var instagramLink = "https://www.instagram.com/extremeproservicesinc/";
  var tiktokLink = "https://www.tiktok.com/@extremeproservicesinc";

  return (
    <>
      <Contexts.Provider value={{ instagramLink, tiktokLink }}>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/services" element = {<ServicesPage/>}/>
            <Route path="/reviews" element ={<Reviews/>}/>
          </Routes>
        </Router>
      </Contexts.Provider>
    </>
  );
}

export default App;
