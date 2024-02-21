import "./Header.css";
import { useNavigate, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import Contexts from "../../Contexts/Context";
//@ts-ignore
import Instagram from "@mui/icons-material/Instagram";
//@ts-ignore
import TikTokIcon from "../../assets/TiktokIcon";
//@ts-ignore
import HomeIcon from "@mui/icons-material/Home";
import CleaningIcon from "@mui/icons-material/CleaningServices";
import Facebook from "@mui/icons-material/Facebook";
import Contact from "@mui/icons-material/RecentActors";
import ReviewsIcon from "@mui/icons-material/Reviews";
import InfoIcon from "@mui/icons-material/Info";
import Phone from "@mui/icons-material/Phone";
import Mail from "@mui/icons-material/Mail";
//@ts-ignore
import LogoHeader from '../../assets/LogoIcoHeader.png'
//@ts-ignore
import { slide as Menu } from "react-burger-menu";

export default () => {
  const goTo = useNavigate();
  //@ts-ignore
  const { facebookLink, instagramLink, tiktokLink, contentRef } =
    useContext(Contexts);

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

  return (
    <div className={isScrolled ? "containerHeaderScrolled" : "containerHeader"}>
      <div className="containerNavLeft">
        <div className="header-nav-socialmedia">
          <div className="header-fb-insta-tiktok">
            <Link target="_blank" to={instagramLink}>
              <Instagram style={{ fontSize: "2rem" }} className="instIco" />
            </Link>
            <Link target="_blank" to={facebookLink}>
              <Facebook style={{ fontSize: "2rem" }} className="fbIco" />
            </Link>
          </div>
          <div className="header-telephone">
            <Phone style={{ fontSize: "2rem" }} className="phoneIco" />
            <span>+1 (978) 328-8859</span>
          </div>
          <div className="header-email-contact">
            <Mail style={{ fontSize: "2rem" }} className="mailIco" />
            <span>extremeproservicesinc@gmail.com</span>
          </div>
          <div className="header-get-a-quote">
            <button>GET A FREE ESTIMATE</button>
          </div>
        </div>
        <div className="navLeftTxt">
          <div className="header-nav-logo-company">
            <img src={LogoHeader} alt="logoCompany.png"/>
          </div>
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
              goTo("/");
              setTimeout(() => {
                contentRef.current.scrollIntoView({ behavior: "smooth" });
              }, 100);

              // window.scrollTo({ top: 2050, left: 0, behavior: "smooth" });
            }}
          >
            CONTACT US
          </h3>
          <h3
            onClick={() => {
              goTo("/reviews");
            }}
          >
            REVIEWS
          </h3>
          <h3
            onClick={() => {
              goTo("/");
              setTimeout(() => {
                window.scroll({ top: 3200, left: 0, behavior: "smooth" });
              }, 100);
            }}
          >
            ABOUT
          </h3>
        </div>
        {/* <div className="containerNavRight">
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
        </div> */}
      </div>

      <div className="containerHeaderSmall">
        <Menu className="menuBurger">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <HomeIcon className="material-icons" />
            <a href="/">
              <span>Home</span>
            </a>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <CleaningIcon className="material-icons" />
            <a id="services" href="/services">
              Services
            </a>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Contact className="material-icons" />
            <a id="contact" href="/">
              Contact
            </a>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <ReviewsIcon className="material-icons" />
            <a id="reviews" href="/reviews">
              Reviews
            </a>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <InfoIcon className="material-icons" />
            <a id="reviews" href="/">
              About
            </a>
          </div>
        </Menu>
        {/* <div>
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
        </div> */}
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
