import "./Header.css";
import { useNavigate, Link } from "react-router-dom";
import { useContext, useEffect, useState, useRef } from "react";

import Contexts from "../../Contexts/Context";
//@ts-ignore
import Instagram from "@mui/icons-material/Instagram";
//@ts-ignore
import TikTokIcon from "../../assets/TiktokIcon";
//@ts-ignore
import { slide as Menu } from "react-burger-menu";
export default () => {
  const goTo = useNavigate();
  //@ts-ignore
  const { instagramLink, tiktokLink } = useContext(Contexts);

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrolled = window.scrollY > 0;
    setIsScrolled(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scroll({ top: 0, left: 0 });
  }, []);

  var x = false;

  useEffect(() => {}, [x]);

  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu unclicked");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu clicked");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu unclicked");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className={isScrolled ? "containerHeaderScrolled" : "containerHeader"}>
      <div className="containerNavLeft">
        <div className="navLeftTxt">
          <h3
            onClick={() => {
              window.scroll({ top: 0, left: 0, behavior: "smooth" });
              goTo("/");
            }}
          >
            HOME
          </h3>

          <h3
            onClick={() => {
              goTo("/services");
            }}
          >
            SERVICES
          </h3>
          <h3
            onClick={() => {
              window.scroll({ top: 1920, left: 0, behavior: "smooth" });
            }}
          >
            CONTACT US
          </h3>
          <h3
            onClick={() => {
              window.scroll({ top: 3200, left: 0, behavior: "smooth" });
            }}
          >
            ABOUT
          </h3>
        </div>
        <div className="containerNavRight">
          <div className="navRightTxt">
            <Link target="_blank" to={instagramLink}>
              <div className="containerMedias">
                <div className="containerInstagramIcon">
                  <Instagram className="instIcon" />
                </div>
                <span>Instagram</span>
              </div>
            </Link>
            <Link target="_blank" to={tiktokLink}>
              <div className="containerMedias">
                <div className="imgTiktok">
                  <TikTokIcon />
                </div>
                <span>Tiktok</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="containerHeaderSmall">
        <div>
          <nav>
            <div className="burger-menu" onClick={updateMenu}>
              <div className={burger_class}></div>
              <div className={burger_class}></div>
              <div className={burger_class}></div>
            </div>
          </nav>
          <div className={menu_class}>
            <div className="navSite">
              <span>
                <a href="/">HOME</a>
              </span>
              <span>
                <a href="/services">SERVICES</a>
              </span>
              <span>
                <a href="/services">CONTACT</a>
              </span>
              <span>
                <a href="/services">REVIEWS</a>
              </span>
              <span>
                <a href="/services">ABOUT</a>
              </span>
            </div>
          </div>
        </div>
        {/* <div className="containerSocialMediaSmlHeader">
          <Link target="_blank" to={instagramLink}>
            <div className="containerHInst">
              <Instagram style={{ width: "30px", height: "20px" }} />
            </div>
          </Link>
          <Link target="_blank" to={tiktokLink}>
            <div className="containerHTiktok">
              <TikTokIcon />
            </div>
          </Link>
        </div> */}
      </div>
    </div>
  );
};
