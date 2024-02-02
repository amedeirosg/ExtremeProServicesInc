import "./ServicesPage.css";
import Header from "../Header/Header.tsx";
//@ts-ignore
import ServicesPImg from "../../assets/ServicePageSH.png";
//@ts-ignore
import BeforeIntImg from "../../assets/b.png";
//@ts-ignore
import AfterIntImg from "../../assets/a.png";
//@ts-ignore
import AfterExtImg from "../../assets/exteriorafter.png";
//@ts-ignore
import BeforeExtImg from "../../assets/exteriorpainting.jpg";
//@ts-ignore
import PressureImg from "../../assets/PressureWashing.png";
//@ts-ignore
import ExamplePressure from "../../assets/pw3.jpg";
//@ts-ignore
import ExamplePressure2 from "../../assets/pw.jpg";
//@ts-ignore
import Drywall from "../../assets/DRYWALLREPAIR.jpg";
//@ts-ignore
import ImgDivide from "../../assets/water.png";
//@ts-ignore
import ImgServices from "../../assets/ServicesCleaning.png";
//@ts-ignore
import LeftClean from "../../assets/commercialCleaning2.png";
import SliceImg from "../../assets/AnotherStyle.png";
import CleaningTitle from "../../assets/commCleaning.png";
import Carpet from "../../assets/carpetcleaning.png";
import Desk from "../../assets/deskcleaning.png";
import Trash from "../../assets/trash.png";
import Window from "../../assets/windowcleaning.png";
import Certified from "../../assets/Certified.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import Footer from "../Footer/Footer.tsx";
export default () => {
  //tl = Time line
  //el = Element
  const tl = useRef();
  const el = useRef();
  const tlc = useRef();
  const elc = useRef();

  useLayoutEffect(() => {
    gsap.to(".containerSubHeader", {
      opacity: 1,
    });

    gsap.to(".containerPaintingService", {
      opacity: 1,
    });
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".containerDryWallContent",
            scrub: true,
            start: "top 900px",
            end: "bottom 900px",
          },
        })
        .fromTo(
          ".containerImgDrywall",
          {
            opacity: 0,
            y: -160,
          },
          { opacity: 1, y: 0 }
        )
        .fromTo(
          ".containerDrywallTxt",
          {
            opacity: 0,
            y: 160,
          },
          { opacity: 1, y: 0 }
        );
    }, el);

    return () => {
      gsap.killTweensOf(".containerPaintingService");
    };
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.context(() => {
      tlc.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".containerTxtCommCleaning",
            scrub: true,
            start: "top 600px",
            end: "bottom 800px",
          },
        })
        .fromTo(
          ".containerTxtCommCleaning",
          { opacity: 0, x: -260 },
          { opacity: 1, x: 0 }
        );
    }, elc);

    return () => {
      gsap.killTweensOf(".containerCleaningServices");
    };
  }, []);

  return (
    <div className="containerServicesPage">
      <Header />
      <div className="containerSubHeader">
        <div className="containerSubHeaderImg">
          <img src={ServicesPImg} alt="serviceImage" />
        </div>
        <div className="containerTitleSH">
          <span>Services</span>
        </div>
      </div>
      <div className="containerPaintingService" ref={el}>
        <div className="resume-interior-painting">
          <div className="title-painting">
            <span>Painting Services</span>
          </div>
          <div className="title-interior-painting">
            <span>Interior Painting</span>
          </div>
          <div className="subtitle-interior-painting">
            <span>
              If you want your walls to look fantastic, it is best to hire a
              professional painter. The Painting Pros always does proper surface
              prep, including repairing drywall before we apply any paint.
            </span>
          </div>
          <div className="interior-img-painting">
            <div className="interior-left-img">
              <img src={BeforeIntImg} alt="painting-image" />
            </div>
            <div className="interior-right-img">
              <img src={AfterIntImg} alt="painting-image" />
            </div>
          </div>
          <div className="resume-exterior-painting">
            <div className="title-exterior-painting">
              <span>Exterior Painting</span>
            </div>
            <div className="subtitle-exterior-painting">
              <span>
                Quality exeterior paint and the right exterior painting services
                work as an added layer of protection from the elements, helping
                to keep your home safe from weather damage, insects and dust.
                The paint can even prevent exterior wood from rotting. Certain
                types of paint can protect from specific element.
              </span>
            </div>
            <div className="exterior-img-painting">
              <div className="exterior-left-img">
                <img src={BeforeExtImg} alt="painting-image" />
              </div>
              <div className="exterior-right-img">
                <img src={AfterExtImg} alt="painting-image" />
              </div>
            </div>
          </div>
        </div>
        <div className="containerImgStyle">
          <div className="containerImgSlice">
            <img src={SliceImg} alt="sliceImg.png" />
          </div>
        </div>
        <div className="containerPressureWashing">
          <div className="containerImgPW">
            <img src={PressureImg} alt="PressureImg.png" />
          </div>
          <div className="containerRightSideImg">
            <div id="firstimgside"className="containerSideImgFirst">
              <img src={ExamplePressure} alt="PressureImg" />
            </div>
            <div className="containerSideImgTwo">
              <img src={ExamplePressure2} alt="PressureImg2" />
            </div>
          </div>
        </div>
        <div className="containerTxtPressureW">
          <span>
            Pressure washing or power washing is 
            <b>
               the use of high-pressure water spray to remove loose paint, mold,
              grime, dust, mud, and dirt from surfaces and objects such as
              buildings, vehicles and concrete surfaces
            </b>
          </span>
        </div>
        <div className="containerDryWall">
          <span>DRYWALL REPAIR</span>
        </div>
        <div className="containerDryWallContent">
          <div className="containerImgDrywall">
            <img src={Drywall} alt="drywallimg.jpg" />
          </div>
          <div className="containerDrywallTxt">
            <span>
              Our team provides drywall repair services to restore the beauty
              and integrity of the walls in your home or office. Drywall is a
              common feature in constructions, but it can suffer damage over
              time. Our experts are trained to address cracks, holes, and other
              imperfections, using techniques such as applying joint compound
              and sanding to achieve flawless results. Count on us to ensure
              that your walls are smooth and beautiful once again.
            </span>
          </div>
        </div>
        <div className="containerDividArea">
          <div className="containerImgDivideArea">
            <img src={ImgDivide} alt="separateService.png" />
          </div>
        </div>
      </div>
      <div className="containerCleaningServices" ref={elc}>
        <div className="containerCleaningTitle">
          <span>Cleaning Services</span>
        </div>
        <div className="containerSubTitleCleaning">
          <span>RELIABLE AND EFFICIENT CLEANING SERVICES</span>
        </div>
        <div className="containerCleaningMakeShine">
          <span>Make Your Space Shine Today</span>
        </div>
        <div className="containerServicesCleaningImg">
          <div className="containerImgServices">
            <img src={ImgServices} alt="imgServicesTxt" />
          </div>
        </div>
        <div className="containerCommercialCleaning">
          <div className="containerTitleCommCleaning">
            <img src={CleaningTitle} alt="CommercialCleaning" />
          </div>
          <div className="containerTxtCommCleaning">
            <div className="containerLeftContentCleaning">
              <img src={LeftClean} alt="imgClean" />
            </div>
            <div className="containerRightContentCleaning">
              <div className="containerTitleRight">
                <span>Desk and Cubicle Areas</span>
              </div>
              <div className="containerRightDesc">
                <span>
                  1. Cleaning carpets as needed. <br></br>
                  2. Cleaning computer screens and dusting keyboards. <br></br>
                  3. Cleaning windows and mirrors. <br></br>
                  4. Disinfecting high-touch surfaces. <br></br>
                  5. Dusting desks, shelves, and other surfaces. <br></br>
                  6. Emptying recycling bins and trash cans. <br></br>
                  7. Vacuuming carpets daily.
                </span>
              </div>
            </div>
          </div>
          <div className="type-cleaning">
            <div className="area-img">
              <div className="first-line">
                <div className="img-left">
                  <div className="left-title">
                    <span>Carpet Cleaning/Vacuum</span>
                  </div>
                  <div className="img-first-line">
                    <img src={Carpet} alt="carpet" />
                  </div>
                </div>
                <div className="img-right">
                  <div className="right-title">
                    <span>Cleaning desks and sreens</span>
                  </div>
                  <div className="img-first-line">
                    <img src={Desk} alt="desk" />
                  </div>
                </div>
              </div>
              <div className="second-line">
                <div className="img-left">
                  <div className="left-title">
                    <span>Carpet Cleaning/Vacuum</span>
                  </div>
                  <div className="img-first-line">
                    <img src={Trash} alt="trash" />
                  </div>
                </div>
                <div className="img-right">
                  <div className="right-title">
                    <span>Cleaning desks and sreens</span>
                  </div>
                  <div className="img-first-line">
                    <img src={Window} alt="window" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-area">
          <div className="callus-today">
            <span>Call us today to get started</span>
          </div>
          <div className="request-service">
            <span>REQUEST A SERVICE</span>
          </div>
          <div className="contact-form">
            <div className="contact-form-title">
              <span>CONTACT US</span>
            </div>
            <div className="contact-questions">
              <div className="first-square">
                <input placeholder="Name..." id="name" type="text"></input>
                <div className="email-phone">
                  <input placeholder="E-mail..." id="email" type="text"></input>

                  <input
                    placeholder="Phone number..."
                    id="phone"
                    type="text"
                  ></input>
                </div>
              </div>
              <div className="second-square">
                <textarea placeholder="Message..."></textarea>
              </div>
              <div className="btn-send">
                <button>Send</button>
              </div>
            </div>
          </div>
        </div>
        <div className="certified">
          <div className="img-certified">
            <img src={Certified} alt="certified" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
