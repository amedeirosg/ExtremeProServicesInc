import "./ContactUs.css";
import { InputMask, InputMaskChangeEvent } from "primereact/inputmask";
import { useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import emailjs from "@emailjs/browser";
import "primeflex/primeflex.css";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

//@ts-ignore
import LeftImgContact from "../../assets/BackgroundContact2.png";

export default () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [errorEmail, setErrorEmail] = useState(false);
  const [successEmail, setSuccessEmail] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState<string | undefined>();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
        "service_0l77qw8",
        "template_m2v56mh",
        templateParams,
        "Pb5FKFPSReEyXVUIo"
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
    <div className="containerContactService">
      <div className="containerShowImg">
        <div className="containerImgLeft">
          <img src={LeftImgContact} alt="leftImg" />
        </div>
        <div className="containerAllDivs">
          <div className="containerContactTitle">
            <span>Contact us</span>
          </div>
          <div className="containerContactArea">
            <div className="containerContactName">
              <span>Name *</span>
              {/* @ts-ignore */}
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="James Miller"
                type="text"
              />
            </div>
            <div className="containerContactPhone">
              <span>Phone *</span>
              <div className="containerInputMask">
                <InputMask
                  value={phone}
                  onChange={(e: InputMaskChangeEvent) =>
                    //@ts-ignore
                    setPhone(e.target.value)
                  }
                  mask="(999) 999-9999"
                  unmask
                  placeholder="(999) 999-9999"
                  className="inputMask"
                  //@ts-ignore
                />
              </div>
            </div>

            <div className="containerContactEmail">
              <span>Email *</span>
              {/* @ts-ignore */}
              <input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="emailexample@gmail.com"
                type="text"
                value={email}
              />
            </div>

            <div className="containerContactTxtService">
              <span>Service request</span>
              {/* @ts-ignore */}
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us what you need..."
              ></textarea>
            </div>
            <div onClick={handleEmailChange} className="containerBtnSend">
              <button>Send</button>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        header="Warning"
        visible={errorEmail}
        style={{ width: "50vw" }}
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
        style={{ width: "50vw" }}
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
