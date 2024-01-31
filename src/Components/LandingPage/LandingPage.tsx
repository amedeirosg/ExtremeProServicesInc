import "./LandingPage.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header.tsx";
import Title from "../Title/Title.tsx";
import Content from "../Content/Content.tsx";
export default () => {
  return (
    <div className="containerLP">
      <Header />
      <Title />
      <Content />
    
    </div>
  );
};
