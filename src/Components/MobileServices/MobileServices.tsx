import "./MobileServices.css";
import HeaderSmall from "../HeaderSmall/HeaderSmall.tsx";
//@ts-ignore
import BeforeIntImg from "../../assets/b.png";
//@ts-ignore
import AfterIntImg from "../../assets/a.png";
//@ts-ignore
import AfterExtImg from "../../assets/exteriorafter.png";
//@ts-ignore
import BeforeExtImg from "../../assets/exteriorpainting.jpg";
//@ts-ignore
import PSImage from "../../assets/bcgServicePaintingImg.jpg";
//@ts-ignore
import PWDivisor from "../../assets/AnotherStyle.png";
//@ts-ignore
import ExamplePressure from "../../assets/pw3.jpg";
//@ts-ignore
import ExamplePressure2 from "../../assets/pw.jpg";
//@ts-ignore
import DWRepair from "../../assets/DRYWALLREPAIR.JPG";
//@ts-ignore
import CSDivisor from "../../assets/water.png";
import Cleaning from "../../assets/SVGs/Cleaning.tsx";
import DeepCleaning from "../../assets/SVGs/DeepCleaning.tsx";
import Truck from "../../assets/SVGs/Truck.tsx";
import PostConstruct from "../../assets/SVGs/PostConstruct.tsx";
//@ts-ignore
import Carpet from "../../assets/carpetcleaning.png";
//@ts-ignore
import Desk from "../../assets/deskcleaning.png";
//@ts-ignore
import Trash from "../../assets/trash.png";
//@ts-ignore
import Window from "../../assets/windowcleaning.png";
//@ts-ignore

import CommCleaning from "../../assets/commercialCleaning2.png";
import { InputMask, InputMaskChangeEvent } from "primereact/inputmask";
import { useContext, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import Footer from "../Footer/Footer.tsx";
import emailjs from "@emailjs/browser";
import contexts from "../../Contexts/Context.tsx";
export default () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string | undefined>();
  const [message, setMessage] = useState<string>("");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [errorEmail, setErrorEmail] = useState(false);
  const [successEmail, setSuccessEmail] = useState(false);

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

  const handleEmailChange = (e: any) => {
    e.preventDefault();
    //@ts-ignore
    const isValid = emailRegex.test(email);
    console.log(name, email, message, phone);
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

  const { contactMobileRef } = useContext<any>(contexts);

  return (
    <div className="mobile-services">
      <HeaderSmall />
      <div className="mobile-subheader">
        <img src={PSImage} alt="painting-image.png" />
      </div>
      <section className="mobile-painting-services">
        <div className="mobile-painting-title">
          <span>Painting Services</span>
        </div>
        <div className="mobile-interior-painting">
          <span>Interior Painting</span>
        </div>
        <div className="mobile-about-interior-painting">
          <span>
            If you want your walls to look fantastic, it is best to hire a
            professional painter. The Painting Pros always does proper surface
            prep, including repairing drywall before we apply any paint.
          </span>
        </div>
        <div className="mobile-images-interior-painting">
          <div className="mobile-before-img-painting">
            <img src={BeforeIntImg} alt="interior-img" />
          </div>
          <div className="mobile-after-img-painting">
            <img src={AfterIntImg} alt="interior-img" />
          </div>
        </div>
        <div className="mobile-exterior-painting">
          <span>Exterior Painting</span>
        </div>
        <div className="mobile-about-exterior-painting">
          <span>
            Quality exterior paint and the right exterior painting services work
            as an added layer of protection from the elements, helping to keep
            your home safe from weather damage, insects and dust. The paint can
            even prevent exterior wood from rotting. Certain types of paint can
            protect from specific element.
          </span>
        </div>
        <div className="mobile-images-exterior-painting">
          <div className="mobile-before-img-painting">
            <img src={BeforeExtImg} alt="interior-img" />
          </div>
          <div className="mobile-after-img-painting">
            <img src={AfterExtImg} alt="interior-img" />
          </div>
        </div>
        <div className="mobile-pw">
          <img src={PWDivisor} alt="pressure-w" />
          <div className="mobile-title-pw">
            <span>Pressure</span>
            <br></br>
            <span>
              <span id="washingcolor">Washing</span> <br></br>
              <span id="servicecolor-font">Service</span>
            </span>
          </div>
          <div className="mobile-about-pw">
            <span>
              Is your property looking dirty, dingy, or neglected? Look no
              further than Fauget for all of your pressure washing needs.
            </span>
            <br></br>
            <div className="mobile-about-obspw">
              <span id="obspw">
                Here are just a few of the services we offer:
              </span>
            </div>
          </div>
          <div className="mobile-ul-li-pw">
            <ul>
              <li>Residential Pressure Washing</li>
              <li>Commercial Pressure Washing</li>
              <li>Soft Washing</li>
            </ul>
          </div>
          <div className="mobile-imgs-pw">
            <img src={ExamplePressure} alt="ExamplePressure" />
            <img src={ExamplePressure2} alt="ExamplePressure" />
          </div>
          <div className="mobile-whatis-pw">
            <span>
              Pressure washing or power washing is{" "}
              <b>
                the use of high-pressure water spray to remove loose paint,
                mold, grime, dust, mud, and dirt from surfaces and objects such
                as buildings, vehicles and concrete surfaces
              </b>
            </span>
          </div>
        </div>
        <div className="mobile-drywall-repair">
          <div className="mobile-dw-title">
            <span>Drywall Repair</span>
          </div>
          <div className="mobile-dw-about-dw">
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
          <div className="mobile-dw-repair-info">
            <img src={DWRepair} alt="DWRepair" />
          </div>
        </div>
        <div className="mobile-CS">
          <img src={CSDivisor} alt="CSDivisor" />
          <div className="mobile-cs-title">
            <span>Cleaning Services</span>
          </div>
          <div className="mobile-cs-subtitle">
            RELIABLE AND EFFICIENT CLEANING SERVICES
          </div>
          <div className="mobile-do-cs">Make Your Space Shine Today</div>
          <div className="mobile-explanation-cs">
            <div className="mobile-regular-cleaning">
              <span id="regularcleaning">Regular Cleaning</span>
              <div className="mobile-cleaning">
                <Cleaning className="cleaning" />
              </div>
              <div className="mobile-cs-subexp">
                <span>
                  Keep Your Home or Office Clean and Tidy with Our Reliable and
                  Efficient Regular Cleaning Services. Our Professional Cleaners
                  Use Safe and Eco-Friendly Products to Ensure a Healthy
                  Environment for You and YourFamily or Employees.
                </span>
              </div>
            </div>
            <div className="mobile-deep-cleaning">
              <span id="regularcleaning">Deep Cleaning</span>
              <div className="mobile-cleaning">
                <DeepCleaning className="cleaning" />
              </div>
              <div className="mobile-cs-subexp">
                <span>
                  Our Deep Cleaning Services Go Beyond Surface Cleaning to
                  Remove Dirt and Grime in Hard-to-Reach Areas. We Also Sanitize
                  Frequently Touched Surfaces to Ensure Your Space is Germ-Free
                  and Safe for Everyone
                </span>
              </div>
            </div>
            <div className="mobile-mio-cleaning">
              <span id="regularcleaning">Move-in/out Cleaning</span>
              <div className="mobile-cleaning">
                <Truck className="cleaning" />
              </div>
              <div className="mobile-cs-subexp">
                <span>
                  Moving Can be Stressful, Let Us Take Care of the Cleaning. Our
                  Move-In and Move-Out Cleaning Services Will Ensure Your New
                  Space is Fresh, Spotless and Ready for Occupancy.Don’t Settle
                  for Less, Choose Our Professional Cleaners to Get the Job Done
                  Right!
                </span>
              </div>
            </div>
            <div className="mobile-mio-cleaning">
              <span id="regularcleaning">Post-construction Cleaning</span>
              <div className="mobile-cleaning">
                <PostConstruct className="cleaning" />
              </div>
              <div className="mobile-cs-subexp">
                <span>
                  Renovating or Constructing a Building can Leave a Lot of Mess.
                  Our Post-construction Cleaning Services Will Remove All Debris
                  and Dust, Leaving Your Space Clean and Ready to Use. We Use
                  Top-Quality Equipment and Products to Ensure a Job Well-Done.
                </span>
              </div>
            </div>
          </div>
          <div className="mobile-comm-cleaning">
            <div className="mobile-title-comm-cleaning">
              <span>
                Commercial <br></br>
                <span id="commcleaning">Cleaning</span>
              </span>
            </div>
            <div className="mobile-comm-cleaning-img">
              <img src={CommCleaning} alt="CommCleaning" />
            </div>
            <div className="mobile-deskc-areas">
              <span>
                <b>1.</b> Cleaning carpets as needed.
              </span>
              <span>
                <b>2.</b> Cleaning computer screens and dusting keyboards.
              </span>
              <span>
                <b>3.</b> Cleaning windows and mirrors.
              </span>
              <span>
                <b>4.</b> Disinfecting high-touch surfaces.
              </span>
              <span>
                <b>5.</b> Dusting desks, shelves, and other surfaces.
              </span>
              <span>
                <b>6.</b> Emptying recycspanng bins and trash cans.
              </span>
              <span>
                <b>7.</b> Vacuuming carpets daily.
              </span>
            </div>
          </div>
        </div>
        <div className="mobile-imgs-services-above">
          <div className="mobile-css-img">
            <span>Carpet Cleaning/Vacuum</span>
            <div className="mobile-each-imgs">
              <img src={Carpet} alt="Carpet" />
            </div>
          </div>
          <div className="mobile-css-img">
            <span>Cleaning desks and sreens</span>
            <div className="mobile-each-imgs">
              <img src={Desk} alt="Carpet" />
            </div>
          </div>
          <div className="mobile-css-img">
            <span>Recycling Bins/Trash Cans</span>
            <div className="mobile-each-imgs">
              <img src={Trash} alt="Carpet" />
            </div>
          </div>
          <div className="mobile-css-img">
            <span>Cleaning Window</span>
            <div className="mobile-each-imgs">
              <img src={Window} alt="Carpet" />
            </div>
          </div>
        </div>
        <div ref={contactMobileRef} className="mobile-contact-us">
          <div className="mobile-get-started">
            <span>Call us today to get started</span>
          </div>
          <div className="mobile-contact-form">
            <div className="mobile-area-insert">
              <div className="mobile-name">
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  placeholder="Name..."
                ></input>
              </div>
              <div className="mobile-mail-input">
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="text"
                  placeholder="Email..."
                ></input>
              </div>
              <div className="mobile-phone-input">
                <InputMask
                  value={phone}
                  onChange={(e: InputMaskChangeEvent) =>
                    //@ts-ignore
                    setPhone(e.target.value)
                  }
                  mask="(999) 999-9999"
                  placeholder="(999) 999-9999"
                  className="mobileInputMaskComp"
                  //@ts-ignore
                />
              </div>
              <div className="mobile-message-text">
                <textarea
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  placeholder="Message..."
                ></textarea>
              </div>
              <div className="mobile-send-button">
                <button onClick={handleEmailChange}>Get free estimate</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
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
