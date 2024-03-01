import "./Header.css";
import { useNavigate, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import Contexts from "../../Contexts/Context";
//@ts-ignore
import Instagram from "../../SVGs/InstIco.tsx";
//@ts-ignore
import TikTokIcon from "../../SVGs/TiktokIco.tsx";
//@ts-ignore
import HomeIcon from "@mui/icons-material/Home";
import PhoneIco from "../../SVGs/PhoneIco.tsx";
import MailIco from "../../SVGs/MailIco.tsx";
import FbIco from "../../SVGs/FbIco.tsx";
//@ts-ignore
import LogoHeader from "../../assets/LogoIcoHeader.png";
//@ts-ignore
import { slide as Menu } from "react-burger-menu";
import HeaderSmall from "../HeaderSmall/HeaderSmall.tsx";

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

  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

  useEffect(() => {
    if (window.innerWidth > 1000) {
      setIsLargeScreen(true);
    } else {
      setIsLargeScreen(false);
    }
  }, [window.innerWidth]);

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

  return (
    <>
      {isLargeScreen ? (
        <div
          className={isScrolled ? "containerHeaderScrolled" : "containerHeader"}
        >
          <div className="containerNavLeft">
            <div className="header-nav-socialmedia">
              <div className="header-fb-insta-tiktok">
                <Link target="_blank" to={instagramLink}>
                  <Instagram className="instIco" />
                </Link>
                <Link target="_blank" to={facebookLink}>
                  <FbIco className="fbIco" />
                </Link>
                <Link target="_blank" to={tiktokLink}>
                  <TikTokIcon className="tktokIco" />
                </Link>
              </div>
              <div className="header-telephone">
                <PhoneIco className="phoneIco" />
                <span>+1 (978) 328-8859</span>
              </div>
              <div className="header-email-contact">
                <a href="mailto:extremeproservicesinc@gmail.com">
                  <MailIco className="mailIco" />
                </a>
                <span>extremeproservicesinc@gmail.com</span>
              </div>
              <div className="header-get-a-quote">
                <button
                  onClick={() => {
                    goTo("/services");
                    setTimeout(() => {
                      quoteRef.current?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                >
                  GET A FREE ESTIMATE
                </button>
              </div>
            </div>
            <div className="navLeftTxt">
              <div className="header-nav-logo-company">
                <img src={LogoHeader} alt="logoCompany.png" />
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
                    aboutRef.current.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
              >
                ABOUT
              </h3>
            </div>
          </div>
        </div>
      ) : (
        <HeaderSmall />
      )}
    </>
  );
};
