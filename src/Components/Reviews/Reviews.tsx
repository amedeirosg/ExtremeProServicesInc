import "./Reviews.css";
import Header from "../Header/Header.tsx";
import BackgroundReviews from "../../assets/background-reviews.png";
import Question from "@mui/icons-material/QuestionAnswer";
import Footer from "../Footer/Footer.tsx";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputMask, InputMaskChangeEvent } from "primereact/inputmask";
import FeedbackImg from "../../assets/Feedbackpng.png";
export default () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [custom, setCustom] = useState("");
  const [errorName, setErrorName] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [successEmail, setSuccessEmail] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const showErrorForm = (e: any) => {
    e.preventDefault();

    const isValid = emailRegex.test(email);
    console.log(name, email, phone, custom, message);
    if (isValid) {
      if (name === "") {
        setErrorName(true);
      } else {
        setErrorName(false);
      }
      if (message === "") {
        setErrorMessage(true);
      } else {
        setErrorMessage(false);
      }

      if (name !== "" && message !== "") {
        console.log(name);
        console.log(message);
        const templateParams = {
          //@ts-ignore
          from_name: name,
          //@ts-ignore
          message: message,
          email: email,
          phone: phone,
          customAmount: custom,
          //@ts-ignore
        };

        emailjs
          .send(
            "service_0l77qw8",
            "template_1nipcho",
            templateParams,
            "Pb5FKFPSReEyXVUIo"
          )
          .then(
            (res) => {
              console.log("Email sent!", res.status, res.text);
              setName("");
              setMessage("");
            },
            (err) => {
              console.log("ERROR:", err);
            }
          );
        setSuccessEmail(true);
      }
    }
  };

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

  return (
    <div className="container-forms">
      <Header />
      <header className="reviews-header">
        <div className="reviews-backgroundimg-area">
          <img
            className="reviews-backgroundimg"
            src={BackgroundReviews}
            alt="BackgroundImageReviews"
          />
          <div className="reviews-title-page">
            <span>LEAVE A REVIEW</span>
          </div>
        </div>
        <section className="reviews-thx-feedback">
          <section className="reviews-title">
            <span>
              Thank you in advance for choosing our services Extreme Pro
              Services Inc, I hope you enjoyed it and can also recommend it
              to your friends!
            </span>
          </section>
          <section className="reviews-subtitle">
            <span>
              We take immense pride in delivering exceptional results while
              creating a positive experience for homeowners like you. Your
              review will not only help us understand how we can further enhance
              our services but also assist other homeowners in making an
              informed decision.
            </span>
          </section>
        </section>
      </header>
      <div className="reviews-content">
        <section className="reviews-box">
          <div className="reviews-img-feedback">
            <img src={FeedbackImg} alt="feedbackimg.png" />
          </div>
          <div className="reviews-tilte-content">
            <div className="reviews-question-background">
              <Question
                style={{ fontSize: "small" }}
                className="reviews-icon-question"
              />
            </div>
            <span>Feedback</span>
          </div>
          <div className="reviews-leaveus-feedback">
            <div className="reviews-title-feedback">
              <span>FILL THE GAPS BELOW TO LEAVE US A FEEDBACK</span>
            </div>
            <div className="reviews-your-feedback">
              <section className="reviews-name">
                <span>Name *</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name..."
                  type="text"
                ></input>
                {errorName ? (
                  <span style={{ color: "red", fontWeight: "normal" }}>
                    This field is required *
                  </span>
                ) : (
                  ""
                )}
              </section>
              <section className="reviews-email">
                <span>Email *</span>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="emailexample@gmail.com"
                  type="text"
                  value={email}
                />
              </section>
              <section className="reviews-phone">
                <span>Phone </span>
                <InputMask
                  value={phone}
                  onChange={(e: InputMaskChangeEvent) =>
                    //@ts-ignore
                    setPhone(e.target.value)
                  }
                  mask="(999) 999-9999"
                  placeholder="(999) 999-9999"
                  className="inputMask"
                  //@ts-ignore
                />
              </section>
              <section className="reviews-cust-amount">
                <span>Custom Amount </span>
                <input
                  placeholder="Type your text..."
                  value={custom}
                  onChange={(e) => {
                    setCustom(e.target.value);
                  }}
                  type="text"
                />
              </section>
              <section className="reviews-message">
                <span>Message *</span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Add a message..."
                ></textarea>
                {errorMessage ? (
                  <span style={{ color: "red", fontWeight: "normal" }}>
                    This field is required *
                  </span>
                ) : (
                  ""
                )}
              </section>
            </div>
            <div className="reviews-submit-button">
              <button onClick={showErrorForm}>Submit</button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <Dialog
        header="Success"
        visible={successEmail}
        className="dialogSuccess"
        onHide={() => setSuccessEmail(false)}
        footer={successDialog}
      >
        <p className="m-0">
          Thank you for your feedback! It's very important to us! ❤️
        </p>
      </Dialog>
    </div>
  );
};
