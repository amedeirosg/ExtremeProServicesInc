import "./ServicesPage.css";
import Header from "../Header/Header.tsx";
//@ts-ignore
import ServicesPImg from "../../assets/bcServicesImg.png";
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
import ImgDivide2 from "../../assets/cleaning-phone-img.png";

//@ts-ignore
import ImgServices from "../../assets/ServicesCleaning.png";
//@ts-ignore
import ImgServicesPhone from "../../assets/infophone.png";
//@ts-ignore
import ImgServicesPhone2 from "../../assets/infophone2.png";
//@ts-ignore
import ImgServicesPhone3 from "../../assets/littlephone.png";
//@ts-ignore
import LeftClean from "../../assets/commercialCleaning2.png";
//@ts-ignore
import SliceImg from "../../assets/AnotherStyle.png";
//@ts-ignore
import CleaningTitle from "../../assets/commCleaning.png";
//@ts-ignore
import Carpet from "../../assets/carpetcleaning.png";
//@ts-ignore
import Desk from "../../assets/deskcleaning.png";
//@ts-ignore
import Trash from "../../assets/trash.png";
//@ts-ignore
import Window from "../../assets/windowcleaning.png";
//@ts-ignore
import Certified from "../../assets/Certified.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useEffect, useContext } from "react";
import Footer from "../Footer/Footer.tsx";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { InputMask, InputMaskChangeEvent } from "primereact/inputmask";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import Contexts from "../../Contexts/Context.tsx";

export default () => {
  //tl = Time line
  //el = Element
  //@ts-ignore
  const { quoteRef, formDeviceRef } = useContext(Contexts);
  const tl = useRef();
  const el = useRef();
  const tlc = useRef();
  const elc = useRef();
  const elp = useRef();
  const tlp = useRef();
  const tlMid = useRef();
  const elMid = useRef();
  const [errorEmail, setErrorEmail] = useState(false);
  const [successEmail, setSuccessEmail] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState<string | undefined>();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const errDialog = (
    <div>
      <Button
        label="Ok"
        icon="pi pi-check"
        onClick={() => setErrorEmail(false)}
        autoFocus
      />
    </div>
  );

  const successDialog = (
    <div>
      <Button
        label="Ok"
        icon="pi pi-check"
        onClick={() => setSuccessEmail(false)}
        autoFocus
      />
    </div>
  );

  const [sizeOfScreen, setSizeOfSCreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSizeOfSCreen({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      //@ts-ignore
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
  }, [sizeOfScreen]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.context(() => {
      //@ts-ignore
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
  }, [sizeOfScreen]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (sizeOfScreen.width > 900) {
      gsap.context(() => {
        //@ts-ignore
        tlp.current = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".interior-img-painting",
              scrub: true,
              start: "top 920px",
              end: "bottom 700px",
            },
          })
          .fromTo(
            ".interior-left-img",
            {
              opacity: 0,
              x: -260,
            },
            { opacity: 1, x: 0 }
          )
          .fromTo(
            ".interior-right-img",
            {
              opacity: 0,
              x: 260,
            },
            { opacity: 1, x: 0 }
          );
      }, elp);
    } else {
      gsap.context(() => {
        //@ts-ignore
        tlp.current = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".interior-img-painting",
              scrub: true,
              start: "top 800px",
              end: "bottom 750px",
            },
          })
          .fromTo(
            ".interior-left-img",
            {
              opacity: 0,
            },
            { opacity: 1, x: 0 }
          )
          .fromTo(
            ".interior-right-img",
            {
              opacity: 0,
            },
            { opacity: 1, x: 0 }
          );
      }, elp);
    }

    return () => {
      gsap.killTweensOf(".resume-interior-painting");
    };
  }, [sizeOfScreen]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (sizeOfScreen.width > 900) {
      gsap.context(() => {
        //@ts-ignore
        tlp.current = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".exterior-img-painting",
              scrub: true,
              start: "top 920px",
              end: "bottom 700px",
            },
          })
          .fromTo(
            ".exterior-left-img",
            {
              opacity: 0,
              x: 0,
            },
            { opacity: 1, y: 0 }
          )
          .fromTo(
            ".exterior-right-img",
            {
              opacity: 0,
              x: -260,
            },
            { opacity: 1, x: 0 }
          );
      }, elp);
    } else {
      gsap.context(() => {
        //@ts-ignore
        tlp.current = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".exterior-img-painting",
              scrub: true,
              start: "top 800px",
              end: "bottom 750px",
            },
          })
          .fromTo(
            ".exterior-left-img",
            {
              opacity: 0,
            },
            { opacity: 1, y: 0 }
          )
          .fromTo(
            ".exterior-right-img",
            {
              opacity: 0,
            },
            { opacity: 1, x: 0 }
          );
      }, elp);
    }

    return () => {
      gsap.killTweensOf(".resume-exterior-painting");
    };
  }, [sizeOfScreen]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (sizeOfScreen.width > 900) {
      gsap.context(() => {
        //@ts-ignore
        tlMid.current = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".containerImgPW",
              scrub: true,
              start: "top 700px",
              end: "bottom 700px",
            },
          })
          .fromTo(
            ".containerImgPW",
            {
              opacity: 0,
            },
            { opacity: 1 }
          )
          .fromTo(
            ".containerRightSideImg",
            {
              opacity: 0,
            },
            { opacity: 1 }
          )
          .fromTo(
            ".containerSideImgTwo",
            {
              opacity: 0,
            },
            { opacity: 1 }
          );
      }, elMid);
    } else {
      gsap.context(() => {
        //@ts-ignore
        tlMid.current = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".containerImgPW",
              scrub: true,
              start: "top 800px",
              end: "bottom 750px",
            },
          })
          .fromTo(
            ".containerImgPW",
            {
              opacity: 0,
            },
            { opacity: 1 }
          )
          .fromTo(
            ".containerRightSideImg",
            {
              opacity: 0,
            },
            { opacity: 1 }
          )
          .fromTo(
            ".containerSideImgTwo",
            {
              opacity: 0,
            },
            { opacity: 1 }
          );
      }, elMid);
    }
  }, [sizeOfScreen]);

  const handleEmailChange = (e: any) => {
    e.preventDefault();
    //@ts-ignore
    const isValid = emailRegex.test(email);

    if (
      //@ts-ignore
      name == "" ||
      //@ts-ignore
      email == "" ||
      //@ts-ignore
      message == "" ||
      phone == ""
    ) {
      setErrorEmail(true);
      return;
    }

    const templateParams = {
      //@ts-ignore
      from_name: name,
      //@ts-ignore
      message: message,
      //@ts-ignore
      email: email,
      //@ts-ignore

      phone: phone,
    };

    emailjs
      .send(
        "service_blnwoe5",
        "template_7bjrdzd",
        templateParams,
        "9AWbd-Dofntnu35lF"
      )
      .then(
        (res) => {
          console.log("Email sent!", res.status, res.text);
          setName("");
          setPhone("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("ERROR:", err);
        }
      );

    setSuccessEmail(true);
  };

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
      {/* @ts-ignore */}
      <div className="containerPaintingService" ref={el}>
        {/* @ts-ignore */}
        <div className="resume-interior-painting" ref={elp}>
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
        {/* @ts-ignore */}
        <div className="containerPressureWashing" ref={elMid}>
          <div className="containerImgPW">
            <img src={PressureImg} alt="PressureImg.png" />
          </div>
          <div className="containerRightSideImg">
            <div id="firstimgside" className="containerSideImgFirst">
              <img src={ExamplePressure} alt="PressureImg" />
            </div>
            <div className="containerSideImgTwo">
              <img src={ExamplePressure2} alt="PressureImg2" />
            </div>
          </div>
        </div>
        <div className="containerTxtPressureW">
          <span>
            Pressure washing or power washing is{" "}
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
            <img id="imgDivide" src={ImgDivide} alt="separateService.png" />
          </div>
        </div>
      </div>
      {/* @ts-ignore */}
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
            <img id="pc" src={ImgServices} alt="imgServicesTxt" />
            <img
              id="phoneServices"
              src={ImgServicesPhone}
              alt="imgServicesTxt"
            />
            <img
              id="phoneServices2"
              src={ImgServicesPhone2}
              alt="imgServicesTxt"
            />

            <img
              id="phoneServices3"
              src={ImgServicesPhone3}
              alt="imgServicesTxt"
            />
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
              <div className="containerRightDescServices">
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
          <div ref={formDeviceRef}className="type-cleaning">
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
                    <span>Recycling Bins/Trash Cans</span>
                  </div>
                  <div className="img-first-line">
                    <img src={Trash} alt="trash" />
                  </div>
                </div>
                <div className="img-right">
                  <div className="right-title">
                    <span>Cleaning Window</span>
                  </div>
                  <div className="img-first-line">
                    <img src={Window} alt="window" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref={quoteRef} className="contact-area">
          <div className="callus-today">
            <span>Call us today to get started</span>
          </div>
          <div className="request-service">
            <span id="desktop">REQUEST A SERVICE</span>
          </div>
          <form className="contact-form">
            <div className="contact-form-title">
              <span>CONTACT US</span>
            </div>
            <div className="contact-questions">
              <div className="first-square">
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Name..."
                  id="name"
                  type="text"
                ></input>
                <div className="email-phone">
                  <input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="E-mail..."
                    id="email"
                    type="text"
                  ></input>

                  <div className="containerInputMask">
                    <InputMask
                      value={phone}
                      onChange={(e: InputMaskChangeEvent) =>
                        //@ts-ignore
                        setPhone(e.target.value)
                      }
                      mask="(999) 999-9999"
                      placeholder="(999) 999-9999"
                      className="inputMaskServ"
                      //@ts-ignore
                    />
                  </div>
                </div>
              </div>
              <div className="second-square">
                <textarea
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  value={message}
                  placeholder="Message..."
                ></textarea>
              </div>
              <div onClick={handleEmailChange} className="btn-send">
                <button>Get a quote</button>
              </div>
            </div>
          </form>
        </div>
        <div ref={formDeviceRef} className="contact-form-device">
          <div className="request-service">
            <span id="mobilerequest">REQUEST A SERVICE</span>
          </div>
          <span>Get a Quote</span>
          <div className="form-device">
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Name..."
              type="text"
            />
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="E-mail..."
              type="text"
            />
            <div className="containerInputMaskPhone">
              <InputMask
                value={phone}
                onChange={(e: InputMaskChangeEvent) =>
                  //@ts-ignore
                  setPhone(e.target.value)
                }
                mask="(999) 999-9999"
                placeholder="(999) 999-9999"
                className="inputMaskServ"
                //@ts-ignore
              />
            </div>
            <textarea
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
              placeholder="Message..."
            ></textarea>
          </div>
          <div onClick={handleEmailChange} className="btn-send">
            <button>Send</button>
          </div>
        </div>

        {/* <div className="certified">
          <div className="img-certified">
            <img src={Certified} alt="certified" />
          </div>
        </div> */}
        <Footer />
      </div>

      <Dialog
        header="Warning"
        visible={errorEmail}
        className="dialogWarn"
        onHide={() => setErrorEmail(false)}
        footer={errDialog}
      >
        <p className="m-0">
          Kindly complete all the required fields to submit your inquiry to the
          company.
        </p>
      </Dialog>
      <Dialog
        header="Success"
        visible={successEmail}
        className="dialogSuccess"
        onHide={() => setSuccessEmail(false)}
        footer={successDialog}
      >
        <p className="m-0">
          Your inquiry has been forwarded to the company. We will be in touch
          with you shortly.
        </p>
      </Dialog>
    </div>
  );
};
