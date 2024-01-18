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
export default () => {
  //@ts-ignore
  const { tiktokLink, instagramLink } = useContext(Contexts);

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
            desc1={"- House & Office Cleaning "}
            desc2={"- Deep cleaning (weekly cleaning)"}
            desc3={"- Move-in and move-out "}
            desc4={"- Windows cleaning "}
            desc5={"- Spring cleaning "}
            desc6={"- Housekeeping "}
            desc7={"- Laundry "}
            desc8={"- Closet organization"}
          />

          <InfoBox
            serviceTitle="Painting Service"
            sourceImg={Cleaning1}
            sourceImgT={Cleaning2}
            desc1={"- Paint Services"}
            desc2={"- Interior and exterior "}
            desc3={"- Pressure washing "}
            desc4={"- Deck "}
            desc5={"- Stain "}
            desc6={""}
            desc7={""}
            desc8={""}
          />
        </div>

        <ContactUs />
        <div className="containerAboutUs">
          <div className="containerTitleAbout">
            <span>About Us</span>
            <div className="sectionLine">
              <hr></hr>
            </div>
          </div>
          <div className="containerDescAbout">
            <div className="containerTxtAbout">
              <div className="containerLeftSAbout">
                <span id="title">
                  Extreme Pro Services Inc is a Cleaning Company
                </span>
                <br></br>
                <div className="containerSubtitle">
                  <span id="subtitle">
                    We pride ourselves on being honest and competitive with our
                    pricing. Customer satisfaction is our number one priority.
                    <br></br>
                    <br></br>
                    <b>Call today for your free estimate!</b>
                    <br></br>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="containerRightSAbout">
                <div className="containerContactUs">
                  <div className="containerContact">
                    <div className="icons">
                      <Phone className="Phone" />
                      <b>PHONE</b>
                    </div>
                    <span>+1 (978) 328-8859</span>
                  </div>
                  <div className="containerContact">
                    <div className="icons">
                      <Location />
                      <b>LOCATION</b>
                    </div>
                    <span>Massachusetts and New Hampshire</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
