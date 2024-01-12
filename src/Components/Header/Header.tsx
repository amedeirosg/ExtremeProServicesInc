import "./Header.css";
import Instagram from "@mui/icons-material/Instagram";
import { useNavigate, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Contexts from "../../Contexts/Context";

//@ts-ignore
import Tiktok from "../../assets/Tiktok.png";
export default () => {
  //@ts-ignore

  const { instagramLink, tiktokLink } = useContext(Contexts);

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrolled = window.scrollY > 100;
    setIsScrolled(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={isScrolled ? "containerHeaderScrolled" : "containerHeader"}>
      <div className="containerNavLeft">
        <div className="navLeftTxt">
          <h3
            onClick={() => {
              window.scroll({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            HOME
          </h3>
          <h3
            onClick={() => {
              window.scroll({ top: 480, left: 0, behavior: "smooth" });
            }}
          >
            SERVICES
          </h3>
          <h3
            onClick={() => {
              window.scroll({ top: 2300, left: 0, behavior: "smooth" });
            }}
          >
            ABOUT
          </h3>
          <h3>REVIEWS</h3>
          <h3
            onClick={() => {
              window.scroll({ top: 1380, left: 0, behavior: "smooth" });
            }}
          >
            CONTACT US
          </h3>
        </div>
      </div>
      <div className="containerNavRight">
        <div className="navRightTxt">
          <Link target="_blank" to={instagramLink}>
            <div className="containerMedias">
              <Instagram />
              <span>Instagram</span>
            </div>
          </Link>

          <Link target="_blank" to={tiktokLink}>
            <div className="containerMedias">
              <div className="imgTiktok">
                <img src={Tiktok} />
              </div>
              <span>Tiktok</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
