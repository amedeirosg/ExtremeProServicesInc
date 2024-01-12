import "./ContactUs.css";
import { InputMask, InputMaskChangeEvent } from "primereact/inputmask";
import { useState, useRef } from "react";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primeflex/primeflex.css"; // css utility
//@ts-ignore
import LeftImgContact from "../../assets/BackgroundContact2.png";
import { RadioButton, RadioButtonChangeEvent } from "primereact/radiobutton";

export default () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailRef = useRef(null);
  const [service, setService] = useState<TypeOfService | null>(null);
  const [rooms, setRooms] = useState<string>("");
  const [bathrooms, setBathrooms] = useState<string>("");
  const [phone, setPhone] = useState<string | undefined>();
  interface TypeOfService {
    name: string;
  }

  const services: TypeOfService[] = [
    { name: "Residential" },
    { name: "Commercial" },
  ];

  const handleEmailChange = () => {
    //@ts-ignore
    const isValid = emailRegex.test(emailRef.current.value);
    if (isValid) {
      console.log("send");
    } else {
      console.log("errorMail");
    }
  };

  return (
    <div className="containerContactService">
      <div className="containerShowImg">
        <div className="containerImgLeft">
          <img src={LeftImgContact} alt="img" />
        </div>
        <div className="containerAllDivs">
          <div className="containerContactTitle">
            <span>Contact us</span>
          </div>
          <div className="containerContactArea">
            <div className="containerContactName">
              <span>Name *</span>
              <input placeholder="James Miller"type="text" />
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
                />
              </div>
            </div>
            <div className="containerContactEmail">
              <span>Email *</span>
              <input placeholder="emailexample@gmail.com"type="text" />
            </div>
            <div className="containerContactTxtService">
              <span>Service request</span>
              <textarea placeholder="Tell us what you need..."></textarea>
            </div>
            <div className="containerBtnSend">
              <button>SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
