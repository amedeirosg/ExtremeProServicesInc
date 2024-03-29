import "./HeaderSmall.css";
import { useNavigate } from "react-router-dom";
import { useContext, useRef } from "react";
import Contexts from "../../Contexts/Context";
//@ts-ignore
import Instagram from "../../assets/SVGs/InstIco.tsx";
//@ts-ignore
import TikTokIcon from "../../assets/SVGs/TiktokIco.tsx";
//@ts-ignore
import HomeIcon from "@mui/icons-material/Home";
import CleaningIcon from "@mui/icons-material/CleaningServices";
import ReviewsIcon from "@mui/icons-material/Reviews";
import InfoIcon from "@mui/icons-material/Info";
import LogoIco from "../../assets/SVGs/LogoIco.tsx";
//@ts-ignore
import LogoHeader from "../../assets/LogoIcoHeader.png";
import useOutsideClick from "../../Hooks/UseOutsideClick.tsx";
//@ts-ignore
import { slide as Menu } from "react-burger-menu";
export default () => {
  const goTo = useNavigate();

  const burgerMenuRef = useRef(null);

  useOutsideClick(burgerMenuRef);

  const { contactMobileRef, aboutRef } = useContext<any>(Contexts);

  const handleMenuClick = () => {
    const burgerMenu = document.getElementById("burgermenu");
    const currentState = burgerMenu?.getAttribute("data-state");

    if (currentState == "close" || currentState == "init")
      burgerMenu?.setAttribute("data-state", "open");
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
                contactMobileRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }, 100);
            }}
          >
            GET FREE ESTIMATE
          </button>
        </div>
      </div>
      <div
        ref={burgerMenuRef}
        className="burger-menu"
        id="burgermenu"
        data-state="init"
      >
        <div className="wrapper" onClick={() => handleMenuClick()}>
          <div id="bar1" className="bar-burger-menu"></div>
          <div id="bar2" className="bar-burger-menu"></div>
          <div id="bar3" className="bar-burger-menu"></div>
        </div>
        <div className="burger-menu-options">
          <div className="options">
            <LogoIco />
            <div onClick={() => goTo("/")} className="eachoption">
              <HomeIcon />
              <span>Home</span>
            </div>
            <div onClick={() => goTo("/services")} className="eachoption">
              <CleaningIcon />
              <span>Services</span>
            </div>
            <div onClick={() => goTo("/reviews")} className="eachoption">
              <ReviewsIcon />
              <span>Reviews</span>
            </div>
            <div
              onClick={() => {
                goTo("/");
                setTimeout(() => {
                  aboutRef.current?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className="eachoption"
            >
              <InfoIcon />
              <span>About</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
