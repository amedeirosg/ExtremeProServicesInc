import "./Content.css";
import InfoBox from "../InfoBox/InfoBox.tsx";
import Phone from "@mui/icons-material/LocalPhone";
import Location from "@mui/icons-material/LocationOn";
import ContactUs from "../ContactUs/ContactUs.tsx";
import WhoWeAre from "../WhoWeAre/WhoWeAre.tsx";
import { useContext } from "react";
import Contexts from "../../Contexts/Context.tsx";
//@ts-ignore
import Tiktok from "../../assets/Tiktok.png";
//@ts-ignore
import Cleaning1 from "../../assets/Cleaning.jpg";
//@ts-ignore
import Cleaning2 from "../../assets/Cleaning2.jpg";
//@ts-ignore
import PaintingAfter from "../../assets/before.png";
//@ts-ignore
import PaingintBefore from "../../assets/after.png";
export default () => {
  //@ts-ignore
  const { tiktokLink, instagramLink } = useContext(Contexts);
  //@ts-ignore
  const { aboutRef } = useContext(Contexts);
  return (
    <div className="containerWhoWeArea">
      <WhoWeAre />
      <div className="containerContent">
        <div className="containerTitleContent">
          <span>Services</span>
        </div>
        <div className="containerInfoBoxes">
          <InfoBox
            serviceTitle="Residential & Commercial Cleaning"
            sourceImg={Cleaning1}
            sourceImgT={Cleaning2}
            desc1={"- Commercial and Residential Cleaning Services"}
            desc2={"- Move-in and move-out"}
            desc3={" - Windows cleaning "}
            desc4={"- Spring cleaning "}
            desc5={"- Customized Services"}
            desc6={""}
            desc7={" "}
            desc8={""}
          />

          <InfoBox
            serviceTitle="Painting Service"
            sourceImg={PaintingAfter}
            sourceImgT={PaingintBefore}
            desc1={"- Painting Services"}
            desc2={"- Commercial and Residential Painting"}
            desc3={"- Exterior Painting"}
            desc4={"- Drywall Repair "}
            desc5={"- Pressure Washing"}
            desc6={""}
            desc7={""}
            desc8={""}
          />
        </div>

        <ContactUs />
        <div ref={aboutRef} className="containerAboutUs">
          <div className="containerAboutUsTitle">
            <span>About us</span>
          </div>
          <div className="containerDesc">
            <div className="containerLeftDesc">
              <div className="containerLeftTitle">
                <span>Extreme Pro Services Inc </span>
              </div>
              <div className="containerLeftDescTxt">
                <span>
                  We pride ourselves on being honest and competitive with our
                  prioring Customer satisfaction is our number one priority
                  <br></br>
                  <br></br>
                  <b>Call today for you free estimate!</b>
                </span>
              </div>
            </div>
            <div className="containerRightDesc">
              <div className="containerPhoneAndLoc">
                <div className="containerPhone">
                  <div className="containerIconP">
                    <Phone />
                    <span>Phone</span>
                  </div>
                  <span id="number">+1 (978) 328-8859</span>
                </div>
                <div className="containerLoc">
                  <div className="containerIconL">
                    <Location />
                    <span>Location</span>
                  </div>
                  <span id="location">Massachusetts and New Hampshire</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
