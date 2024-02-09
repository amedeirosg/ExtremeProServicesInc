import "./LandingPage.css";
import Header from "../Header/Header.tsx";
import Title from "../Title/Title.tsx";
import Content from "../Content/Content.tsx";
import Reviews from "../Reviews/Reviews.tsx";
export default () => {
  return (
    <div className="containerLP">
      <Header />
      <Title />
      <Content />
    </div>
  );
};
