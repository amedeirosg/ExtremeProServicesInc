import "./Reviews.css";
import Header from "../Header/Header.tsx";
import BackgroundReviews from "../../assets/background-reviews.png";
import Question from "@mui/icons-material/QuestionAnswer";
import Footer from "../Footer/Footer.tsx";
export default () => {
  const showErrorMessage = () => {
    return false;
  };

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const checkEmail = (e) => {
    console.log(e.preventDefault())
    const isValid = emailRegex.test()

  }

  return (
    <div className="container-forms">
      <button onClick={checkEmail}>x</button>
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
              THANK YOU FOR CHOOSING EXTREME PRO SERVICES INC! PLEASE TAKE A
              MOMENT TO LEAVE US A REVIEW!
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
                <input placeholder="Your name..." type="text"></input>
                {showErrorMessage() ? <span style={{ color: "red", fontWeight: "normal" }}>
                  This field is required *
                </span>:''}
                
              </section>
              <section className="reviews-message">
                <span>Message *</span>
                <textarea placeholder="Add a comment..."></textarea>
                {showErrorMessage() ? <span style={{ color: "red", fontWeight: "normal" }}>
                  This field is required *
                </span> : ''}
              </section>
            </div>
            <div className="reviews-submit-button">
              <button>Submit</button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
