import "./HeaderSmall.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import Contexts from "../../Contexts/Context";
//@ts-ignore
import Instagram from "../../SVGs/InstIco.tsx";
//@ts-ignore
import TikTokIcon from "../../SVGs/TiktokIco.tsx";
//@ts-ignore
import HomeIcon from "@mui/icons-material/Home";
import CleaningIcon from "@mui/icons-material/CleaningServices";
import Contact from "@mui/icons-material/RecentActors";
import ReviewsIcon from "@mui/icons-material/Reviews";
import InfoIcon from "@mui/icons-material/Info";
import LogoIco from "../../SVGs/LogoIco.tsx";
//@ts-ignore
import LogoHeader from "../../assets/LogoIcoHeader.png";
//@ts-ignore
import { slide as Menu } from "react-burger-menu";
export default () => {
  const goTo = useNavigate();
  //@ts-ignore
  const {
    //@ts-ignore
    facebookLink,
    //@ts-ignore
    instagramLink,
    //@ts-ignore
    tiktokLink,
    //@ts-ignore
    contentRef,
    //@ts-ignore
    quoteRef,
    //@ts-ignore
    formDeviceRef,
    //@ts-ignore
    aboutRef,
  } = useContext(Contexts);

  const handleMenuClick = () => {
    const burgerMenu = document.getElementById("burgermenu");
    const currentState = burgerMenu?.getAttribute("data-state");

    console.log("acessou");

    if (currentState == "close") burgerMenu?.setAttribute("data-state", "open");
    if (currentState == "open") burgerMenu?.setAttribute("data-state", "close");
  };

  return (
    <div className="containerHeaderSmall">
      <div className="header-small-logo-img">
        <LogoIco />
        <div className="header-small-get-free-quote">
          <button
            onClick={() => {
              goTo("/services");
              setTimeout(() => {
                console.log(formDeviceRef);
                formDeviceRef.current?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
          >
            GET FREE ESTIMATE
          </button>
        </div>
      </div>
      <div
        className="burger-menu"
        id="burgermenu"
        data-state="close"
        onClick={() => handleMenuClick()}
      >
        <div className="bar-burger-menu"></div>
        <div className="bar-burger-menu"></div>
        <div className="bar-burger-menu"></div>
        <div className="burger-menu-options">
          <div className="options">
            <LogoIco/>
            <div className="eachoption">
              <HomeIcon />
              <span>Home</span>
            </div>
            <div className="eachoption">
              <CleaningIcon />
              <span>Services</span>
            </div>
            <div className="eachoption">
              <ReviewsIcon />
              <span>Reviews</span>
            </div>
            <div className="eachoption">
              <Contact />
              <span>Contact</span>
            </div>
            <div className="eachoption">
              <InfoIcon />
              <span>About</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
